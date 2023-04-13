const Handlebars = require("handlebars");
const fs = require("fs");

const str = fs.readFileSync("template2.hbs").toString();

Handlebars.registerHelper("loud", (str) => str.toUpperCase());

Handlebars.registerHelper("time", () =>
  new Date(Date.UTC(2023, 4, 3, 3, 0, 0)).toLocaleString("de-DE")
);

Handlebars.registerHelper("noop", (options) => options.fn(this));

Handlebars.registerHelper(
  "bold",
  (options) => new Handlebars.SafeString("<div>" + options.fn(this) + "</div>")
);

Handlebars.registerHelper("test", (options) => options.fn());

Handlebars.registerHelper("list", (items, options) => {
  const html = items.map((i) => "<li>" + options.fn(i) + "</li>");
  return "<ul>\n" + html.join("\n") + "\n</ul>";
});

const template = Handlebars.compile(str);

const compiled = template({
  guy: {
    firstname: "John",
    lastname: "Doe",
  },
  items: ["apple", "banana", "mango"],
  text: "hello from hbsjs!",
});

console.log(compiled);
