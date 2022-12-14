const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
 
const resolvers = {
    Query: {
        user(parent, args, context, info){
            return prisma.user({ id: args.id})
        }
    }
}

const server = new GraphQLServer({
    typeDefs: `${__dirname}/schema.graphql`,
    resolvers,
    endpoint: `http://localhost:4466`
})
 
server.start().then(() => console.log('Servidor online - http://localhost:4000'))