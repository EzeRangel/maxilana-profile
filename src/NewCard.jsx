import "./CreditCard.css";
import "./Form.css";

const NewCard = () => {
  return (
    <div className="Card">
      <header className="Card__head">
        <h6 className="Card__title" style={{ textAlign: "right" }}>
          Nueva tarjeta
        </h6>
      </header>
      <form className="Form">
        <div className="Form__field">
          <label className="Form__label" htmlFor="ccholder">Titular de la tarjeta</label>
          <input className="Form__input" id="ccholder" type="text" placeholder="Nombre que aparece en la tarjeta" name="ccholder" />
        </div>
        <div className="Form__field">
          <label className="Form__label" htmlFor="ccnumber">No. de la tarjeta</label>
          <input className="Form__input" id="ccnumber" type="text" placeholder="16 dígitos de la tarjeta" maxLength={16} name="ccnumber" />
        </div>
        <div className="Form__colwrapper">
          <div className="Form__field">
            <label className="Form__label" htmlFor="ccexp">Fecha exp.</label>
            <input className="Form__input" id="ccexp" type="text" placeholder="MM/YYYY" name="ccexp" />
          </div>
          <div className="Form__field">
            <label className="Form__label" htmlFor="cvv">CVV</label>
            <input className="Form__input" id="cvv" type="password" maxLength={3} name="cvv" />
          </div>
        </div>
        <div>
          <button type="submit" className="Form__button">Guardar tarjeta</button>
        </div>
      </form>
    </div>
  )
}

export default NewCard;