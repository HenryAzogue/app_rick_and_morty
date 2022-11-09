import Location from './component/Location';
import './App.css';
import imagen from './assets/imagen'

function App() {

  
  return (
    <div className="App">
      <header className='App__header'>
        <img className='header__img'
          src={imagen.img1} alt="Logo Rick and Morty"
        />
        <h1 className='header__h1'>Your Wiki</h1>
      </header>

      <Location />

      <hr className='App__hr'/>
      <footer className='App__footer'>
        <p className="footer__p">
          Developed by @HenryAzogue
        </p>
      </footer>
    </div>
  )
}

export default App
