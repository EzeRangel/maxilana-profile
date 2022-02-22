import { useState, useEffect, useContext } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import "./App.css";
import api from './utils/fakeAPI';
import { ThemeContext } from './ThemeProvider';
import ErrorBoundary from './ErrorBoundary';
import { Menu, Card, Placeholder } from './components';

function App() {
  const ctx = useContext(ThemeContext);

  const [loading, setLoading] = useState(false);
  const [cardlist, setCardList] = useState([]);

  // ! EL COMPONENTE SE MONTÓ
  useEffect(() => {
    setLoading(true);

    api.getCards().then(cards => {
      setCardList(cards);
    }).finally(() => {
      setLoading(false);
    })
  }, []);

  useEffect(() => {
    if(ctx.mode === "light"){
      document.body.classList.remove("theme-dark");
    } else {
      document.body.classList.add("theme-dark");
    }
  }, [ctx]);

  return (
    <div className="wrapper">
      <div className="container">
        <Menu />
        <section className="App">
          <h1 className="App__title">Mis métodos de pago</h1>
          <p className="App__copy">Aquí puedes encontrar todas tus tarjetas guardadas.</p>
          <div className="App__card-list">
            {loading === true && (
              <Placeholder text="Descargando tarjetas..." />
            )}
            {
              cardlist.map((card) => {
                return (
                  <ErrorBoundary key={card.id}>
                    <Card
                      ccending={card.ccending}
                      ccexp={card.ccdate}
                      title={card.title}
                      ccholder={card.ccholder}
                      cctype={card.cctype}
                    />
                  </ErrorBoundary>
                )
              })
            }
          </div>
          <footer className="App__footer">
            <p className="App__small">
              <small>
                🔒 La información de la tarjeta se almacena encriptada,
                <br />
                 para que ningún tercero pueda acceder a esta información.
              </small>
            </p>
            <span className="App__theme-btn" onClick={() => { ctx.setTheme(); }}>
              {
                ctx.mode === "light"
                  ? <MdOutlineLightMode />
                  : <MdOutlineDarkMode />
              }
            </span>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default App;
