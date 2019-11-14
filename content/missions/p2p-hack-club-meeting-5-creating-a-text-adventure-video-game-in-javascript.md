---
title: 'P2P Hack Club Meeting 5: Create a text-adventure video game in JavaScript'
description: Game time!
author: P2P Hack Club Team
slug: text-adventure
---
Yay! Welcome to our 5th meeting of P2P Hack Club! Today, we're going to be creating a text-based adventure game using JavaScript, with branching paths.

![Journey Under The Sea By R.A. Montgomery](/img/cyoa002hb.jpg "Journey Under The Sea By R.A. Montgomery")

A choose-your-own adventure is a type of story where the reader decides what is going to happen next. Each choose-your-own adventure has multiple adventures, and stories can get very complex! If you haven't already, you should read the [Choose Your Own Adventure](https://en.wikipedia.org/wiki/Choose_Your_Own_Adventure) series by R.A. Montgomery. We are going to be creating a similar story style today.

## Part I: Setup

We're using [Pumatech](https://www.pumatech.org) today! To get started, go to <https://www.pumatech.org>. When you're there create a new HTML document and save it as `chooseyourownadventure.html`. Because we've created so many projects already, naming this HTML file with a memorable name will make it easier to find later!

## Part II: Creating the Boilerplate Code

We are going to be programming in JavaScript today, so we are going to be using the `<script>` tag. To start, we are going to take the standard HTML5 template, and add a `<script>` tag in the body.

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title></title>
</head>

<body>

<script>


</script>

</body>

</html>
```

**Fun Fact!** Ever wondered what the `<meta charset="UTF-8">` tag does? This tag tells the browser that you are writing text, and it lets you do things like putting emojis 😀 into your website! Without this tag, some text on your site m̶̯̽ḯ̶̠g̸͇̎h̸̜͊t̵̗̽ ̵̞͘l̸̺̑o̵͓͝o̴͉̊k̸̲͒ ̴̥̓w̷͔̑r̵̠͌ö̴͉n̷̰̊g̴̺̊.

## Part III: 🖊️ Time to start making your story!

For an example, I'm going to create a choose-your-own adventure about waking up in the morning. First off, we need to display the start of the story to the reader. We can do this using the \`alert("");\` method. This method pops up an alert box with text. We can use this in between our \`<script>\` to start our story. Remember that after every statement in javascript, you need to include a semicolon (`;`).

```
<script>
alert("BEEP BEEP BEEP. The alarm clock is going off next to your bed.");
</script>
```

![BEEP BEEP BEEP. The alarm clock is going off next to your bed.](/img/beep-beep-beep.png "BEEP BEEP BEEP. The alarm clock is going off next to your bed.")

Yay! Now we have the start of the story. Because this is a choose-your-adventure, let's start adding choice! Let's use the \`confirm("");\` method to ask the player if they want to get out of bed. Confirm pops up a box that asks your user a yes or no question. In our story, we are going to ask if the user wants to shut off the alarm clock and get out of bed.

```
<script>
alert("BEEP BEEP BEEP. The alarm clock is going off next to your bed.");
confirm("You should probably get out of bed now, it is a school day. (Press OK if you want to get out of bed, or cancel if you stay in bed and ignore your clock.)");
</script>
```

![You should probably get out of bed now, it is a school day. (Press OK if you want to get out of bed, or cancel if you stay in bed and ignore your clock.)](/img/git-out-of-bed.png "You should probably get out of bed now, it is a school day. (Press OK if you want to get out of bed, or cancel if you stay in bed and ignore your clock.)")

Now, the player has choice! However, you might notice that clicking the buttons on the confirm box don't do anything. That is because we need to tell the program what to do when the player chooses whether to get out of bed or not!

When the user clicks a button, the `confirm("");` method is being set to \`true\` if the user clicks **OK**, and \`false\` if the user clicks **Cancel**. By using `true` and `false`, Let's get that into a variable called `userGotOutOfBed`. A variable is like a box which stores information that we can look into later.

```
<script>
alert("BEEP BEEP BEEP. The alarm clock is going off next to your bed.");
var userGotOutOfBed = confirm("You should probably get out of bed now, it is a school day. (Press OK if you want to get out of bed, or cancel if you stay in bed and ignore your clock.)");
</script>
```

**Fun Fact!** In JavaScript, when you name a variable, we have them in something called camelCase (notice the weird capitalization?). camelCase is when you use lowercase for the first word in a variable, then use Uppercase for the rest of the words in the variable. We name variables this way so that they are easier to read. `userGotOutOfBed` is way easier to read than `usergotoutofbed`.

![camelCase](/img/1200px-camelcase_new.svg.png "camelCase")

Now that userGotOutOfBed is either `true` or `false` depending on what the player chose, we are going to make an `if () {}` statement to make the program do different things based on what the player chose. An \`if\` statement tests for a certain condition, (like if something is `true` or `false`).

```
<script>
alert("BEEP BEEP BEEP. The alarm clock is going off next to your bed.");
var userGotOutOfBed = confirm("You should probably get out of bed now, it is a school day. (Press OK if you want to get out of bed, or cancel if you stay in bed and ignore your clock.)");

