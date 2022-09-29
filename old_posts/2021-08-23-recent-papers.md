---
title: "Recent Interesting Papers and Articles"
excerpt_separator: "<!--more-->"
header: 
 teaser: /assets/images/bremen.jpg
classes: wide
toc: true
toc_icon: "cog"
---
I write so many post drafts, but never seem to finish them. So, here's one of the most unoriginal ever: papers that caught my attention recently. These are articles and papers I found interesting. Not sure whether I will actually get to read them, but who knows.

### On the AI Side of Things

- Using deep learning to learn the geometric structure of RNA [(report link)](https://www.science.org/doi/10.1126/science.abe5650). The network takes as inputs atomic coordinates and element types. It's trained on 18 RNA structures solved before 2007 and was tested against on more recently solved RNA structures. Also, nice images
![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FQuantumRabbit%2FDgLQ8ALOiR.png?alt=media&token=27c089a4-166c-4ef4-a6fa-838235d46003)
*Of course, credits of the image go to the authors ([Townshend et al.](https://www.science.org/doi/10.1126/science.abe5650))*.



- On [threats to ML models](https://www.science.org/doi/abs/10.1126/science.abi5052), such as:

    - Poisoning the data: *"...insertion,  modification,  or removal  of  training  samples with  the  purpose  of  influencing the decision boundary of a model  to  serve  the  adversary’s intent"*.
    - Stealing models: *"Attacks can also  abuse  the  input-output interaction  of  a  model’s  prediction  interface to steal the ML model itself"*.
    - Leaking sensitive information: ML models tend to memorize some parts of the training data, and may *"inadvertently divulge identifying details about individuals  who  contributed  to  the  training  data"*.
    - Trying to predict examples that were used to train the model: *"...membership inference, enables an adversary to exploit the  differences  in  a  model’s  response  to members and nonmembers of a training dataset"*.



- More work done on prediction of protein structures [here](https://www.science.org/doi/abs/10.1126/science.abj8754). The authors provided a different approach than the one DeepMind employed this year for the protein folding problem. They claim to achieve similar predictions accuracies. Seems interesting [^1].

- Still on the protein folding problem, a good overview of the importance and challenges of predicting protein structures can be found [here](https://www.nature.com/articles/d41586-021-02265-4).


### On the Quantum Side of Things

- An [experiment](https://www.nature.com/articles/d41586-021-02437-2) made by dropping a gas trapped by magnetic fields ([magnetic lens](https://en.wikipedia.org/wiki/Magnetic_lens)) from a 120-meter tower in free-fall! This allowed physicists to measure the lowest temperature up to date. The gas was made up of about 100 thousand atoms, in a state called Bose-Einstein Condensate. The researchers let it free-fall for a few seconds while controlling the gas expansion through switching on and off the magnetic fields used to trap it. The internal kinetic energy was lowered to about $(3/2)k_{b} \times 38 \; \mathrm{pK}$ (picokelvins). That's about 0.038 *billionths* of a 'degree' above zero kelvin (the absolute zero temperature)! The [inside view](https://www.youtube.com/watch?v=e9n_FHcf7Hs&t=75s&ab_channel=ZARM) of the tower is also pretty cool. 



- You can't do much with qubits if they lose their quantum properties quickly. Two superconductors may have a weak link called *Andreev Levels*, which can be occupied by a quasiparticle called [Bogoliubov quasiparticle](https://en.wikipedia.org/wiki/Bogoliubov_quasiparticle). Quantum information could be stored in the spin of a quasiparticle trapped in such a weak link with a [spin-orbit interaction](https://en.wikipedia.org/wiki/Spin%E2%80%93orbit_interaction), forming a *Andreev Spin Qubit* (ASQ). The authors in [this report](https://www.science.org/doi/abs/10.1126/science.abf0345) performed the manipulation of spin of an individual quasiparticle of a superconductor. The ASQ may be an alternative to current approaches but also needs to take coherence [^2] times up to seconds, whereas this work achieved 52 nanoseconds. This will require advances in the conductor materials so as not create additional interactions to nuclear spins and preserve the spin-orbit coupling. A summary of the paper can be read [here](https://www.science.org/doi/abs/10.1126/science.abk0929). I guess the important message is the last sentence in the summary: 

    > The bottom line is that there are no shortcuts to  qubit paradigm shifts because  basic  physics  and  materials science will determine the progress of quantum computing.

### And Other Kind of Stuff

- Being aple to replicate results is important, but [reproducible research is costly](https://www.nature.com/articles/d41586-021-02486-7).


- Besides Google Scholar, you can try the following [smart tools](https://www.nature.com/articles/d41586-021-02346-4) to keep up with the literature in your field:
    - https://www.connectedpapers.com/
    - https://openknowledgemaps.org/
    - https://www.researchrabbit.ai/
    
    This is specially useful if you, like me, like to go down rabbit holes. Personally, I've enjoyed researchrabbit more. I guess map-like designs don't work so well for me.



[^1]: One of the things that stood out was *"...DeepMind reported using several GPUs for days to make individual predictions, whereas our predictions are made in a single passthrough the network in the same manner that would be used for a server; after sequence and template search (~1.5 hours), the end-to-end version of RoseTTAFold requires ~10 min on an RTX2080 GPU to generate backbone coordinates for proteins with fewer than 400 residues..."*.

[^2]: Maintaining quantum properties, such as entanglement.

---

<!-- LikeBtn.com BEGIN -->
<span class="likebtn-wrapper" data-theme="custom" data-btn_size="20" data-f_size="16" data-icon_size="30" data-icon_l="hrt6" data-icon_l_c="#0512fb" data-icon_l_c_v="#fb0505" data-icon_d_c_v="#bd0019" data-brdr_c="#fdfdfd" data-i18n_like=" Did you like this article?" data-ef_voting="grow" data-dislike_enabled="false" data-icon_dislike_show="false" data-counter_zero_show="true"></span>
<script>(function(d,e,s){if(d.getElementById("likebtn_wjs"))return;a=d.createElement(e);m=d.getElementsByTagName(e)[0];a.async=1;a.id="likebtn_wjs";a.src=s;m.parentNode.insertBefore(a, m)})(document,"script","//w.likebtn.com/js/w/widget.js");</script>
<!-- LikeBtn.com END --->