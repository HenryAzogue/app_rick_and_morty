import Location from './component/Location';
import './App.css';
import imagen from './assets/imagen'

function App() {

  return (
    <div className="App">
      <header className='App__header'>
        <img  className='header__img'
          src={imagen.img1} alt="Logo Rick and Morty" 
        />
        <h1 className='header__h1'>Estes es mi componente Rick And Morty</h1>
      </header>
      <Location />
    </div>
  )
}

export default App
