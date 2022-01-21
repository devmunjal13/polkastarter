import { v4 as uuid } from "uuid";

const idoMutations = {
    createIdo: async (_parent, args, context) => {
        console.log(args.ido);
        let copy = args.ido;
        copy.id = uuid();
       
        copy.created_at = new Date();
        copy.updated_at = new Date();
        return context.prisma.ido.create({
            data: copy
        })
    },

    deleteIdo: async (_parent, args, context) => {
        return context.prisma.ido.delete({
            where: {
                id: args.id
            }
        })
    },
    updateIdo: async (_parent, args, context) => {
        let copy = args.ido;
        copy.updated_at = new Date();
        let id = args.id;

        return context.prisma.ido.update({
            where: {
                id: id
            },
            data: copy
        })
    }
}

export default idoMutations;