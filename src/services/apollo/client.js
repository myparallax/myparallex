import { resolvers, typeDefs } from "./resolvers";
// import { onError } from "apollo-link-error" ;
import {  ApolloClient , from  , HttpLink   } from '@apollo/client';
import {InMemoryCache} from 'apollo-cache-inmemory' ; 
// import {InMemoryCache} from '@apollo/client/cache' ;
import { onError } from "@apollo/client/link/error";


const uri = "http://localhost:4000"; 
 

const cache = new InMemoryCache() ; 

const errorLink = onError(({operation , response , graphQLErrors, networkError  }) => {
   
  console.log("operationd that errored : " , operation.operationName) ; 

  console.log("response from server : " , response ); 

  if (graphQLErrors)

    graphQLErrors.map(({ message, locations, path }) =>
      
    console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  
    if (networkError) console.log(`[Network error]: ${networkError}`);

});


const httpLink = new HttpLink({uri , 
  headers:{authorization:localStorage.getItem("token")} , 
   
}); 

const client = new ApolloClient({
  
    
    cache ,
    link : from([errorLink , httpLink ])   , 
    typeDefs,
    resolvers, 
    
  });

  
  cache.writeData({
    data: {
      isLoggedIn: !!localStorage.getItem('token'),
      
    },
  });
  // cache.write({ 
  //   data: {
  //     isLoggedIn: !!localStorage.getItem('token'),
      
  //   },
  // });
// cache.wri teQuery({query:{}, data:{isLoggedIn:!!localStorage.getItem("token")}}); 



export default client 




