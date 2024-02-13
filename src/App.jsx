import React from "react";
import Home from "./pages/Home";
import Header from "./layout/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <Home/>
    </Provider>
  );
};

export default App;
