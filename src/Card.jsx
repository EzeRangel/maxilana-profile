import "./CreditCard.css"

// const props = {
//   title: "Tarjeta de nómina",
//   ccending: 4398,
//   ccholder: "Ezequiel Rangel",
//   ccdate: "08/2024",
//   cctype: "mastercard",
// }

const images = {
  "amex": "./amex.png",
  "discover": "./discover.png",
  "jcb": "./jcb.png",
  "visa": "./visa.png",
  "visa-electron": "./visa-electron.png",
  "mastercard": "./mastercard.png"
};

// 1. Crear un stateless component
const Card = (props) => {
  // 3. Añadir props
  const { title = "", ccending = "", ccholder = "", ccexp = "", cctype = ""} = props;

  return (
    <div className="Card">
      <header className="Card__head">
        <h6 className="Card__title">{title}</h6>
      </header>
      <div className="Card__type">
        <img
          src={images[cctype]}
          alt="Imagen de la tarjeta"
          width={53}
          height={32}
        />
      </div>
      <div className="Card__number">
        <span className="Card__number-mask">
          <span>&bull;&bull;&bull;&bull;</span>
          <span>&bull;&bull;&bull;&bull;</span>
          <span>&bull;&bull;&bull;&bull;</span>
        </span>
        <span>{ccending}</span>
      </div>
      <div className="Card__info">
        <div className="Card__block">
          <h6 className="Card__title">Titular de la tarjeta</h6>
          <span>{ccholder}</span>
        </div>
        <div className="Card__block">
          <h6 className="Card__title">Vence hasta</h6>
          <span>{ccexp}</span>
        </div>
      </div>
    </div>
  )
}

// 2. Exportar el componente
export default Card;