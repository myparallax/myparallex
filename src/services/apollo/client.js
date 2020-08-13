import ApolloClient, { HttpLink } from 'apollo-boost';
import {InMemoryCache} from 'apollo-boost';
import { resolvers, typeDefs } from "./resolvers";

// const uri  = process.env.URI 
const uri = "http://localhost:4000" ; 
console.log("uri : " +  uri );
const cache = new InMemoryCache() ; 

const client = new ApolloClient({
  link : new HttpLink({
    headers:{authorization:localStorage.getItem("token")}
  }),
    uri , 
    cache , 
    typeDefs,
    resolvers
  });

  cache.writeData({
    data: {
      isLoggedIn: !!localStorage.getItem('token'),
      
    },
  });
export default client 




