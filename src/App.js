import React, { useState } from "react";
import { configureStore } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// import components
import Header from './components/Header/Header';

function App() {
  const [store, ] = useState(configureStore().store);

  return (
    <>
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={configureStore().persistor}
        >
          <Header/>

        </PersistGate>
      </Provider>
    </>
  );
} 

export default App;
 