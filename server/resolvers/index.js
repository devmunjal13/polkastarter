import { idoQueries, idoMutations } from "./ido/index.js";

const resolvers = {
    Query: {
        ...idoQueries,
    },
    Mutation: {
        ...idoMutations
    }
}

export default resolvers
