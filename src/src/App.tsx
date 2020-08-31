import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes/Routes";
import { configure } from "mobx";
import { Provider } from "mobx-react";
import { rootStore } from "./stores/RootStore";

configure({ enforceActions: "observed" });

const App: React.FC = () => {
  return (
    <Provider store={rootStore}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
