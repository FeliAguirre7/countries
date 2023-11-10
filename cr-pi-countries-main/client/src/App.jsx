import NavBar from "./Components/NavBar/NavBar";
import { Route, useLocation } from "react-router-dom";
import { Home, Form, Landing, Detail } from "./views";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/detail/:id" render={() => <Detail />} />
      <Route exact path="/create" render={() => <Form />} />
      <Route exact path="/" render={() => <Landing />} />
    </div>
  );
}

export default App;
