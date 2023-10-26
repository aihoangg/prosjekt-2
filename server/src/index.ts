import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import express, { Request, Response } from "express";

const app = express();
const PORT = 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

const mocks = {
  Query: () => ({
    cards: () =>
      //array with 100 mock cards, by default mock only returns 2 entries
      new Array(100).fill(0).map(() => ({
        id: "base4-1",
        image: "https://assets.tcgdex.net/en/base/base4/1",
        localId: "1",
        name: "Alakazam",
        rarity: "Rare",
      })),
  }),
};

const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs }),
    mocks,
  }),
});

async function startApolloServer() {
  await server.start(); // Start ApolloServer
  server.applyMiddleware({ app }); // Apply the Apollo middleware to the Express app

  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
    console.log(
      `GraphQL API is running at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}

// Start both the Express server and the Apollo server
//express returns "Hello,world!", Apollo returns mock data.
(async function () {
  await startApolloServer();
})();

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://it2810-21.idi.ntnu.no:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("Connected to MongoDB");
    return app.listen({ port: 5000 });
  })
  .then((res: { url: any }) => {
    console.log(`Server running at ${res.url}`);
  });
