import "./CreditCard.css"

// const props = {
//   title: "Tarjeta de nómina",
//   ccending: 4398,
//   ccholder: "Ezequiel Rangel",
//   ccdate: "08/2024",
//   cctype: "mastercard",
// }

// 1. Crear un stateless component
const Card = () => {
  return (
    <div className="Card">
      <header className="Card__head">
        <h6 className="Card__title">Tarjeta de nómina</h6>
      </header>
      <div className="Card__type">
        <img src="./mastercard.png" alt="Tarjeta Mastercard" width={53} height={32} />
      </div>
      <div className="Card__number">
        <span className="Card__number-mask">
          <span>&bull;&bull;&bull;&bull;</span>
          <span>&bull;&bull;&bull;&bull;</span>
          <span>&bull;&bull;&bull;&bull;</span>
        </span>
        <span>4398</span>
      </div>
      <div className="Card__info">
        <div className="Card__block">
          <h6 className="Card__title">Titular de la tarjeta</h6>
          <span>Ezequiel Rangel Ibarra</span>
        </div>
        <div className="Card__block">
          <h6 className="Card__title">Vence hasta</h6>
          <span>08/2024</span>
        </div>
      </div>
    </div>
  )
}

// 2. Exportar el componente
export default Card;