import Login from './components/login';
import Dashboard from './components/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return code ? <Dashboard code={code}/> : <Login/>;
}

export default App;
