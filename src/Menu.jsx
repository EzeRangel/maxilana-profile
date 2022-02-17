import { MdOutlineFirstPage, MdOutlineLastPage } from 'react-icons/md';

import "./Menu.css";

const Menu = () => {
  let className = "Menu";

  return (
    <aside className={className}>
      <header className="Menu__header">
        <h6 className="Menu__title">Menú</h6>
        <span className="Menu__toggle">
          <MdOutlineLastPage />
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