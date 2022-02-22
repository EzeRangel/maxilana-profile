import { Link } from 'react-router-dom';
import { MdOutlineFirstPage, MdOutlineLastPage } from 'react-icons/md';

import "./Menu.css";
import useToggle from '../../hooks/useToggle';

const Menu = () => {
  const { hidden, updateToggle } = useToggle();

  let className = "Menu";

  if(hidden === true){
    className += " Menu--hidden";
  }

  return (
    <aside className={className}>
      <header className="Menu__header">
        <h6 className="Menu__title">Menú</h6>
        <span className="Menu__toggle" onClick={updateToggle}>
          {
            hidden === true
              ? <MdOutlineLastPage />
              : <MdOutlineFirstPage />
          }
        </span>
      </header>
      <ul className="Menu__list">
        <li className="Menu__item">
          <Link to="/">
            Ver tarjetas
          </Link>
        </li>
        <li className="Menu__item">
          <Link to="/agregar-tarjeta">
            Agregar tarjeta
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Menu;