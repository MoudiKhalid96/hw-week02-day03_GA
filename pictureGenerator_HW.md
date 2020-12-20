# Homework: Creating Random Images
In Random_Images solution Folder you have the following HTML in index.html file:

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

  <div>
    <label>
      Width:
      <input type="number" class="width" />
    </label>
    <label>
      Height:
      <input type="number" class="height" />
    </label>
    <button id="randomize">Get random image!</button>
  </div>

  <div class="image"></div>

</body>

</html>
```

- Create and link a JavaScript file
- When someone clicks `button#randomize`:
  - Create an `img` element
  - Create a URL based on [this documentation](https://source.unsplash.com/)
    - e.g. It might look something like this: `https://source.unsplash.com/1600x900`



