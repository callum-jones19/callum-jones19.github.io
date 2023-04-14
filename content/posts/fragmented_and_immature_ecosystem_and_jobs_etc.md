---
title: "Cargo: The Good, the Bad, and the Ugly"
date: 2023-03-31
draft: false

showReadingTime: true
showToc: true
---

# Introduction
In the last blog post I made, I took a look at why I liked Rust's *Cargo*. In 
particular, I focused on how Rust's decision to write cargo as a first-class
citizen who learnt from the mistakes of prior package managers helped make it 
a very intuitive and simple package manager to use. In this blog post, I want 
to look at *Cargo* again, but this time focusing on one very particular design 
decision its designers made: to make the `std` library extremely small and have 
a substantial amount of important functionality in external crates.

# The Good 

![f](https://media.giphy.com/media/mBGcwj4nx2qIoTObev/giphy.gif)
> ^ Me to C's stupidly obtuse man-page hunting just to figure out how to open a file.

Modular is in. Modular is hot. I want some modular. Modular it's gonna be. The 
first thing we see with the `std` library in Rust is just how basic it is. In fact,
in the very first lecture we had, we already had to import the `rand` crate,
because this was not a first-class, included module in Rust's default ecosystem.
At first this is quite jarring, especially coming from a language like C, Java,
etc, where all sorts of libraries come packaged by default with the langauge. 
However, I found that after getting over the surprise of just how bare-bones 
the default libraries are, I found myslef agreeing more and more with Rust's 
decision. By focusing the Rust team on a single crucial set of functions and 
data types in `std`, the team achieved a number of advantages:
1. The core code of the standard libraries that the Rust team has to maintain 
stays small. Consequently, the code remains easier to maintain for the team,
which keeps the project as a whole focused and efficient.
2. As somewhat of a corollary of the first point, a small codebase is also 
easier to read. This means that community contribution becomes easier,
as the community themselves can understand the codebase and its design 
much easier than if there were 10s of standard libraries to look through.
3. Clean, simple, clearly scoped-out code reduces the surface area of the code.
Lower surface area means lower surface area that could be vulnerable to exploits.
4. The community can maintain the crates that fill in the gaps. In doing this,
you will have smaller subsets of people focused on one particular task. Similar
to what I mentioned in the point above, this makes it easier for the code in 
question to be carefully considered and analysed for vulnerabilites and poor 
design decisions. You aren't diulting the work of the language's development 
team over a large amount of modules, but instead having a select few individuals
focus on very particular tasks with great rigour. Woo-hoo.

So, as we can see there are plenty of things to like about this modular 
approach Rust has taken to its default libraries.

# The Bad

The bad in this design is clearly that, in relying on community members to 
maintain libraries that are possibly quite integral to people being able to 
write any program they would expect to be able to write in the language, you run
the risk that such a crate will break or be left unmaintained in an unusable state.
If this happens, then large swarms of people are going to be left without a 
useable option until someone else decides to come in and fix the crate themselves,
without the commercial backing that would come if the language's developers themselves
were in charge of maintaining the language.

# The Ugly

The interesting part of all of this is the *ugly*. That is, the consequences of
this choice to have a minimal standard library that aren't good, but they aren't
necessarily terrible either - they just are.

The first major one is that often, there is no clear choice as to what crate
you should choose to use to solve some problem. This isn't always the case, such
as with crates like `rand`. But with smaller, possibly more niche crates, there can
be multiple alternatives available with no clear choice of which one is the most
appropriate. This leaves you as the programmer in a weird spot, because you want 
to choose a crate that is not only good at solving the problem you have, but that 
will be maintained a reasonable amount into the future of your program's development.
This makes the language somewhat less intuitive to beginners, who may be left 
spending time they would not have to spend with other langauges researching 
which modules to use, checking the history of the crates and who the maintainers
are.

This leads in to another interesting problem - namely, if a crate becomes unmaintained,
it might not always be communicated well to the community, especially if the 
crate was already very popular. We can actually already see this with the massively
popular `tui` crate, which we ourselves had to use as part of the first assignment.
If you go to the GitHub page, you will see a note saying it is unmaintained. With 
a bit more research, you will then find that there is a new community fork 
available, called (very cleverly) `ratatui`, that picks up where it left off.
But, as a casual Rust developer, there is no clear way of knowing this. If `tui`
had issues, you might only discover `ratatui` as an alternative far into development,
or might miss it entirely. And then the problem continues - what if `ratatui` becomes
unmaintained, etc. Now, admittedly, this is a problem for any third-party library 
in any langauge. However, I think the problem is exacerbated in Rust **because** 
of Rust's choice to only ship with a minimal amount of libraries.

Finally, having so much dependency on community crates means that the maturity
of the language's ecosystem tends to lag behind where it otherwise might be a little
bit. People won't go to the effort of developing a crate until they realise they 
need it themselves, etc. This immaturity concurrently means that companies wishing
to use Rust in a commercial context may be more hesitant to do so, as core 
functionality needed by their software might simply not exist, or may not exist 
in a mature enough state for it to be worth investing in at a company-wide scale.

# Conclusion

This is all interesting to consider, because everything stems from the single design
decision the Rust team made - a decision which clearly has many good implications.
However, it is important to remember that each choice has its trade offs, and 
these are the ones that Rust has to contend with in this case. Clearly the good 
was thought to outweight the bad and the ugly consequences, it does not mean
those worse consequences do not exist.
