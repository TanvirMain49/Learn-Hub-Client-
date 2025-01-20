import React from 'react';
import { Link } from 'react-router-dom';

const SecondaryNav = ({link1, link2, route1}) => {
    return (
        <div className='space-x-2'>
            <Link to='/'>Home</Link><span>{">>"}</span>
            <Link to={route1}>{link1}</Link><span>{">>"}</span>
            <Link>{link2}</Link>
        </div>
    );
};

export default SecondaryNav;