import './App.css';
import Header from './components/Header'
import Repo from './components/Repo';
import Devs from './components/Devs';
import { QueryClientProvider, QueryClient } from 'react-query'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Repo} />
          <Route path="/developers" component={Devs} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
