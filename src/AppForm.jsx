import { useContext, useEffect } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { Menu, CardForm } from './components';
import { ThemeContext } from "./ThemeProvider";
import "./App.css";

function AppForm() {
  const ctx = useContext(ThemeContext);

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
          <h1 className="App__title">Agregar método de pago</h1>
          <p className="App__copy">Llena el formulario para añadir un nuevo método de pago.</p>
          <div className="App__card-list">
            <CardForm />
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

export default AppForm;
