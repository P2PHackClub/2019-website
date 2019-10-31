---
title: Finishing Up the Spooky Website Competition
description: Let's get spooky!
author: P2P Hack Club
slug: spooky-website-comp
---
# HAPPY HALLOWEEN!!!!!!!!

I hope you are having a fabulously spooky day!

![A ghost, spooking along](/img/source.gif "OOoOooOooOOooOooOoooOooOooOooOOO")

Did you notice the new front page for our website? It is still a work in progress, but soon it will be our mission control for the club! 😀

Over the past few meetings, we've been building amazingly _spooky_ websites. Today is the last day that we work on our websites, before we start the next mission: **building videogames!** Until then, let's finish our spooky websites!

## 1. Navigate to [pumatech.org](https://www.pumatech.org), and go to your website!

When you are at [pumatech.org](https://www.pumatech.org), click "**Code Editor**", and naviage to the `.html` file that your website is in!

## 2. BEFORE YOU DO ANYTHING: Share you website to the Spooky Website Competition Google Form

Today, we're going to pick the winner for the Spooky Website Competition! [Please click here to go to the Google Form, or fill it out below. This is crucial, so that we can see your website!](https://docs.google.com/forms/d/e/1FAIpQLSe74RLFEuTVk2aazcdloRHz0Yf_tjk08scPadIxDyFnfGGyhA/viewform?usp=sf_link)

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe74RLFEuTVk2aazcdloRHz0Yf_tjk08scPadIxDyFnfGGyhA/viewform?embedded=true" width="640" height="1375" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

## 3. Start work on your website!

We are going to work on our websites for about 30 minutes, and in the last part of class we will present websites on the projector, and do a blind vote for each one! Turn your website into the spookiest, and you will get a prize!

## Below here are common ideas that you can do for your website:

### Start with a template

When you're first starting out your website, you might want some code to jump off from. In the pumatech code editor, if you do the key combination CTRL+5 (**make sure your file is empty!**), code like this will appear in the text editor:

```
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

#### What each tag in the template means

Each of these lines of code that start with `<` and end with `>` are called tags. Each tag is responsible for a different job.

* `<!DOCTYPE html>`is a line of code that tells your browser (Google Chrome, Firefox, etc), that the file that it is viewing is an HTML webpage. HTML, or **H**yper **T**ext **M**arkup **L**anguage is the language that you are typing in that the computer understands.
* `<html lang="en">` is telling the browser that the code to run your webpage is starting. `</html>` is a **closing tag**, which lets you know that it is at the end of the webpage.
* `<head>` and `</head>` are tags that indicate that information about the website are stored between those two tags.
  * `<title>` and `</title>` are tags that go between the `<head>` and `</head>` tags. This element tells the browser what the website name is. Try changing this to `<title>My amazing website!</title>`. When you run your website (CTRL+E), you will see the text change in the browser tab!

![An arrow pointing to a browser tab.](/img/captura.png "Look! It's your website!")

```
* `<style>` and `</style>` are tags that tell the browser how the webpage should look. Between these two tags, you can specify the color of your website, animations on your website, and more! (You can learn more about this tag a little later in this document).
```

* `<body>` and `</body>` are two very important tags. Between those tags holds the content of your website! Stuff like text and images go here.

### Put text on your website.

Right now, your website is probably looking pretty blank. This is where the text tags come in! These elements help you add text to your website. All text goes between the starting `<body>` tag and the closing `</body>` tag. Here is a list of all of the text tags that you can use one your website:

```
<h1>Header 1!</h1>
<h2>Header 2!</h2>
<h3>Header 3!</h3>
<h4>Header 1!</h4>
<h5>Header 2!</h5>
<h6>Header 3!</h6>
<p>I am a paragraph. You can put really long sentences in here, and they will come out in a size that people can read easily! Paragraph tags are really useful if you want to put a lot of text on your website.</p>
```

And these are what they look like, on your site:

![A screenshot of a website with all of the previous example code.](/img/headings-and-paragraph.png "Look at all of that text!")

In context, here is what the full site code looks like:

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>My Amazing Website!</title>
    <style>
    </style>
</head>

<body>

<h1>Header 1!</h1>
<h2>Header 2!</h2>
<h3>Header 3!</h3>
<h4>Header 1!</h4>
<h5>Header 2!</h5>
<h6>Header 3!</h6>
<p>I am a paragraph. You can put really long sentences in here, and they will come out in a size that people can read easily! Paragraph tags are really useful if you want to put a lot of text on your website.</p>

</body>

</html>
```

### Put an image on your website

Now that we have a bunch of text, it is time for some images! To add images to our website, we use an element called the image element (pretty obvious naming, right?). 

`<img src="">`

The `<img>` element has two parts to it. First, the actual tag itself, `<img>`, and something called an attribute. Attributes are things that add more information to, or modify a tag. In this case, we have a tag called `src` which is telling the image tag where the **source** of the image is. The source of an image can be anywhere on the internet, as long as it links to an image. To get the source of an image you see online, you can right click on the image and select "**Copy Image Location**". Do not, and I repeat **DO NOT** just take the URL of the page. This will not work! You need the exact URL of the image!!!

![Screencast of right clicking an image, and clicking "Copy Image Location"](/img/vax8k3rkhx.gif "Pandas!!!!")

Now that you have the image source/location, you can put it into the `src` attribute of the `<img>` tag.

`<img src="https://quantdare.com/wp-content/uploads/2017/09/Pandas-e1506583057998.jpg">`

Now, our website has the cutest pandas ever!

![Picture of the website that we've made, now improved with a picture of pandas!](/img/pandas-with-website.png "OMG! The pandas make our website so much cuter!")

Here is the code we have so far:

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>My Amazing Website!</title>
    <style>
    </style>
</head>

<body>

<h1>Header 1!</h1>
<h2>Header 2!</h2>
<h3>Header 3!</h3>
<h4>Header 1!</h4>
<h5>Header 2!</h5>
<h6>Header 3!</h6>
<p>I am a paragraph. You can put really long sentences in here, and they will come out in a size that people can read easily! Paragraph tags are really useful if you want to put a lot of text on your website.</p>

<img src="https://quantdare.com/wp-content/uploads/2017/09/Pandas-e1506583057998.jpg">

</body>

</html>
```

Aren't pandas amazing?!!

### Change your website background color

Wouldn't it be nice to add a splash of color? I think so! Let's change the background color of our website! To do this, we will be using the `<style>` tags. `<style>` and `</style>` have code between them that determine what our website looks like! 

To start, we need to figure out what we want to change. Firstly, we are changing the background color of the website. In our, this can be referred to as `background-color`. [(For a full list of things we can change, look at W3School's easy-to-use reference document!)](https://www.w3schools.com/cssref/) Now, we need to figure out which thing we are changing the `background-color` of. For us, it's all of the content of the website. Since our `<body>` tags are responsible for all of the content of the website, we know that we need to change the `background-color` of the `<body>` tags. Hurrah! Now we are all set to put this into code.

```
<style>
    body {
     background-color: orange;   
    }
</style>
```

On the first line, we did `body {`. This tells the website to look at everything between the `<body>` tags. The `{` tells the computer that between the first `{` and the ending `}`, that it should start styling the webpage. Next, we do `background-color: orange;`. This tells the website to take what we were looking at on the first line, and set it's `background color` to `orange`! You can change `orange` to be a bunch of common colors, or [you can look at this list of colors that will work in your code](https://www.w3schools.com/cssref/css_colors.asp). The `;` at the end of the line tells the computer that we are finished telling the computer our color. Finally, we write `}` to tell the computer that we are finished with what we want it to style.

This code makes our website look amazing!

Here's the full code for our website now:

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>My Amazing Website!</title>
    <style>
    body {
     background-color: orange;   
    }
    </style>
</head>

<body>

<h1>Header 1!</h1>
<h2>Header 2!</h2>
<h3>Header 3!</h3>
<h4>Header 1!</h4>
<h5>Header 2!</h5>
<h6>Header 3!</h6>
<p>I am a paragraph. You can put really long sentences in here, and they will come out in a size that people can read easily! Paragraph tags are really useful if you want to put a lot of text on your website.</p>

<img src="https://quantdare.com/wp-content/uploads/2017/09/Pandas-e1506583057998.jpg">

</body>

</html>
```

Now, go off and make this website your own! I can't see wait to see what you create!

### Doing something else with your website

Inevitably, you will want to add something to your website like a YouTube video, or a button, or something else completely new! When in doubt, the most important skill you can have as a hacker is **effective Googling**. That's right. **Googling.** There will be times when you  need to learn how to do things from scratch, either by following tutorials, or other guides like this one. 

Listed here are some amazing resources when you are learning how to code:

* [W3School's HTML Guide](https://www.w3schools.com/html/default.asp). This guide will teach you step-by-step how to be an HTML master! Complete with tutorials, example code and more, W3Schools will teach you how to make beautiful websites like the ones you use every day!
* [Mozilla's Developer Docs](https://developer.mozilla.org/en-US/). Mozilla, the company behind the Firefox browser, has an amazing website that has examples for every single HTML tag, as well as a bunch of tutorials for building other things like video games and things in VR. I know I told you to **Google** things, but **Firefox**ing things works amazingly also!
* [freeCodeCamp](https://www.freecodecamp.org/). Do you want a more structured approach to programming? Are you starting from zero experience, and want a Khan Academy-like approach to learning how to make websites? freeCodeCamp has step-by-step lessons and an online code editor that will bring you from 0 to 100 really quickly!

If you know of any more programming resources, let us know so we can add to this list! 

Of course, humans are much more friendlier than websites. Your friends, and fellow hackers are great resources for learning how to code! You can always ask your peers, and us, for help! If you can, help a friend! Find someone to work through a problem with! Two minds are better than one!

## Final Note

Hello! Thanks for coming to the Hack Club meeting today! I hope you had a lot of fun! We are always looking for your feedback! If you have any ideas about what can make this club better, or what things you want to learn, please let us know! We value your feedback a lot, and we all want to grow with you!

Tune in next time for our next mission, where we are building video games!

See you around!

\-Your Hack Club Officers

# [<-- Back](https://p2p.hackclub.com)
