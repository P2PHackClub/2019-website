---
title: "P2P Hack Club Meeting 2: Spooky Website Competition!"
description: "Let's get spooky!"
author: "P2P Hack Club Team, modified from an article by Max Wofford"
slug: "build-your-first-website"
---

## Part I: Setup

### Getting ready to build it on Pumatech, P2P's webserver!

[Pumatech](https://www.pumatech.org) is Peak to Peak's tech server, which allows you to build websites online! It's similar to Google Docs, but has some important features that make it much better for typing code than a regular text editor.

To get started, go to [https://www.pumatech.org](https://www.pumatech.org). Await more specific instructions on how to access the Code Editor from club officers.

## Part II: Let's Get Coding!

### 1) HTML Resource Document

**[The P2P Hack Club leaders have created an HTML resource document that will guide you while you are creating your website!](https://docs.google.com/document/d/1R0S5fqrL8e_dMbramMEKRs6elU3VSHqHOLNP3rlm9fw/edit?usp=sharing). CLICK HERE!**

Remember, you need to **Run** your program every time you want to see your updated website.

Though our website has some text on it, we're not done. Our webpage is fully functional, but needs a little help in the look-and-feel department. Fret not. CSS will allow you to manipulate the styling of your page in all your needs.

## Part III: The CSS File

So what is CSS? CSS, also known as Cascading Style Sheets, is a language used for styling the tags (or "elements") on a web page.

While HTML oversees the content and the way it's structured, CSS is how you'll specify how you'd like your content to look --- with it you can set things like colors, spacing, and more.

### 1) Using CSS

To use CSS in our website, we are going to use the `<style></style>` tags that have been included in our template!

### 2) Adding Styles to the Stylesheet

Now let's write some CSS to resize the image.

Try typing the following between the `<style></style>` tags:

```css
img {
  width: 200px;
}
```

A CSS stylesheet contains "rules," each of which consists of a selector, and attributes and values within brackets, known as a "declaration block".

In our case, the selector is `img`. This merely selects all image tags (and thus, all images). The rule then says to set the `width` (width) of all things selected (in our case, all the images) to `200px`. `px` refers to pixels, which are a unit of measurement on the screen. When this rule is applied, all the images on our page will have a width of 200 pixels.

Next, we're going to center-align the entire body section.

We'll add

```css
body {
  text-align: center;
}
```

between the two `<style></style>` tags.

As with resizing the image, this rule specifies that every `body` tag should have a `text-align` attribute of `center`. This centers everything on our page because all of the content in our HTML file is written inside the body tag.

Now let's change the font of our text. We'll add another attribute, `font-family`, to the `body` rule, and set the value to `"Arial"`. Now it will look like this:

```css
body {
  text-align: center;
  font-family: "Arial";
}
```

You can take this even further by adding a bit of color to the page! The attribute `color` **(spelled without a u)** allows you to set the text color, and `background-color` allows you to set a background color. You can find a list of supported color names over at [W3Schools](https://www.w3schools.com/colors/colors_names.asp). Keep in mind that it's a good idea to pick a combination of colors will keep the text readable.

```css
body {
  text-align: center;
  font-family: "Arial";
  background: azure;
  color: purple;
}
```

Now be sure to click **Side-by-side** to get the most recent version of your website. Ah, it is truly beautiful to behold.

## Part IV: Hacking

In this section, your challenge is to add additional features to your website to make it your own!

Want to use a different font? Google it!
Want to add more pictures? Google it!
Want to add more text? Your entire life story? Background image? Background music? Video? More pages? Google it!
(if you're stuck, you could always ask us too 😉)

A good way to get ideas for what to add to your website is to look at other people's websites. Find a website that you like, either from the below list or from somewhere else on the internet, pick one aspect of that website that you would like on your own website, and Google for ways to make it happen!

## Part V: Spooky Contest Time

**[That's right! You are ready to submit your website to P2P Hack Club's spooky website contest! Click here to submit your website. The winners get fabulous prizes! 😉](https://docs.google.com/forms/d/e/1FAIpQLSe74RLFEuTVk2aazcdloRHz0Yf_tjk08scPadIxDyFnfGGyhA/viewform?usp=sf_link)**

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe74RLFEuTVk2aazcdloRHz0Yf_tjk08scPadIxDyFnfGGyhA/viewform?embedded=true" width="640" height="1375" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

#### _And now, a note from JP:_

Hello! I hope you're enjoying P2P Hack Club so far! As you might've noticed, your websites are probably looking better than this club page! In the next few weeks, the P2P Hack Club Officers will be upgrading, and renovating this website for version 2.0! We are re-building this website from the ground up to be more useful to you! Let us know if you have any ideas about what would be useful on this website for you. Thanks for coming today!

[← Back](https://p2p.hackclub.com)
