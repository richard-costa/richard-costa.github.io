---
title: "Wanted: Dead and Alive"
excerpt_separator: "<!--more-->"
header: 
 teaser: /assets/images/wanted-dead-alive/black-cat.jpg
toc: true
toc_icon: "cog"
---

*Since <a href="https://en.wikipedia.org/wiki/Dark_(TV_series)">Dark</a>'s last season is upon us, and the Schrödinger's cat is mentioned (as it should be in all respectable sci-fi shows), I figured I should republish a post I wrote back in 2018, with some minor corrections. Hope you can learn something from it.*

---

<p><span style="float: left; width: 0.6em; font-size: 600%; font-family: Georgia, courier; line-height: 75%;-">I</span>n the early days of Quantum Mechanics physicists struggled to make sense of a series of experimental and theoretical discoveries that happened one after another. Firmly established assumptions - such as of absolute time - were challenged, and trying to reconcile the old physics to the modern developments turned out to be impossible. Interpretations and issues emerged and set the stage for the most famous cat in physics to appear.</p>







![](/assets/images/wanted-dead-alive/black-cat.jpg)


*<span>Photo by <a href="https://unsplash.com/@htroupe?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Hannah Troupe</a> on <a href="/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>*


The Schrödinger’s cat was a thought experiment devised by Erwin Schrödinger in 1935, to address a problem in adopting a particular interpretation of Quantum Mechanics. To talk about the Schrödinger’s cat itself we need to understand what are wave functions, how they collapse, and what is the Copenhagen interpretation.


## First Things First

The fundamental object in Quantum Mechanics is something called the wave function, denoted by the Greek letter $\Psi$. As its name suggests, this object is a wave-like function — similar to sines and cosines — but it takes as its input complex numbers, instead of real ones. We find the wave function of a system by solving the Schrödinger equation, which tells how the wave function changes over time.

Since the wave function is a complex function we need to find a way to extract information from it, in the form of real numbers, so we can measure them in a lab. The quantity we are looking for is actually the absolute value of the *square* of the absolute value of the wave function $\| \Psi \|^{2}$, which is a real number and it was interpreted by Max Born as giving us the *probability* of finding the particle in a point at a given time:


![](/assets/images/wanted-dead-alive/prob-wave-function.png)
*The highlighted area between the green and the blue dots is the probability of finding the particle between those points at a given time.*


You might be thinking “OK, so what?”. Well, the thing is, even if we solve the Schrödinger equation, all the wave function can tell us is that for different positions we have better or worse changes of finding the particle on those positions. This means the particle’s position cannot be exactly determined *from the start*. As we’ll see, this indeterminacy is going to cause some issues when we try to interpret what it means to take measurements in the realm of small.

## What Happened Before?

Say that among all these possibilities we do measure the particle’s position and find it to be around the blue dot. That is all fine but it begs the question “Where was the particle just before we made the measurement?”. The ways we can answer this question can be roughly summarized by three schools of thought:

> **Realistic position**: The particle was at the blue doet before the measurement.

* If this is true, then Quantum Mechanics does not offer a complete theory since the wave function couldn’t tell us that. Some other information is needed.

> **Orthodox (or the Copenhagen interpretation) position**: The particle did not have a definite position before the measurement.

* The act of measurement forced it to assume a definite position (the blue dot) but how and why we dare not ask.

> **Agnostic position**: Refuses to answer.

* We cannot say something about the particle before the experiment takes place, since the only way to know if we were right is to carry out the experiment itself.

These were the main lines of reasoning, each of which with its own merits and problems. But the issue with measurement and indeterminacy would go further…

## All Things Collapse

Besides the Schrödinger equation there is another way a wave function can change over time. Suppose you measure the particle’s position and find it to be somewhere around the blue dot. Then you make a second measurement immediately after the first on the same particle. It is reasonable to expect that you‘d find particle in the same place, right? Indeed the particle will be found there.

