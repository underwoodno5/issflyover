const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

//Position
const ISSPositionType = new GraphQLObjectType({
  name: 'ISS',
  fields: () => ({
    name: { type: GraphQLString },
    latitude: { type: GraphQLFloat },
    longitude: { type: GraphQLFloat }
  })
});

//passover
const ISSPassoverType = new GraphQLObjectType({
  name: 'ISSPass',
  fields: () => ({
    request: { type: RequestType },
    response: { type: new GraphQLList(ResponseType) }
  })
});

//Request
const RequestType = new GraphQLObjectType({
  name: 'Request',
  fields: () => ({
    altitude: { type: GraphQLInt }
  })
});

//Response
const ResponseType = new GraphQLObjectType({
  name: 'Response',
  fields: () => ({
    duration: { type: GraphQLInt },
    risetime: { type: GraphQLInt }
  })
});

//Resolvers

//http://open-notify.org/Open-Notify-API/ Our API benefactor

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    isspositions: {
      type: ISSPositionType,
      resolve(parent, args) {
        return axios
          .get('https://api.wheretheiss.at/v1/satellites/25544')
          .then(res => res.data);
      }
    },
    isspassovers: {
      type: ISSPassoverType,
      args: {
        lat: { type: GraphQLFloat },
        long: { type: GraphQLFloat }
      },
      resolve(parent, args) {
        args.lat = 45;
        args.long = 45;
        return axios
          .get(
            `http://api.open-notify.org/iss-pass.json?lat=45&lon=-45&alt=20&n=10`
          )
          .then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
