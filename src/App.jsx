import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import "./App.css";
import CreditCard from './Card';

function App() {
  return (
    <div className="wrapper">
      <section className="App">
        <h1 className="App__title">Mis métodos de pago</h1>
        <p className="App__copy">Aquí puedes encontrar todas tus tarjetas guardadas.</p>
        <div className="App__card-list">
          <CreditCard
            ccending="4356"
            ccexp="08/2024"
            title="Tarjeta de nómina"
            ccholder="Ezequiel Rangel"
            cctype="mastercard"
          />
        </div>
        <footer className="App__footer">
          <p className="App__small">
            <small>
              🔒 La información de la tarjeta se almacena encriptada,
              <br />
               para que ningún tercero pueda acceder a esta información.
            </small>
          </p>
          <span className="App__theme-btn">
            <MdOutlineDarkMode />
          </span>
        </footer>
      </section>
    </div>
  );
}

export default App;
