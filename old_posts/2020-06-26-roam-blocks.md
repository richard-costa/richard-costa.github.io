---
title: "Blocks in Roam I: Decluttering"
excerpt_separator: "<!--more-->"
header: 
 teaser: /assets/images/astrolabe-white.jpg 
classes: wide
toc: true
toc_icon: "cog"
---


<div style="background-color: #AADADA ; padding: 10px;">

<b> Disclaimer</b>: in this post, I suppose you already have some working knowledge of <a href="/roamresearch.com"  title="Roam Research">Roam</a>. If you don't, I encourage you to actually create an account and start using the app. There you'll find video tutorials and some info to get you started. I also recommend the sites <a href="/roambrain.com" title="Roam Brain">Roam Brain</a>, <a href="/roamtips.com" title="Roam Tips">Roam Tips</a>, and <a href="/https://www.youtube.com/channel/UCS2Dh3N7QpuZP6LLhUMkMqQ" title="Anonym.s' channel">this</a> nice youtube playlist on several features of Roam by Anonym.'s. </div>


## Summary

*This is the first post in what is meant to be a series of posts on using Roam for research, particularly on STEM. My goal is that others can find some ideas useful and apply them to their workflows. In particular, this post is about using block references to decrease the number of page links in your database.*

---
## Cluttered Connections

<p><span style="float: left; width: 0.8em; font-size: 600%; font-family: Georgia, courier; line-height: 75%;">R</span>oam Research is a web app for taking notes, in the style of an outliner. This app is an incredible tool for writing down your thoughts and connect them as quickly as possible. Roam builds connections using <i>bi-directional</i> links, which provide a way to go back and forth between linked notes seamlessly.</p>

We can create those backlinks by writing the name of the page we want to link inside double square brackets `[[PageYouWantToLink]]`. If that page doesn't exist, Roam will create it on the spot.

Backlinks sit in a section of the page called *linked references*. Every page has a linked and an *unlinked* references section, which are instances of the *title* of a given page $A$ occurring in other pages. There you have the option to turn those unlinked references into linked ones:

<img src="/assets/images/roam-blocks/roam-backlinks.png" width="600" class="center"/>
*Page link in Roam*

When we first start using Roam we often get advised to just start writing and linking notes as much as we can, including creating links to be used as tags, like `[[Important]]` or `[[Books]]`. However, doing this blindly can prevent us from spotting *meaningful* connections easily, if we have too many pages that act only as tags or categories. For example, this is one of my notes:

![](/assets/images/roam-blocks/roam-ref-graph-note.png)
*Graph view of a particular page*

There are few connections in there and it's pretty clear what they are and how pages are connected. Now if I keep adding links without much thought, my individual notes graph will begin looking more and more like an all pages graph:

<img src="/assets/images/roam-blocks/roam-ref-nate-db.png" width="500" class="center"/>
*Web of thoughts. Image from <a href="https://www.nateliason.com/blog/roam" title="Nat Eliason">https://www.nateliason.com/blog/roam</a>*

If most of my connections are relating content and ideas, it's great that the graph view looks cluttered. If not, then we might be wasting pages that *may be better used as blocks*.

Just to be clear, this is not a nipick on visuals. Those nodes and connections represent linked references, a backbone of Roam. A great number of links without much content in them is not necessarily useful for connecting thoughts, because those links won’t be able to provide immediate insights about your notes.

A concrete example may help you understand better what I'm trying to say. Say you're reading about killer bees and want to take some notes on this topic. You create a page titled `[[Killer Bees]]` and you tag it right away with `[[Entomology]]` since it's the field that studies insects. After that, you find an interesting connection between killer bees and human populations and create a page link titled `[[Human Populations]]` inside `[[Killer Bees]]`.

Weeks go by and you figure you should revisit your notes. You go to the linked references (or use the graph view) of `[[Killer Bees]]` to understand how this page relates to other topics. If you link the hell out of your notes, your linked references section may end up including pages like:

* Biology
* May 16th, 2020
* Africa
* Interesting
* JohnDoe
* May 5th, 2020
* ToRead
* ToDo
* Articles
* Human Population
* Entomology

The human populations page will be close to last in that list because it was one of the first links you created. We have too many linked references that just don't tell us more about those bees.

Now, even if you don't care about the graph view, and argue that you could just filter out pages like `[[ToDo]]` in the linked references section, you still have to do this filtering in *every note*. Similarly, every time you create a new page that works as a tag, like `[[ToRead]]`, it adds potential links to be filtered out in the future, when you're just trying to understand the contents that are related in your notes. You're connecting notes without useful content, that is, content that can't be used to build knowledge upon the information you already have.

