import  React from 'react';
import {Link, Redirect} from 'react-router-dom';

const Menu = () => {
    <div>
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link className = "nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
                <Link className = "nav-link" to="/signup">Signup</Link>
            </li>

            <li className="nav-item">
                <Link className = "nav-link" to="/signin">signin</Link>
            </li>
        </ul>
    </div>
};

export default Redirect(Menu);