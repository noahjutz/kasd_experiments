# Handlebars

## Installation

### [CDN](https://handlebarsjs.com/installation/#cdns)

1.  Include CDN

    ```html
    <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
    ```

1.  Wrap content in script

    ```html
    <script id="entry-template" type="text/x-handlebars-template">
      <!-- ... -->
    </script>
    ```

1.  Render html

    ```html
    <script>
      var source = document.getElementById("entry-template").innerHTML;
      var template = Handlebars.compile(source);

      var context = { title: "My New Post", body: "This is my first post!" };
      var html = template(context);
      document.write(html);
    </script>
    ```

### [NPM](https://handlebarsjs.com/installation/#npm-or-yarn-recommended)

1. install

   ```
   npm i handlebars
   ```

2. import

   ```js
   const Handlebars = require("handlebars");
   ```

3. use

   ```js
   const template = Handlebars.compile("Name: {{name}}");
   console.log(template({ name: "Nils" }));
   ```

### [Vision](https://hapi.dev/tutorials/views/?lang=en_US)

see `../../02/vision/`

## Further reading

- [Handlebars](https://handlebarsjs.com/guide)
