import React from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import { Provider } from "./Provider";

const App: React.FC = () => {
  return (
    <Provider>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
};

export default App;
