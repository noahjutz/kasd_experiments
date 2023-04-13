const Handlebars = require("handlebars");

module.exports = (options) => {
  return new Handlebars.SafeString(
    "<div class='bold'>" + options.fn(this) + "</div>"
  );
};
