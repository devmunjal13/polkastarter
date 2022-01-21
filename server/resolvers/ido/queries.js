const idoQueries = {
    allIdos: async (_parent, _args, context) => {
        return context.prisma.ido.findMany()
    },

    ido: async (_parent, args, context) => {
        console.log(args);
        return context.prisma.ido.findUnique({
            where: {
                id:args.id,
            }
        })
    }
}

export default idoQueries