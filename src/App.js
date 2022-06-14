import './App.css';
import NavBar from './components/navbar/Navbar';
import Counter from './components/itemcount/Itemcount';
import Home from './components/home/Homeindex';


const App=()=> {
  const initial=0;
    const stock=15;
    const onAdd = () => {console.log ('agregado')};



  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
       <h1>Mundial de Camisetas</h1>
       <Counter  onAdd={onAdd} initial={initial} stock={stock}/>
       <Home/>
      </header>
    </div>
  );
}

export default App;
