import './App.css';
import Movie from './movie';
import Starship from './starship';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={'/movie/:id'} component={Movie} />
        <Route path={'/starship/:id'} component={Starship} />
      </Switch>
    </div>
  );
}

export default App;
