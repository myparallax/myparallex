import React from "react";
import MainWrap from "./components/MainWrap";
import ContextProvider from "@/components/AppContex/ContextProvider";
import client from "./services/apollo/client";
import {ApolloProvider} from '@apollo/react-hooks'; 


function App() {

  return (

      <ContextProvider>
            <ApolloProvider client={client }>
            <MainWrap />
            </ApolloProvider>
      
      </ContextProvider>
  );
}

export default App;
