---
title: "Garbage Collection: I Just Want to Be Pure"
date: 2023-04-14
draft: false

showReadingTime: true
---

# Introduction

I think easily one of the coolest concepts Rust has is the idea of compile-time
"garbage collection". I say this in quotes because obviously this is not 
garbage collection it the traditional sense, because everything can be calculated
at compile time (and so there is no garbage collection running during execution).
But it's such a neat idea, especially having come from languages like Java where 
part of the praise you would often see for the language was about its memory collection features.

## Part I: The Impurities

Rust as a language is fascinating, because it takes so many ideas that I think 
at this stage have become almost like second nature to a lot of us who have 
programmed for a while, and decides to challenge a great deal of them. Obviously it does
this for borrows, ownership, etc, but for it to then take these premises and
go a step further is what makes it stand out for a language.

There is a problematic element about getting too familiar with a concept or field.
As the subheading for this section points to, when we become accustomed to how 
something is, and what we have to do to work around it, we start to become 
desensitised to the fact that it is fundamentally flawed in the first place. I 
think the whole concept of `Option` and the corresponding `None` type is a 
fantastic example of this. I know that at least for me personally, I have never
once questioned the idea of `null` types. They have been there for us since we 
all started coding (in my case with *COMP1511*). It just seemed that the premise
of `null` represents None, and that's how it is. The thought that it at worst comes with
a whole lot of potential memory safety overhead (as in `C`), or that at best it 
creates room for a whole lot of application panics (`NoneType` in Python, etc)
just became something that I took for granted. Because I became comfortable with 
the fact that a real life none value was to be represented by some idea of `null`,
I never stopped to actually think, maybe there could be a proper data type that 
we could use to represent this instead, and then this data type could have the 
safety guarantees that we afford all other types. 

## Part II: Having a Wash

So, even if conceptually you don't like Rust, or maybe you just see it as some 
trendy language that will die at some point and nothing too much more, it serves 
as an excellent reminder: **don't take things for granted**. It's so easy to 
forget to think about what I discussed above and just accept that things are how
they are because conceptually, it is comfortable to you. This was something that 
was hammered home in COMP6481, the cybersecurity course I did a couple of years back,
but it's so cool to be able to actually have these sort of realisations personally.

Having identified elements of a langauge, or programming deisgn generally, that 
we think aren't as perfect as they could be, it's then up to us to consider what
alterantives could exist in their place. So, in Rust's case, the problem of `null`
pointers was solved by this `Option<T>` enum. But obviously, Rust solves other 
issues too, such as concurrency through concepts of ownership, etc.

What I think is **really** important from all of this is to not easily 
dismiss experimental languages. I say this having done the Dafny course and 
having done exactly that all throughout the course - saying this language is horrible
and clunky, and I would never use this in my career in the future. But Rust has
shown me that this misses the most crucial point of projects like this. They are 
not necessarily there to be successful or useful in everyday life. Rather, they 
are there to fundamentally challenge an existing programming paradigm. Again,
Rust is the perfect example, with the concept of lifetimes having come from 
an experimental language itself. So remember, stop, and consider what can be done
better.

## Part III: Achieve the Frank Reynolds Dream and Become Pure

Having considered all of this, we now might choose to implement a feature in a 
language we are designing that fundamentally challenges previous ways of thinking
about code. Let's consider Rust's concept of ownership, as an example. What we
now find is that, on top of addressing existing problems that we explicitly set 
out to address, we might have simultaneously improved other aspects of design we
didn't explicitly have in mind when we started the changes. For Rust, this is the 
ability to do away with traditional forms of garbage collection. It is so clearly
statically typed, and ownership is so definitively set at compile-time, that 
suddenly we have a langauge that can understand what scopes code is and isn't 
going to be used in. Consequently, the langauge can also understand when memory 
will and won't be needed, and what will or won't be needing it. This grants us 
the ability to reap all of the benefits we would expect from tools like garbage
collection in Java, but with none of the runtime overhead that tends to contribute
to the bloat you can see in memory usage during execution of Java programs.

To summarise what we've seen above: question what we take for granted, and take time 
to consider how it could be improved from a good design perspective. With enough
careful consideration at this stage in the design process, we might be able to 
solve a much wider set of problems than only those that prompted us to make the 
change in the first place.

