---
title: "Roam Research and Language Learning I: Deltas and Translation"
excerpt_separator: "<!--more-->"
header: 
 teaser: /assets/images/astrolabe-white.jpg
classes: wide
toc: true
toc_icon: "cog"
---

## Summary

*What is the delta in Roam, and using Roam for language learning.*

---

Lately, I've been thinking about using Roam for language learning, and I've had some thoughts I'd like to share. But to do that, I have to tell you first about one of the features I will make use of: the delta. This post is heavily inspired by [Cortexfutura's post on the delta feature](https://www.cortexfutura.com/preliminary-spaced-repetition-roam/). I guess there's nothing fundamentally new I am going to say here, but there are gifs & images to illustrate the concepts and I need to keep writing in here, so I hope this can be useful to you.

## What is the delta?

The delta (∆) is a feature for _spaced repetition_. Spaced repetition is a method for retaining information better. The idea is simple: you review more often questions for which you got the answers wrong while reviewing less often the ones you answered right. Each reviewing session is therefore spaced according to the frequency of right and wrong answers. How long you should take to review between each session? I don't know. From what I read it's not that clear if there is an optimal interval of time.

The way this is implemented in Roam is that the app will send a block to the daily notes of the next day. You do this by clicking a delta icon ∆, which you can find by right-clicking any block

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2FxRdIiytHNX.png?alt=media&token=b0e7c2b7-b90f-4477-a297-ef01ed8fde95)


Clicking the delta will add an asterisk to the block and will send a copy of that block to the next day:

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2FnGv2YVmhRA.gif?alt=media&token=f1fdc5cb-714a-4cac-8743-edd005495299)

The baseline date for this section is January 19th, 2021. Above, you can see there will be a delta symbol greyed out in the daily notes of January 20th. When tomorrow comes (January 20th) the delta will be highlighted and we will be able to click on it. To show you how it looks like I changed manually the date on my computer

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2FQYQFefihAG.png?alt=media&token=4daa8792-c1fe-4756-862a-d2bc7542cf07)

Note the 1 showing that this block is referenced somewhere. Clicking there we can see the original block

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2F3Cx70ok2Nw.png?alt=media&token=f6c71920-f73d-49db-9e2e-2aabf70b1eeb)

Also, note that if we click somewhere in the block we see the following

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2FhO3n2yIZp1.png?alt=media&token=77d0c6cc-3c2d-449f-b95f-51bdfb7df754)

That means ''this block will show up in 1 day from now. The next interval will be 1+2=3 days.'' What happens when we click now on the delta?

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2FvCQzZ2mFWc.gif?alt=media&token=ff80d28d-0286-4813-90b0-e9b1c52a96cc)

So the block was sent another day from now (January 20th), that is, to 21st. Changing my date manually again, we travel to the future and find

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2FtlvupmM-B0.gif?alt=media&token=d563cda6-0005-422c-9393-30ed81a1bc16)

And if we click the block we see ''3+2'', meaning '' this block will show up in 3 days from now, next interval will be 3+2=5 days.''

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2Fq3NK-ZKklM.png?alt=media&token=19d0b7b0-e5ab-4339-a78e-d42b1ed0fb0d)

Fast-forward to the future and on January 24th we have

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2FmnHHtVXaJT.gif?alt=media&token=bfb40bfb-aab2-4c5c-9b55-2189b8f7f89d)

with the updated time interval

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2F9i2YDbqrEA.png?alt=media&token=c8b4d2cb-9554-422e-8045-9b8a0621d693)

Also, note that there is a `[[∆]]` symbol as if there was a page in roam named ∆. It turns out there is indeed a 'delta page' and it shows you all scheduled blocks for the future. For example, if we are on January 24th it will show

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2FGholbtav34.png?alt=media&token=2388e9da-ec99-4c34-8cc6-47c150186be1)

And if we click the references it shows all the days this block has appeared in the daily notes

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2FaziJq7ouwr.png?alt=media&token=bd5ed0ea-c0a3-479a-a494-53bc77ea1722)

So if you want to check when blocks will show up and their tracked record, just go to the delta page. For example, if I want to send another block to the future with the delta and I created that block today January 24th, it should show in the daily notes of January 25th. And that''s exactly what happens

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2FCzmOU9KAcL.png?alt=media&token=f7d8056a-28f9-44a9-be78-3693ca8db1a2)

Clicking the reference shows that I indeed created the block 'Another example' on January 24th

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2Fh7rQLEAVTf.png?alt=media&token=8977c200-37be-4bc0-9dc8-be94863e03b0)

Moreover, you can write underneath each block and add specific notes and track your learning:

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2Fw_0uBkX7TI.png?alt=media&token=33ef0bcf-1ffd-406a-989e-e7780e53893d)

And note the days intervals

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2Fx0ld-aK9pB.png?alt=media&token=398ad703-07d4-41c5-ac3d-1839595b0d54)

In the context of learning, clicking on the delta icon ∆ can be seen as the equivalent of answering a question right. The more you get it right, the less often it will show up on your daily notes. As you can see this is useful for anything you wanna test yourself with.

