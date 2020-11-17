import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return(
        <header>
            <header>
                    <ul>
                        <li>
                            <Link to="/page1">Page1</Link>
                        </li>
                        <li>
                            <Link to="/page2">Page2</Link>
                        </li>
                        <li>
                            <Link to="/Calc">Calc</Link>
                        </li>
                    </ul>
                </header>
        </header> 
    );
}

export default Navigation;