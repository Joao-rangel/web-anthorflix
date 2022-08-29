import {Route} from 'react-router';
import {Routes} from 'react-router-dom';
import './global.scss';
import {Movies} from './pages/Movies';
import {Root} from './templates/Root';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/movies" element={<Movies />} />
        <Route path="/my-list" element={<Movies />} />
      </Route>
    </Routes>
  );
}

export default App;