However, that means that if we draw the wave function graph now, it would look like just a sharp peak around the blue dot, meaning no chances of the particle being anywhere else, since we just measured it to be there. This is known as the *collapse of the wave function*. To the Copenhagen interpretation it is as if the act of performing a measurement changed the wave function to only give as possible results the places very near the blue dot. We can visualize this process like this:

![](/assets/images/wanted-dead-alive/collapse.gif)
*Wave function collapse. Credits: Olena Shmahalo, Amanda Gefter and Quanta Magazine. See more <a href="https://www.quantamagazine.org/quantum-bayesianism-explained-by-its-founder-20150604/">here</a>.*

## The Schrödinger’s Cat

It is important to know that after the collapse the system evolution is again described by the Schrödinger’s equation. But as far as the collapse goes the Copenhagen interpretation says that until the measurement is made the particle does not have a *well-defined* value of its position.

Schrödinger saw a problem with this interpretation and addressed it in the form of a thought experiment, which can be formulated as follows: consider two small holes in a closed box that holds a living cat. If an atom is goes through the upper hole, it triggers a device that opens a vial of cyanide and kills the cat. If the atom goes through the lower hole, nothing happens.

![](/assets/images/wanted-dead-alive/schr-cat.png)
*Disclaimer: No cats were harmed in the making of this experiment. Source: <a href="https://en.wikipedia.org/wiki/Schr%C3%B6dinger%27s_cat">Wikipedia</a>.*

Now, if we open the box, the Copenhagen interpretation says that we compelled the cat to be in either one of the states — dead or alive. Moreover, if we ask “in what state was the cat *just before* I opened the box?” the Copenhagen’s answer is that the cat did not have a definite state before we opened the box.

When we write down the wave function for the cat we have to account for all its possible states, namely: alive and dead. Now because the Schrödinger equation is linear, we can add states together and the result is a valid state. So the system composed by the states “alive cat+ dead cat” is therefore a valid one, with each of these states with *nonzero* probability! And that is what people mean when they say the cat is both alive *and* dead.

## The End?

Fortunately (or not) this is not the end of the story. All three interpretations had their proponents, but John Bell proved a theorem in 1964 which pretty much ruled out the agnostic option.

Although the Copenhagen interpretation is the most commonly taught, there are other interpretations of Quantum Mechanics. These try to understand *how* the process of wave function collapse occurs or whether it occurs at all. You can read more about them [here](https://en.wikipedia.org/wiki/Interpretations_of_quantum_mechanics).

Also, in recent years there has been an effort to get rid of the “weirdness” of Quantum Mechanics and rebuilt it from simple physical principles. One of such attempts is called *Quantum Bayesianism*, which makes use of the idea that the probabilities in Quantum Mechanics have their origin in what *we* think are reasonable values to attach to them, instead of relative frequencies of events. So the debate still goes on.

Will we eventually get a consensus on the issues of interpretations of Quantum Mechanics? Some argue the problem is already resolved. Some say you can even dismiss the whole issues of interpretation and deal with Quantum Mechanics safely. Regardless, at least now you know some of the history behind the most famous cat in the world.

<!-- LikeBtn.com BEGIN -->
<span class="likebtn-wrapper" data-theme="custom" data-btn_size="20" data-f_size="16" data-icon_size="30" data-icon_l="hrt6" data-icon_l_c="#0512fb" data-icon_l_c_v="#fb0505" data-icon_d_c_v="#bd0019" data-brdr_c="#fdfdfd" data-i18n_like=" Did you like this article?" data-ef_voting="grow" data-dislike_enabled="false" data-icon_dislike_show="false" data-counter_zero_show="true"></span>
<script>(function(d,e,s){if(d.getElementById("likebtn_wjs"))return;a=d.createElement(e);m=d.getElementsByTagName(e)[0];a.async=1;a.id="likebtn_wjs";a.src=s;m.parentNode.insertBefore(a, m)})(document,"script","//w.likebtn.com/js/w/widget.js");</script>
<!-- LikeBtn.com END --->