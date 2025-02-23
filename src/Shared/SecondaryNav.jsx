import React from 'react';
import { Link } from 'react-router-dom';

const SecondaryNav = ({link1, link2, route1}) => {
    return (
        <div className='space-x-2'>
            <Link to='/'>Home</Link>
            {link1 && <span>{">>"}<Link to={route1}>{link1}</Link></span>}
            {link2 && <span>{">>"}<Link>{link2}</Link></span>}
        </div>
    );
};

export default SecondaryNav;