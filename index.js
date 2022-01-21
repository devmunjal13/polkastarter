// // var express = require("express");
// import express from 'express';
// import httpContext from 'express-http-context';
// import cors from 'cors';
// import { v4 as uuid } from 'uuid';
// import routes from './server/routes/index.js';
// import { ApolloServer } from 'apollo-server'
// import pkg from '@prisma/client';

// const { PrismaClient } = pkg;

// var app = express();
// // const server = require('http').createServer(app);
// export const prisma = new PrismaClient()

// // const prisma = getPrismaClient

// app.get('/', function (req, res) {
//     res.send("health check")
// })
// // parse body params and attache them to req.body
// app.use(express.json());
// // enable CORS - Cross Origin Resource Sharing
// app.use(cors());
// app.use(httpContext.middleware);
// app.use('/api', routes);

// // authentication remaining

// app.listen(process.env.PORT, () => {
//     console.log("prismaClient Ready", "authentication pending")
//     console.log("server started", process.env.PORT)
// });



import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import  schema from './schema.js';
import  {context}  from './context.js';
import cors from 'cors';


const app = express()

app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    context: context,
    graphiql: true,
  }),
)

app.listen(4000)
console.log(`\
🚀 Server ready at: http://localhost:4000/graphql
`)