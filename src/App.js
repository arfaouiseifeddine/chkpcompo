import './App.css';
import ProfilPhoto from './components/ProfilPhoto';
import Name from './components/FullName';
import Adres from './components/Address';



function App() {
  return (
    <div className="App">
      <ProfilPhoto/>
     <h1> <Name/></h1>
     <h1><Adres/></h1>

    </div>
  );
}

export default App;
