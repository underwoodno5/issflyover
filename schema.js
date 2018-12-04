const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

//----------SCHEMAS--------\\

//---Position
const ISSPositionType = new GraphQLObjectType({
  name: 'ISS',
  fields: () => ({
    name: { type: GraphQLString },
    latitude: { type: GraphQLFloat },
    longitude: { type: GraphQLFloat }
  })
});

//---Passover
const ISSPassoverType = new GraphQLObjectType({
  name: 'ISSPass',
  fields: () => ({
    request: { type: RequestType },
    response: { type: new GraphQLList(ResponseType) }
  })
});

const RequestType = new GraphQLObjectType({
  name: 'Request',
  fields: () => ({
    altitude: { type: GraphQLInt }
  })
});

const ResponseType = new GraphQLObjectType({
  name: 'Response',
  fields: () => ({
    duration: { type: GraphQLInt },
    risetime: { type: GraphQLInt }
  })
});

//---Location

const GeocodeType = new GraphQLObjectType({
  name: 'Geocode',
  fields: () => ({
    results: { type: new GraphQLList(ResultsType) }
  })
});

const ResultsType = new GraphQLObjectType({
  name: 'Results',
  fields: () => ({
    providedLocation: { type: GraphQLString },
    locations: { type: new GraphQLList(LocationsType) }
  })
});

const LocationsType = new GraphQLObjectType({
  name: 'Location',
  fields: () => ({
    latLng: { type: LatlngType }
  })
});

const LatlngType = new GraphQLObjectType({
  name: 'LatLng',
  fields: () => ({
    lat: { type: GraphQLFloat },
    lng: { type: GraphQLFloat }
  })
});

//-----Resolvers-----\\

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
        return axios
          .get(
            `http://api.open-notify.org/iss-pass.json?lat=${args.lat}&lon=${
              args.long
            }&alt=20&n=10`
          )
          .then(res => res.data);
      }
    },
    geocode: {
      type: GeocodeType,
      args: {
        location: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(
            `https://open.mapquestapi.com/geocoding/v1/address?key=6IMng1btF4EmjAPceKCxtMmFx6asEZG0&inFormat=kvp&outFormat=json&location=${
              args.location
            }&thumbMaps=false`
            //`https://open.mapquestapi.com/geocoding/v1/address?key=6IMng1btF4EmjAPceKCxtMmFx6asEZG0&inFormat=kvp&outFormat=json&location=st%20johns%20newfoundland&thumbMaps=false`
          )
          .then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
