import { v4 as uuid } from "uuid";

const whiteListMutation = {
    createWhitelist: async (_parent, args, context) => {
        console.log(args.whitelist);
        let copy = args.whitelist;
        copy.id = uuid();

        copy.created_at = new Date();
        copy.updated_at = new Date();
        return context.prisma.whitelist.create({
            data: copy
        })
    },

    deleteWhiteList: async (_parent, args, context) => {
        return context.prisma.whitelist.delete({
            where: {
                id: args.id
            }
        })
    },
    updateWhitelist: async (_parent, args, context) => {
        let copy = args.whitelist;
        copy.updated_at = new Date();
        let id = args.id;

        return context.prisma.whitelist.update({
            where: {
                id: id
            },
            data: copy
        })
    }
}

export default whiteListMutation;