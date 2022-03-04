const whitelistQueries = {
    whiteLists: async (_parent, _args, context) => {
        return context.prisma.whitelist.findMany()
    },

    whiteList: async (_parent, args, context) => {
        console.log(args);
        return context.prisma.whitelist.findUnique({
            where: {
                id:args.id,
            }
        })
    }
}

export default whitelistQueries