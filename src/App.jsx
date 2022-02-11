import "./App.css";
import Card from "./Card";
import CardPlaceholder from "./CardPlaceholder";
import cards from './cardlist.json';

function App() {
  return (
    <div className="wrapper">
      <section className="App">
        <h1 className="App__title">Mis métodos de pago</h1>
        <p className="App__copy">Aquí puedes encontrar todas tus tarjetas guardadas.</p>
        <div className="App__card-list">
          {/* <CardPlaceholder /> */}
          {cards.map(function(card){
            return (
              <Card
                key={card.id}
                title={card.title}
                cctype={card.cctype}
                ccending={card.ccending}
                ccholder={card.ccholder}
                ccexp={card.ccdate}
              />
            )
          })}
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
