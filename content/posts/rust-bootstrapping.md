---
title: "Whose Language Is It, Anyway?"
date: 2023-03-16T17:36:12+11:00
draft: false

showReadingTime: true
showToc: true
---

# The Problem

> ⚠️ **Disclaimer**
> 
> This post is the efforts of a good amount of research, but I am completely exhausted at the moment and so may have missed something, or just plain misunderstood some of the sources. Please let me know if you read something and it's either inaccurate or seems like I haven't quite understood something and might have slightly misrepresented it, and I'll update the offending section.

Anyone who's taken more than a cursory glance at Rust's source code has probably had the same thought that I did when I first looked at it: "how is Rust written in Rust?" This question certainly isn't limited to Rust, either. Look at the source code for any language and you'll likely see a similar phenomenon, from niche languages like [Crystal](https://github.com/crystal-lang/crystal), all the way up to the major players like [Rust](https://github.com/rust-lang/rust) itself.

At first glance, the idea of having a language that was written in itself is counterintuitive at best, and seems to be obtuse at worst. It does, however, raise a number of good questions:
1. How can a language be coded in itself before that language even had a compiler. Essentially, "what came first, the chicken or the egg?"
2. If a language weren't to be coded in itself, what would it be coded in?
3. Do the limitations of a language itself ever create limitations on the functionality of future compilers and language features?

# The Solution
## What *is* in a language's source code?
To start, it is worth mentioning what is actually contained in a language's source code generally. When I asked myself this question, I realised I wasn't exactly sure - I knew that there had to be a language compiler, but then after that I couldn't put my finger on what else was important in a language. It turns out, there is not necessarily anything else - the compiler is the minimum (ignoring interpreted languages). This makes sense. The compiler is what is turning the code you write into code that the machine itself can understand. Once you have a compiler that can do this, then this *is* the mechnism that enforces the rules, limitations and regulations that are defined in the language design and spec.

To be clear, there can be and certainly are other elements within a language's source code. Rust's source code also contains submodules for important language tools, such as `cargo`, `tidy`, and a range of other integral language tools. But importantly, these tools all flow on from a working compiler, and they do not themselves actually contribute to compiled code. In a similar way to the compiler itself, however, they will look at a file written in the language in question and from that create or do something useful. If you look in the `/src/tools` directory in the Rust repository, for example, you will find `rustbook`, `rust-analyzer`, and a whole host of other tools which we rely on for quality-of-life features in the language. Not necessarily integral to writing the code itself, but things that will generate files from source code (like docs), or act as utilities while you code (like `rust-analyzer`).

To summarise, the compiler is the essential element of a language's source code, and is the mechnism through which a language implements its rules, limitations and regulations. Other components in the source code are tools that will not compile code, but which will help either as a utility while coding, or by generating useful files from code written in the language (like docs).

## Coding a language in itself
Coming back to where we started, it is useful to rephrase our question. The more accurate question here is ask *how was Rust's **compiler** written in Rust*. This is an important distinction to make. Assuming we had planned out the language carefully enough, and had developed a sufficiently strong spec of the rules of the language, then we would be able to create a compiler in any language we wanted. Say I came up with a great new design for my own language called `See`. I would be more than able to write a compiler in `C` that validated `See`'s rules. This compiler for `See` written in `C` would then itself be compiled into a binary and be executable as a `See` compiler by whatever fool wanted to write my language and have it compile into a binary. So ultimately, you don't *need* to write a compiler in the language you are actually compiling (but most languages do, which I will touch on later).

So, with the knowledge that we can choose an arbitrary language to write a compiler in, we are still left with the question of how we ended up with a compiler for Rust, *in* Rust. This of course feels a bit like a question of, "what came first, the chicken or the egg?" The truth with compilers is that neither came first. What actually happens is a 2nd language is chosen (in Rust's case, this was a language called OCaml.[^1] An initial compiler is built in this language that can compile a very basic subset of the language features. Using this, we can then write an *extremely* basic compiler in our language (again, Rust in this instance, so this would be a `.rs` file). This would then be compiled into an actual working binary using our initial compiler. To consider it a bit more visually:

1. Write Rust compiler code that enforces *very basic* subset of Rust rules *in OCaml*.
2. Compile this OCaml code with OCaml tools.
3. This gives a basic Rust compiler binary file.
4. Write another basic Rust compiler that understands a new Rust feature, but this time write the source code for the compiler in Rust, using only the basic features understood by our first rudimentary compiler.
5. Compile this into a binary using the original *OCaml*-written compiler.
6. We now have our first-iteration Rust compiler, whose source code is written in Rust.

Fundamentally, this encpasulates two ideas, discussed more below:
- Bootstrapping
- Self-hosted

## Bootstrapping & Self-hosted Compilers

*Bootstrapping* refers to the process of building a self-hosted compiler, as outlined above. *Self-hosted* describes a compiler that is written in the language which it compiles. So essentially they are describing the same thing, but bootstrapping is the verb and self-hosted is the adjective.

While the general process outlined for making the first self-hosted compiler above seems fairly intuitive, a number of interesting problems pose themselves when it comes to adding new features to the compiler. [This](https://www.youtube.com/watch?v=oUIjG-y4zaA) talk done at RustConf 2022 gives a fantastic overview of a lot of the complexities of bootstrapping, but I'd like to briefly focus on one crucial feature: that each compiler is built by the immediately previous one.  This follows this basic process:

1. Take our first compiler to be our first stable compiler build, for the sake of example. Then,
2. Our beta build will then be built by that stable built (as it is the previuos)
3. Our nightly build will be built by that beta build (again, the previous in the history).
4. Any new nightly builds will be built by the past nightly build (which would be the previous),
5. etc...

This has an important implication: we cannot use anything older than the previous compiler to compile our new compiler. This might seem weird at first, but it makes sense when you really stop and think about it. Say our nightly 1.63 compiler uses some Rust feature that was given support in the nightly 1.62 compiler. If we try using a compiler any older, like nightly 1.61, then our program won't compile. Despite having valid syntax, this older Rust compiler has no idea about it, and so will refuse to build the program. Consequently, every compiler build must be built by the one before it.

There are a number of other very interesting quirks that come from this process, such as how does the `std` library get built *before* the compiler does? To stop this post from getting too long, I'm just going to refer back to [the RustCon talk](https://www.youtube.com/watch?v=oUIjG-y4zaA) which details bootstrapping the compiler if anyone is interested in learning more, however I might look at it in the future for a future post.

## But... why?

The last question I found myself asking about this was, simply put: *why?* Why go to all of this effort, when a compiler could be written in an existing fully functioning language, like `C`. There are a couple of reasons I came across and thought of myself:
- Dependencies. By writing the compiler in the language we are maintaing ourselves, we remove the risk of being limited by this language. This in particular would apply where a language stops being maintained, or simply lacks certain features we might want our compiler to later have (though arguably if this is the case, it probably isn't a great choice of language to write a compiler in anyway).
- [This](https://cs.stackexchange.com/questions/56897/why-would-we-want-a-self-hosting-compiler) StackExchange post also suggests the idea that writing a compiler in its own language is a good litmus test for the language itself, as compilers contain an inherent amount of complexity.
- The same post also suggests the idea (which personally I think is the most reasonable) that developers normally write self-hosted compilers because the language they are developing is simply a language they like writing in. It seems slightly obtuse that, having gone to the effort of desigining a new language which presumably fixes a range of issues that you had with other languages, you would then use some other language to write a compiler which you would have to maintain and update with your language. This is especially the case given that often people will write secondary compilers for a language in a different language that they prefer, and will be able to maintain better themselves anyway.


# References

- RustCon Presentation  2020: https://docs.google.com/presentation/d/1GnKlK98APzZ0Fw1BOqbroPQyvIio5Tm7SP7P0B8x3Cc/edit#slide=id.g13ff117d326_0_49
- https://users.rust-lang.org/t/understanding-how-the-rust-compiler-is-built/87237
- https://github.com/rust-lang/rust/tree/master/src
- https://guix.gnu.org/blog/2018/bootstrapping-rust/
- https://hackernoon.com/building-your-own-programming-language-from-scratchhttps://bas.codes/posts/create-a-programming-language


[^1]: https://en.wikipedia.org/wiki/OCaml
