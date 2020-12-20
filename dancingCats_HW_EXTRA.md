# Homework: Animation

## The Cat Walk

Who needs Milan when you have JavaScript?

In Dancing_Cats solution Folder you have the following HTML in index.html file
which has a single img tag of an animated GIF of a cat walking.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>

<body>

  <img src="http://www.anniemation.com/clip_art/images/cat-walk.gif">

</body>

</html>
```

- Create a new JavaScript file and link to it with a script tag at the bottom
- Create a variable to store a reference to the img
- Change the style of the `img`
  - Set `position` to `absolute`
  - Set `left` to `0px`
- Create a function called `catWalk()` that moves the cat 10 pixels to the right of where it started, by changing the `left` style property
- Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!


