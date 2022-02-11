import "./App.css";
import NewCard from "./NewCard";

function App() {
  return (
    <div className="wrapper">
      <section className="App">
        <h1 className="App__title">Agregar método de pago</h1>
        <p className="App__copy">Llena el formulario para añadir un nuevo método de pago.</p>
        <div className="App__card-list">
          <NewCard />
        </div>
        <p className="App__small">
          <small>
            🔒 La información de la tarjeta se almacena encriptada,
            <br />
             para que ningún tercero pueda acceder a esta información.
          </small>
        </p>
      </section>
    </div>
  );
}

export default App;
