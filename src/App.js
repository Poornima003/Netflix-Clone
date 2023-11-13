import './App.css';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div>
    <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}  />
            
    </div>
  );
}

export default App;