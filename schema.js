// import { makeExecutableSchema } from '@graphql-tools/schema'
// import { DateTimeResolver } from 'graphql-scalars'
// import { context } from './context.js'
// import { v4 as uuid } from "uuid";



// const typeDefs = `

// type Ido{
//     productName: String!
//     description: String!
//     price: String!
//     vestingSchedule: String
// }

// type Query{
//     allIdos:[Ido!]!
// }

// type Mutation{
//     createIdo(productName:String!,description:String!,price:String!):Ido
// }

// `

// const resolvers = {
//     Query: {
//         allIdos: (_parent, _args, context) => {
//             return context.prisma.ido.findMany()
//         }
//     },
//     Mutation: {

//         createIdo: async (_parent, args, context) => {
//             console.log(args);
//             return await context.prisma.ido.create(
//                 {
//                     data: {
//                         id: uuid(),
//                         productName: args.productName,
//                         description: args.description,
//                         price: args.price,
//                         created_at: new Date,
//                         updated_at: new Date,
//                     }
//                 }
//             )
//         }
//     }
// }


// export const schema = makeExecutableSchema({
//     resolvers,
//     typeDefs,
// })


import path from 'path';
import { readdirSync, readFileSync } from 'fs';
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from "./server/resolvers/index.js";

const gqlFiles = readdirSync(path.join(path.resolve(), './server/typedefs'));

let typeDefs = '';

gqlFiles.forEach((file) => {
    typeDefs += readFileSync(path.join(path.resolve(), './server/typedefs', file), {
        encoding: 'utf8',
    });
});

const schema = makeExecutableSchema({
    typeDefs,
    // resolvers pending...
    resolvers
});

export default schema;