import "./CardPlaceholder.css";

function CardPlaceholder({ text }){
  let defaultText = "Aquí habrá un componente para la tarjeta de crédito";

  return (
    <div className="CardPlaceholder">
      <small className="CardPlaceholder__copy">
        { text !== undefined ? text : defaultText } 
      </small>
    </div>
  )
}

export default CardPlaceholder;