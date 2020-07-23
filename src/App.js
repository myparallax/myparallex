import React, { useState } from "react";
import { configureStore } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// import components
import MainWrap from './components/MainWrap';
import Auth from './components/Auth/Auth'

function App() {
  const [store, ] = useState(configureStore().store);

  return (
    <>
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={configureStore().persistor}
        >

        {/* <MainWrap /> */}
        <Auth />

        </PersistGate>
      </Provider>
    </>
  );
} 

export default App;
 