if(userGotOutOfBed) {    
    alert("You got out of bed, and started a wonderful day! Isn't that nice...");
} 
</script>
```

Let's break down this `if () {}` statement. First of all, there are parenthesis `()` that store the thing that the `if` is testing for. `if(userGotOutOfBed)` is asking "Is `userGotOutOfBed=true`?" If it is, it will run everything between the curly brakets `{}`. 

Now, when we click **OK**, we get a happy ending to our story where we get out of bed and start our day!

However, when you click **Cancel**, nothing is happening! This is because our code is saying "Because `userGotOutOfBed` is `false`, we are going to skip over the `if`." We want something to happen when the condition is false! Luckily, there is something called the `else` statement, that runs everything betweern its `{}` if the condition is **not** met (`userGotOutOfBed = false`). Let's try adding a story ending where the user stays in bed, and doesn't wake up to the alarm clock.

```
<script>
alert("BEEP BEEP BEEP. The alarm clock is going off next to your bed.");
var userGotOutOfBed = confirm("You should probably get out of bed now, it is a school day. (Press OK if you want to get out of bed, or cancel if you stay in bed and ignore your clock.)");

if(userGotOutOfBed) {    
    alert("You got out of bed, and started a wonderful day! Isn't that nice...");
} else {    
    alert("You chose not to get out of bed, and fall back asleep. Blissfully, you miss your math test today, and instead dream of sheep.");
}
</script>
```

Congratulations! You have your first choose your own adventure set up with multiple choices! Now, after the end of every game, let's say "THE END". To do this, we are going to put an `alert` method after the `if` statement to say our "THE END" message after every game, regardless of what path was chosen.

```
<script>
alert("BEEP BEEP BEEP. The alarm clock is going off next to your bed.");
var userGotOutOfBed = confirm("You should probably get out of bed now, it is a school day. (Press OK if you want to get out of bed, or cancel if you stay in bed and ignore your clock.)");

if(userGotOutOfBed) {    
    alert("You got out of bed, and started a wonderful day! Isn't that nice...");
} else {    
    alert("You chose not to get out of bed, and fall back asleep. Blissfully, you miss your math test today, and instead dream of sheep.");
}

alert("THE END")
</script>
```

Yay! Now feel free to tweak this story, add multiple paths using the `confirm` method, and go wild! Try making a game about a person in space, or an epic adventure! If you can't think of any ideas for your story, try thinking up alternate endings for a book or a movie! Your imagination is the limit!

## Part III: Extension

There's more! The `prompt()` method lets you ask the user for custom messages! you can implement these into your story, or use them as story elements!

```
// Asking for your player's name
var playerName = prompt("Please enter your name", "Harry Potter")
alert("Hello, " + playerName + ". How are you today?")
```

This example asks for the players name, and has a default of Harry Potter if the player doesn't decide to put their name in. Then, it uses the player name in an `alert` method to repeat their name back to them.

```
// Asking how many marbles a player wants to pick out of a jar.
var marbleCount = prompt("You come across a jar filled with marbles. You figure that nobody would mind if you take a few. How many do you want to take?", "0");


if(marbleCount >= 4) {
    alert("Wowza! You took a lot of marbles! You madlad.");
} else {
    alert("You took " + marbleCount + " marbles. That's a pretty reasonable amount, I would say.");
}
```

This example asks for the amount of marbles someone would take out of a jar, and if it is greater than or equal to 4 (`>= 4`), it tells them that they took a lot of marbles. If not, it tells them how many marbles they took.

Get creative! With the `prompt` method, you can ask the player where they would like to vacation, what they're favorite food is. Heck, you could even make something like a love calculator!

Have fun! If you have any feedback for this workshop, or the club in general, please let us know by filling out this Google Form. Thanks!

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSevvl3M8dj1GoqdcS6uL8PfwwBezNtb2GAQIzXz6yMHhqGazg/viewform?embedded=true" width="640" height="1024" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
