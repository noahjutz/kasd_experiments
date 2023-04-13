const Hapi = require("@hapi/hapi");

const server = Hapi.server({ port: 3000 });

const init = async () => {
  server.state("mydata", {
    encoding: "base64json",
    clearInvalid: true,
  });

  server.route([
    {
      method: "GET",
      path: "/",
      handler: (request, h) =>
        JSON.stringify(request.state) +
        "<br> <a href='/rand'>rand</a> <br> <a href='/del'>del</a> <br> <a href='/add'>add</a>",
    },
    {
      method: "GET",
      path: "/rand",
      handler: (request, h) =>
        h.redirect("/").state("mydata", { random: Math.random() }),
    },
    {
      method: "GET",
      path: "/del",
      handler: (request, h) => h.redirect("/").unstate("mydata"),
    },
    {
      method: "GET",
      path: "/add",
      handler: (request, h) =>
        h
          .redirect("/")
          .state("mydata", {
            ...request.state.mydata,
            new: Math.round(Math.random()),
          }),
    },
  ]);

  server.start();
  console.log("Server running at " + server.info.uri);
};

init();