I know, some tag notes are necessary. My own example would be my `[[Quantum Computing]]` page. So far it works only as a category, even though I will add some content in the future. But even if I don't, it will still be useful to me.

![](/assets/images/roam-blocks/qc-page.png)


## Blocks: A Way Out

One of the most important features Roam has to offer is the ability to reference blocks. Just like pages, you can link a block to any page. But block referencing goes further: besides linking pages to blocks we can link blocks to blocks, blocks to its nested blocks (and vice versa), and even create a self-reference block!

Block references allow for more flexibility and possibilities of connections between notes. I tried to capture these possibilities in an image:

<img src="/assets/images/roam-blocks/roam-block-backlinks.png" width="
600" class="center"/>
*Block references in Roam*

Here blue arrows are the backlinks found in those pages *and* blocks. Self-referencing is shown as an arrow coming out of $ b_{1} $ and going back to it again. Note that the block $ a_{n1} $, which is nested inside block $ a_{n} $, references block $ b_{2} $, page $ B $ and its own parenting block $ a_{n} $!

By turning my tag pages into blocks I could reference them without creating direct links, which decluttered my linked references section. I could still use those blocks as tags, and so I didn't lose the tagging function of those pages.

I've been trying out ways of using blocks references for the past month or so and I'm still learning. So far my use of them includes:

* As a replacement for some pages that used to work like tags and categories. An example of a page turned into a block this way would be `[[Books]]`.
* Referencing items in a database of theorems, definitions, and common concepts, so I don't need to rewrite them all the time.
* As a tool for gathering and citing papers in my notes.

I will detail those use cases in future posts, but just to give an idea, here's my `TODO` page with blocks instead of pages:

<img src="/assets/images/roam-blocks/ToDo.png" width="
600" class="center"/>

If I open up ``ToRead``, I have the following image showing all linked references to that block:

<img src="/assets/images/roam-blocks/ToRead-Block.png" class="center"/>

And if I don't want to open it up, but still want to see where it was referenced, I can just click on those numbers next to each block and all mentions of that block will be shown in the sidebar:

<img src="/assets/images/roam-blocks/ToRead-Block-Mentions.png" width="600" class="center"/>

As you could see, blocks also have a linked reference section! This can be used to connect pages and therefore can serve at least some of the same purposes of regular pages. Now no other page in my Roam database has a `ToLearn` link in the linked references section.

Another useful feature of blocks is being able to know how many times a block has been referenced in my notes by just checking the number next to that block. In my example, I have referenced the block `ToLearn` $11$ times.

So far the only disadvantage I've had in using blocks is that they don't have unlinked references. Personally, this has not been a problem though.

Also, clicking in a block in the sidebar doesn't open it up on the main page. However, this is fixed by clicking in the text body of a block and pressing `ctrl + o`, allowing blocks to be viewed on the main page, directly from the sidebar.

## Summing it up

Bi-directional links are great, but they need to be treated with some care after you have a good amount of notes. Connections grow and linked references become abundant, but I didn't want to have pages that weren't filled with content on useful topics for my studies and research. My way out was using blocks and referencing them.

Blocks are more powerful than pages in the ways they can be connected to other pages and other blocks. Recognizing that blocks are the fundamental entities in Roam will give you a new perspective, by linking fewer pages unnecessarily and using more blocks to connect topics.

The result is that I now use a lot more blocks than I used to and reserve pages for topics or things that I actually intend to fill with content. I’ve been using blocks as tags, as items that need to be referenced often, and as bibliographical entries for citations.

I’m sure there are many other uses of blocks I haven’t still figured out and probably there are better use for them than what I do now. My approach, however, provided me with enough structure to research and write without worries, but still make meaningful connections. I hope this can help anyone out there having the same issues.


[➡ Blocks in Roam II: Citations](https://costarichard.github.io/tools/roam/roam-blocksII-citations/)

<!-- LikeBtn.com BEGIN -->
<span class="likebtn-wrapper" data-theme="custom" data-btn_size="20" data-f_size="16" data-icon_size="30" data-icon_l="hrt6" data-icon_l_c="#0512fb" data-icon_l_c_v="#fb0505" data-icon_d_c_v="#bd0019" data-brdr_c="#fdfdfd" data-i18n_like=" Did you like this article?" data-ef_voting="grow" data-dislike_enabled="false" data-icon_dislike_show="false" data-counter_zero_show="true"></span>
<script>(function(d,e,s){if(d.getElementById("likebtn_wjs"))return;a=d.createElement(e);m=d.getElementsByTagName(e)[0];a.async=1;a.id="likebtn_wjs";a.src=s;m.parentNode.insertBefore(a, m)})(document,"script","//w.likebtn.com/js/w/widget.js");</script>
<!-- LikeBtn.com END --->