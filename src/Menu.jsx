import { useState } from 'react';
import { MdOutlineFirstPage, MdOutlineLastPage } from 'react-icons/md';

import "./Menu.css";

const Menu = () => {
  const [hidden, setHidden] = useState(false);

  const toggleMenu = () => {
    const isHidden = !hidden;

    setHidden(isHidden);
  }

  let className = "Menu";

  if(hidden){
    className += " Menu--hidden";
  }

  return (
    <aside className={className}>
      <header className="Menu__header">
        <h6 className="Menu__title">Menú</h6>
        <span className="Menu__toggle" onClick={toggleMenu}>
          {!hidden ? <MdOutlineFirstPage /> : <MdOutlineLastPage />}
        </span>
      </header>
      <ul className="Menu__list">
        <li className="Menu__item">
          Ver tarjetas
        </li>
        <li className="Menu__item">
          Agregar tarjeta
        </li>
      </ul>
    </aside>
  )
}

export default Menu;