## Using the delta: I would like to have wine with the fish

While learning languages we can practice specific aspects of it: translation, usage & grammar, speaking, and listening. For instance, I'm learning Norwegian. Consider the sentence

> jeg vil ha vin til fisken 

It means ''I would like to have wine with the fish''. Now, the idea here is to create a block with that sentence and children blocks for different aspects of the language you want to practice, all related to that sentence. Let's start with translating. Create a block with a sentence you want to practice. Underneath it, write the same sentence but with the translation in double parenthesis `(())` and click anywhere outside the double parenthesis to create something like this

![Double Parenthesis](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2FXlYswASVG6.png?alt=media&token=a2a48cfa-7634-4cc4-8c13-2d0b764ceb42)

What happens then is that you can hide the translation by clicking one of the double parenthesis

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2FhdXbzsrMbW.gif?alt=media&token=b7ce1750-4325-4c2f-abbf-dd4c2279ca4a)

and you can send the _individual_ block with the translation to the future, write your answer somewhere else and click the delta symbol f you get it right

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2FVUuXVtwa1T.gif?alt=media&token=1a237691-a2c2-4234-99af-955d9ff13dc2)

We could also send the parent block to the future. In this case, we can type the answer underneath the block and then check it with the block reference like this

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2FAvRVJel7Us.gif?alt=media&token=fbca64e5-7fb7-4388-aba6-02531e4d309c)

Now, what if we get the answer wrong? We could highlight a wrong answer using the 'x mark' emoji ❌

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2Fq0UpA3TTa6.png?alt=media&token=b54219df-f7e7-467b-ada5-0a0c48882c17)

or tag it as `#WrongAnswer` or something like this. Tagging can be useful if you want to see all blocks you answered wrong and filter them out.

Now that you marked your block as wrong, you can go to the original block, click on it, erase the information the asterisk is hiding and set up the delta again for the same block. It will show up the next day:

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2Fx5ahwJS9uI.gif?alt=media&token=d48a37fa-55e6-4377-9eaf-1bb866c23638)

Finally, since we are potentially sending a lot of blocks to the future, there should be a way to organize them. You can always find the blocks that are scheduled for the future or that need you to click on them on the `[[∆]]` page. The only problem I see is that whatever page your block lives in, the delta page won't be linked to that. That means that if you are learning more than one language, all scheduled blocks will appear there but only organized by the dates that they will show up in your daily notes. 

So, the most natural choice for organizing your spaced repetition blocks is to add some hashtag, such as `#srs` to it. The problem is that you create a lot of links to your `srs` page: it will show you the original tagged block as well all future blocks you clicked on the delta when getting the right answer

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2FWMFo9tLsCp.png?alt=media&token=0edcd918-d798-4299-8859-cab67ed4e155)

If we go to the filter button and filter out the delta page, the situation gets better but daily notes pages will still show up

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2F7vporqCey8.gif?alt=media&token=f4269ccc-2ec8-4864-9fb0-ec22381f50a2)

So what you can do is create a page for each language and within that page create a block with the spaced repetition tag, like `#srs` and within that block copy blocks (or copy their references) you want to send to your spaced repetition system

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2Fif-eCGCAQ7.png?alt=media&token=02613f64-bec7-40e6-8b2a-a8fb7c46623a)

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FMinHjerne%2Fc1Rd7WPkuE.png?alt=media&token=c3185b0a-c3ba-40de-b2fd-b45b2a7dd511)

Anyway, I'm still trying to figure out a good way of organizing all of this, without using queries because I don't use them enough. If queries are really necessary for this sort of application, maybe I'll have to learn how to use them better then.

## Conclusion

I have to cut it here because this post is getting way too long. But the next part (or parts, don't know yet) will deal with the other aspects of language learning: usage, listening, and speaking. There's a neat way to practice listening in Roam that I want to show you in the next post.

To conclude there are two caveats here: first, this feature is in its infancy, so I don't know whether it will change over time and I will need to be corrected of what I said, but for now, it's definitely a useful tool. Second, the whole syntax is confusing. So I understand if there is some friction in learning this. Maybe it's a matter of getting used to it, but I haven't used the delta enough to provide feedback on this.

<!-- LikeBtn.com BEGIN -->
<span class="likebtn-wrapper" data-theme="custom" data-btn_size="20" data-f_size="16" data-icon_size="30" data-icon_l="hrt6" data-icon_l_c="#0512fb" data-icon_l_c_v="#fb0505" data-icon_d_c_v="#bd0019" data-brdr_c="#fdfdfd" data-i18n_like=" Did you like this article?" data-ef_voting="grow" data-dislike_enabled="false" data-icon_dislike_show="false" data-counter_zero_show="true"></span>
<script>(function(d,e,s){if(d.getElementById("likebtn_wjs"))return;a=d.createElement(e);m=d.getElementsByTagName(e)[0];a.async=1;a.id="likebtn_wjs";a.src=s;m.parentNode.insertBefore(a, m)})(document,"script","//w.likebtn.com/js/w/widget.js");</script>
<!-- LikeBtn.com END --->