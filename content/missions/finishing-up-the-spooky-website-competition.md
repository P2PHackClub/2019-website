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

### Put an image
