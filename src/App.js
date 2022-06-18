import './App.css';
import {Provider} from 'react-redux'
import {store} from './redux/store'
import Router from "./router/Router";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <header>
        HubApp
      </header>
      <main>
        <Router/>
      </main>
      <footer>
        By Marcin
      </footer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
