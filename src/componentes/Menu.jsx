import { NavLink } from 'react-router-dom';

const Menu = () => (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink className="navbar-brand" aria-current="page" exact to="/">MUNDO DO TONER</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" exact to="/">HOME</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            REGISTRO
                        </a>
                        <ul className="dropdown-menu">
                            <li><NavLink className="dropdown-item" exact to="/produto">PRODUTOS</NavLink></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/sobre">SOBRE</NavLink>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
);

export default Menu;