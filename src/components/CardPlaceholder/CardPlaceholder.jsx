import "./CardPlaceholder.css";

function CardPlaceholder({ text, error = false }){
  let defaultText = "Aquí habrá un componente para la tarjeta de crédito";
  let className = "CardPlaceholder";

  if(error){
    className += " has-error";
  }

  return (
    <div className={className}>
      <small className="CardPlaceholder__copy">
        { text !== undefined ? text : defaultText } 
      </small>
    </div>
  )
}

export default CardPlaceholder;