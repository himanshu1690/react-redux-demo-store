import { BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
import Header from "./components/Header";
import ProductStore from "./components/Product";
import ProductDetails from "./components/Product/details";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={ProductStore} />
            <Route path="/product/:productId" component={ProductDetails} />
            <Route>404 Not Found</Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
