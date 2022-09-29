---
title: "Blocks in Roam II: Citations"
excerpt_separator: "<!--more-->"
header: 
 teaser: /assets/images/astrolabe-white.jpg
classes: wide
toc: true
toc_icon: "cog"
---

[↩ Blocks in Roam I: Decluttering](https://costarichard.github.io/tools/roam/roam-blocks/)

---
## Summary


*This is the second post in a series of posts on using Roam for research. This one is about using block references to cite papers, books and other types of content.*

---


## Citations in Roam


<p><span style="float: left; width: 0.8em; font-size: 600%; font-family: Georgia, courier; line-height: 75%;">O</span>ne of the uses I'm making of blocks in Roam is to reference papers in my writing, as citations. It's just not feasible to create a page for every paper or book you want to cite.</p>


First, I created a database to store all references I may want to cite in the future:


<img src="/assets/images/roam-citations/references.png" width="600" class="center">
*All my citations*


Here every block contains bibliographical information. You can see that some blocks are different than others and that all have nested blocks as well, indicated by the grey circle around the bullet. I'll get to that in a minute. The numbers in each bullet, to the right side of the image, show us how many times that particular block has been referenced. For example, in this image, every block was cited only once. If you click that number, a sidebar shows up with the mentions of that block

![](/assets/images/roam-citations/mentions.png)
*Landau & Lifshitz's Statistical Physics mentions*

You can see that the book "Statistical Physics" by Landau & Lifshitz was mentioned twice, both in the `Math & Physics Wiki` page in two different blocks: one about the second law of thermodynamics, and one about adiabatic processes. This is really useful because you create citations quite quickly and never lose track of where you've cited what.

The way I use this database is by setting *aliases*. Aliases' use the syntax: `[alias](page link OR block reference)`. That way, the full paper name is not visible and the flowing of the text is not interrupted by an awkward reference suddenly showing up. Instead, it appears as AUTHOR-DATE in my notes.  So if I want to refer to the above-mentioned book, I would just write (Landau, Lifshtz 1980) and reference the block in the references database. To do this, I use the block syntax to search for the paper by typing `(())` and start writing "Feynman" and hit enter. The full syntax ends up being something like this `[(Landau, Lifshtz 1980)](((KNygujlcG)))`, where "KNygujlcG" is the block reference id. I put the parentheses inside the alias, like in `[()]`, so they are also shown in blue as part of the link to the block. This is purely a matter of taste: ([Feynman 1982](https://link.springer.com/article/10.1007/BF02650179)) and [(Feynman 1982)](https://link.springer.com/article/10.1007/BF02650179).

## Nesting Info Inside

There may be situations where you don't want to use aliases. In those situations when you reference some block in your references database, it will show up as it is. That's why you should *nest* information you want to keep about that particular paper or book 

<img src="/assets/images/roam-citations/nested.png" width="600" class="center">
*Nested information*

This way your citations appear clean whenever reference them *and* you get the bonus of adding more info about that particular paper. You could also add tags in nested blocks so you can filter your database for particular topics. As an example, I tagged 3 particular entries with `Thermodynamics & Statistical Physics`. They show up like this

<img src="/assets/images/roam-citations/nested2.png" width="600" class="center">
*Tagged Entries*

Please, be mindful that doing so creates a lot of direct links to your reference page. 

I also use citations when I want to take extensive notes on a particular paper. I'd create a page to that particular paper and then put the link to the block entry in the database so that page can show up in the block mentions of my references database.

Well, that's it for citations. Hope this post can give you some ideas on how to use citations in your own work. Next up in the series I'll talk about my `Blocks`page, where I have gathered blocks that work like organizing tags, avoiding creating connections when I just want to organize things.

<!-- LikeBtn.com BEGIN -->
<span class="likebtn-wrapper" data-theme="custom" data-btn_size="20" data-f_size="16" data-icon_size="30" data-icon_l="hrt6" data-icon_l_c="#0512fb" data-icon_l_c_v="#fb0505" data-icon_d_c_v="#bd0019" data-brdr_c="#fdfdfd" data-i18n_like=" Did you like this article?" data-ef_voting="grow" data-dislike_enabled="false" data-icon_dislike_show="false" data-counter_zero_show="true"></span>
<script>(function(d,e,s){if(d.getElementById("likebtn_wjs"))return;a=d.createElement(e);m=d.getElementsByTagName(e)[0];a.async=1;a.id="likebtn_wjs";a.src=s;m.parentNode.insertBefore(a, m)})(document,"script","//w.likebtn.com/js/w/widget.js");</script>
<!-- LikeBtn.com END --->