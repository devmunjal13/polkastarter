import { idoQueries, idoMutations } from "./ido/index.js";
import { whitelistQueries, whiteListMutation } from "./whitelist/index.js";


const resolvers = {
    Query: {
        ...idoQueries,
        ...whitelistQueries,
    },
    Mutation: {
        ...idoMutations,
        ...whiteListMutation
    }
}

export default resolvers
