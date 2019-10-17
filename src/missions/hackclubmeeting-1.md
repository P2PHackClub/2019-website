---
title: "P2P Hack Club Meeting 1: Personal Website"
description: "Making your first website from scratch"
date: "2019-10-16"
author: "JP Kerrane, modified from an article by Max Wofford"
---

# Welcome to P2P Hack Club!

Welcome to P2P Hack Club! I hope you are enjoying the club so far! This website is where we are going to be doing many of our "missions", designed to teach you new hacking skills! 😉
During a normal club meeting, we might be doing one of two things:

## "Missions" meetings
Missions meetings (like what we're doing today), are going to be directed, aimed to teach you new skills like creating websites, apps, video games, and more! This type of meeting might be once or twice a month, always with skills that you want to learn (more on that later). At the end of these meetings, if you have a completed project, you will give a demonstration of what you've built to the rest of P2P Hack Club for us to see how awesome it is 😝! Hopefully we will have enough time for everyone to demo a project that they are working on every meeting.

## Open-ended meetings
These meetings usually follow "Missions" meetings, where you will either finish up the project you have done the previous meeting, or start a new project with the skills you have learned. If you are coming into P2P Hack Club with knowledge about how to create a unique project, we will try to help you make it as cool as possible! In this type of meeting, you will also demo what you are working on near the end of the time we meet.

---

If you have any questions, please let any of us know! We will be walking around today, and we will try to answer everything!

---

## Meeting Agenda for **Thursday, October 17th, 2019**
**3:10-3:15pm |** Club-members walk into room, sign into their computers, and go to the p2p.hackclub.com website to learn more about what we're doing that day.

**3:15-3:20pm |** Club officers (Reema, JP, Arihant, or Siddharth) are going to give a short presentation about our club, and give an intro to making websites!

**3:20-4:00 |** Off to the races! Follow the mission on the p2p.hackclub.com page to make an amazing website today! (instructions are below)


# Mission: Personal Website
## Making your first website from scratch.

Are you ready, in the next hour, to walk out with your own personal website?!

**[It will look something like this.](https://707defenderofjustice--reemations.repl.co/)** (made by Reema!)

## Part I: Setup

### Getting ready to build it on Pumatech, P2P's webserver!

[Pumatech](https://www.pumatech.org) is Peak to Peak's tech server, which allows you to build websites online! It's similar to Google Docs, but has some important features that make it much better for typing code than a regular text editor.

To get started, go to [https://www.pumatech.org](https://www.pumatech.org). Await more specific instructions on how to access the Code Editor from club officers.

## Part II: The HTML File

### 1) The HTML file

HTML stands for Hypertext Markup Language. Every website from the New York Times to Twitch uses HTML to display content on the web.

By now, you should be in the code editor. If you haven't already, name your file `index.html`. If you do the keyboard combination CTRL+5, HTML boilerplate code should appear! This is a template for your website that will help it to function!

Your index.html file should look like this:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
    </style>
</head>

<body>

</body>

</html>
```

This structure is common to all HTML pages. In fact, you can take a look for yourself! Just right click on any web page, including this one, and click "View page source" to see what's going on behind the scenes. You'll find each of these elements on every page – the doctype, and an HTML tag wrapped around a head and body. (You might need to press CTRL+U if the button is greyed out)

Before proceeding, we'll briefly go over what our template means.

HTML works by storing information inside tags. `<html></html>` is an example of one such tag. Inside `<html></html>`, we've placed two other sets of tags: `<head></head>` (which wraps around the "head") and `<body></body>` (which wraps around the "body"). The body holds everything you would see in the actual tab/window when you open the page, while the head conveys information about the page to the browser.

`<!DOCTYPE html>` tells the browser what version of HTML to expect. Since it is a language, HTML is constantly growing and updating, so there are multiple versions. In our case, we are going to use HTML5, the latest version.

### 2) Previewing the Page

Let's check out what our HTML file looks like in Live Preview! To do this, hover over the **Preview** panel above the editor, and click **"Side-by-side"** (or press CTRL + E).

From there, the live preview to the right of the editor should show what your website looks like. If you want to view it in a new tab, you can use the **Preview** panel to access more viewing options.

As you can see, the page is blank. This is because we haven't added anything to the `body` section yet. Let's add some content!

### 3) Adding Text to the Body

As mentioned before, all information is wrapped in tags. Tags are predefined in the language; think of them as the words in the language. For text, HTML provides a number of tags to store text. We'll be using two of the most basic ones: the h1 tag (`<h1>`) and the paragraph tag (`<p>`). The h1 tag is the first in a series of heading tags, with `h1` being the highest ranking, and `h6` being the lowest ranking. Just as with the other tags, you can place information within the these tags by surrounding your content with an opening and closing tag.

Go ahead and add your name in a heading tag, and your description in a paragraph tag, in between the opening (`<body>`) and closing (`</body>`) tags.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
    </style>
</head>

<body>
  <h1>Mr. Robot</h1>
  <p>"Yeet"</p>
</body>

</html>
```

If your description was a few paragraphs, or had line breaks, you may have noticed that one `<p></p>` doesn't quite cut it. Adding extra blank lines or spaces between words in HTML does not change the spacing of the content. We can solve this by placing each paragraph in its own `<p></p>`.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
    </style>
</head>

<body>
  <h1>Mr. Robot</h1>
  <p>"Yeet"</p>
  <p>I am the coolest robot on the block!</p>
</body>
```

To update your page, click the **"Side-by-side"** button again. Booyah! Now you have a description on your personal website!

### 4) Adding Images to the Body

First, find an image you would like to include in your page. You can find something on Google Images, Facebook, or Imgur. We'll need the source URL of the image, so right click and select "Copy Image Address".

Images are included in HTML via the image tag, or `<img>`. The image tag has an attribute called `src`, which will hold the _source_ URL of the image you want to display. As an example, if I were to add a picture of a robot, I would right click it and get the source URL, which in this case is http://www.theoldrobots.com/images58/TurboFighter-22.JPG, and put it in an image tag like so:

```html
<img src="http://www.theoldrobots.com/images58/TurboFighter-22.JPG">
```

You may have noticed that the image tag doesn't have a closing tag like `<h1></h1>` or `<body></body>`. That's because it is a [void element](https://www.w3.org/TR/html-markup/syntax.html#syntax-elements), meaning that it doesn't have any contents.

Go ahead and add this into your `index.html` now. I put my picture before my heading, and my code looks like this:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
    </style>
</head>

<body>
  <img src="http://www.theoldrobots.com/images58/TurboFighter-22.JPG">
  <h1>Mr. Robot</h1>
  <p>"Yeet"</p>
  <p>I am the coolest robot on the block!</p>
</body>
```

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

A good way to get ideas for what to add to your website is to look at other people's websites. Find a website that you like, either from the below list or from somewhere else on the internet, pick one aspect of that website that you would like on your own website, and Google for ways to make it happen!

### Additional Resources

These are some additional resources that you can use to make your site even better!

- [HTML Dog](http://www.htmldog.com/guides/html/beginner/): _Very beginner focused. If you're not sure which one to choose, pick this one._
- [Free Code Camp](http://www.freecodecamp.com/map): _Interactive and very methodical._
- [Treehouse](https://teamtreehouse.com/library/html/introduction/): _Their videos are extremely comprehensive and thorough._

## Part V: You've made it!

So you've created a beautiful website. Great job! At the end of the club, we're going to showcase some of your websites that you've made if we have time!
Hopefully you're enjoying the club so far! In the future, we're going to upgrade this website to look amazing, and we have a lot of projects in store for the future! If you have any ideas for a "mission" that we might go on, feel free to talk to us in person, or email one of us! We really want to do things in P2P Hack Club that **you** enjoy, because that would make the club a lot more fun!

Thanks for coming today, we're so excited to see what you will build!

[← Back](https://p2p.hackclub.com)
