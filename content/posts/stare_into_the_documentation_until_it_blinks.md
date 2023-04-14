---
title: "Stare Into the Documentation Until It Blinks"
date: 2023-04-14
draft: false

showReadingTime: true
---

# Documentation as an Afterthought

We've all had those moments. The ones at 2am where you're finishing off that Python
assignment, and you look at the linter yelling "Missing Docstring" over and over
all down your modules.

Or who could forget the times when you've done work in a group project in a loosely
typed language, such as Python or Javascript, and it's come to hooking everyones
modules together into a single cohesive main function and you suddenly go, "wait,
what does this return? And why am I getting an `Err: received int but was expecting
string` when I type `32` into the age parameter?"

We've all had moments like this, because I think as programmers it's in our
nature to solve a problem first and foremost. A lot of the time, any activity 
which takes time away from this process feels like at best a waste of time, but at 
worst pointless, something you are only doing because you were told you should do it 
one time and begrudgingly agreed to go along with it. We all know that documentation 
is important, because we've all struggled to understand code that is somewhat lacking
in this department, but none of us really want to take the time to do it.

Importantly, because a lot of the time writing good comments, function docstrings,
and parameter types in function definitions (in dynamic languages, like Python, JS, etc)
already feels like an effort, and something that you have gone out of your way 
to do (so people should appreciate the fact that it is there at all), we tend 
not to want to go past this. So this means sure, if someone peeks at your code, 
or needs to fork it and modify it directly, they can get a pretty decent idea of what
everything does. However, they will be nonetheless in the dark if they want to take a more
cursory glance at your library. Yes, you can fix this by writing your own documentation thanks
to some good existing tooling like GitBook and MDBook, but it is a very consicous and active step you 
have to take.

What this means is that, in reality, very few people take it.

# Documentation From the Beginning

This is where Rust takes a different stance. Lik
