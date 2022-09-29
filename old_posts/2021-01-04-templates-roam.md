---
title: "Quick post: Three Uses of Roam Templates"
excerpt_separator: "<!--more-->"
header: 
 teaser: /assets/images/astrolabe-white.jpg
classes: wide
toc: true
toc_icon: "cog"

---

## Summary

*Examples of some uses of Roam templates.*

---

To add a roam template just write a keyword in a block, followed by `[[roam/templates]]` and everything that you want to serve as a template goes nested under this block. Example:

![Routine](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2FMKXcnTmtnJ.png?alt=media&token=95b54005-3f36-4753-a7e7-b8e603f445f6)

Then by typing `;;` a dropdown menu will appear so you can choose your keyword and it will replace by the blocks you nested under that keyword

![RoutineGif](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2FIBO_Bcjnr7.gif?alt=media&token=4b04f26a-73db-42d1-b1be-3a4bdbb2f7bb)

That's it. 

Now, I wanted to write in this blog again so I thought the next examples may be useful.

## Example: block tagging

One of the problems with using blocks as tags is that if you use a too common of a word for tags for your block - like `books` - it will be hard to find it when you put it into parenthesis: it will show too many options that happen to have the word 'books' on them, and Roam will show the most recently used blocks first.

With Roam templates, we can get around that. For me, it's useful to have a list of theorems, at least of those that I find to be important. There's no problem in creating a page `[[Theorems]]` but say we wouldn't like to create a page just to store theorems. We can create a block like this one

![Theorem](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2FhQTvxMycwd.png?alt=media&token=d668119d-3ee1-4ccd-84b9-4e422abd5948)

This is useful because I just click on the reference number and it shows me a list of theorems and where I tagged all those theorems. But I still have the problem of too many blocks showing up when I start typing the double parenthesis and write ´theorem´ as was the case with ´books´. If we create a roam template by copying and pasting the **block reference** of the theorem block, we have: 

![TheoryPastedRef](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2F9xJmOlOsLW.png?alt=media&token=781ceb4d-4c47-40a9-a232-c2561191e40b)


Which actually looks like this

![TheoremPastedRefDone](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2F2qzIpPJkRB.png?alt=media&token=037370c6-fe1a-4128-96cf-6ba9b153d256)

Now if we type `;;` in any block, the option `Theorem` will show up

![TheoremDropdownMenu](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2FzqL7fZa3_r.png?alt=media&token=48588146-f52d-4521-b495-4e36dc7deddd)

When clicking on `Theorem` the result is

![TheoremResult](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2Fljp9_AkGkj.png?alt=media&token=33f0c6c6-4c63-4ff4-af47-aa1896b9bd3b)

So this new block is tagged as a theorem and you will be able to find it later by either double-clicking on it or clicking in the reference number where the original block is stored.

## Example: emojis

Consider for example the situation where you want to use an emoji to label something. For instance, We might think that the following emoji '◼' is useful to indicate that some proof is completed. So we might create a roam template to assign this emoji to the phrase 'QED':

![qed](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2F1DYcjkXJJS.png?alt=media&token=97747ec2-b8fc-463d-9e60-b2f641b9125a)

and if we're writing a proof or want to indicate the exercise is done we might write:

![qedDropdownMenu](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2FNTjYZNm9UF.png?alt=media&token=c4f813f3-932e-4c96-982d-6d8203c8b18c)

With the result

![qedResult](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2F6QhDFiA3y5.png?alt=media&token=63766d73-8b69-44b3-8e11-1e5c940cee8e)

One caveat of this is that we have to end the sentence in a period before writing `;;qed`, otherwise this emoji will erase what came before it. Or maybe it's a bug on my side, I don't know. To be safe, emojis at the beginning of sentences won't have this problem.

## Example: $\LaTeX$ routines

We can still use it as shortcuts for common LaTeX expressions that may be either long or are to show up often in our writing. Example: the hamiltonian of a single particle $ H = \frac{\vec{p}^{2}}{2m} + V(\vec{x}) $:

![hamiltonianGif](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2FJ1E8YF7fzR.gif?alt=media&token=d2f5786a-659b-4e9a-850f-858c9f1bd8f0)

Or maybe we can always call LaTeX commands that we have trouble remembering by creating a template `LaTeX commands`. 

Anyway, you get the idea. That's all for now. Expect more writing coming in next week and stay safe. 🐇

<!-- LikeBtn.com BEGIN -->
<span class="likebtn-wrapper" data-theme="custom" data-btn_size="20" data-f_size="16" data-icon_size="30" data-icon_l="hrt6" data-icon_l_c="#0512fb" data-icon_l_c_v="#fb0505" data-icon_d_c_v="#bd0019" data-brdr_c="#fdfdfd" data-i18n_like=" Did you like this article?" data-ef_voting="grow" data-dislike_enabled="false" data-icon_dislike_show="false" data-counter_zero_show="true"></span>
<script>(function(d,e,s){if(d.getElementById("likebtn_wjs"))return;a=d.createElement(e);m=d.getElementsByTagName(e)[0];a.async=1;a.id="likebtn_wjs";a.src=s;m.parentNode.insertBefore(a, m)})(document,"script","//w.likebtn.com/js/w/widget.js");</script>
<!-- LikeBtn.com END --->