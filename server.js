const express = require("express");
const graphqlHTTP = require("express-graphql");
const port = process.env.PORT;
const schema = require("./schema/schema");

const server = express();

server.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

server.listen(port, () => {
  console.log("server running on ", port);
});
