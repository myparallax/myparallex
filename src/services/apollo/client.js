import ApolloClient from 'apollo-boost';
import {InMemoryCache} from 'apollo-boost';


const uri  = process.env.URI 

const cache = new InMemoryCache() ; 

const client = new ApolloClient({
    uri , 
    cache 
  });

export default client 