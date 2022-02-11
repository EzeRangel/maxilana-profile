import React from 'react';
import "./CreditCard.css";
import "./Form.css";

const INITIAL_VALUES = {
  ccholder: "",
  ccnumber: "",
  ccexp: "",
  cvv: "",
}

const NewCard = () => {
  const [ccholder, updateHolder] = React.useState("");
  const [ccnumber, updateNumber] = React.useState("");
  const [ccexp, setExpState] = React.useState("");
  const [cvv, setCVVState] = React.useState("");
  
  //           [     0     ,         1                     ]
  // holder => [stateActual, functionParaActualizarElState]

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log({ ccholder, ccnumber, ccexp, cvv });
  }

  return (
    <div className="Card">
      <header className="Card__head">
        <h6 className="Card__title" style={{ textAlign: "right" }}>
          Nueva tarjeta
        </h6>
      </header>
      <form className="Form" onSubmit={handleFormSubmit}>
        <div className="Form__field">
          <label className="Form__label" htmlFor="ccholder">Titular de la tarjeta</label>
          <input
            className="Form__input"
            id="ccholder"
            type="text"
            placeholder="Nombre que aparece en la tarjeta"
            name="ccholder"
            value={ccholder}
            onChange={(evt) => {
              const value = evt.target.value; // 1. Obtenemos el valor del input

              updateHolder(value); // 2. Actualizamos el state
            }}
          />
        </div>
        <div className="Form__field">
          <label className="Form__label" htmlFor="ccnumber">No. de la tarjeta</label>
          <input
            className="Form__input"
            id="ccnumber"
            type="text"
            placeholder="16 dígitos de la tarjeta"
            maxLength={16}
            name="ccnumber"
            value={ccnumber}
            onChange={({ target: { value } }) => {             
              /**
               * const evt = { ..., target: { ..., value: "ESTE ES EL VALOR" } }
               */

              updateNumber(value);
            }}
          />
        </div>
        <div className="Form__colwrapper">
          <div className="Form__field">
            <label className="Form__label" htmlFor="ccexp">Fecha exp.</label>
            <input
              className="Form__input"
              id="ccexp"
              type="text"
              placeholder="MM/YYYY"
              name="ccexp"
              value={ccexp}
              onChange={({ target }) => { setExpState(target.value) }}
            />
          </div>
          <div className="Form__field">
            <label className="Form__label" htmlFor="cvv">CVV</label>
            <input
              className="Form__input"
              id="cvv"
              type="password"
              maxLength={3}
              name="cvv"
              value={cvv}
              onChange={({ target }) => setCVVState(target.value)}
            />
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