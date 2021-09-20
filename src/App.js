import './App.scss';
import HomePage from './pages/homePage/homePage.component'
import ShopPage from './pages/shop/shop.component'
import { Route ,Switch } from 'react-router-dom';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
