import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='flex justify-between px-32 bg-slate-200 items-center py-4 shadow-md'>
            <div className='font-bold text-3xl text-orange-600'>
                <Link to="/"><h1>Coder Test</h1></Link>
            </div>
            <div className='header-list text-orange-600'>
                <Link to="/topic">Topic</Link>
                <Link to="/static">Static</Link>
                <Link to="/blog">Blog</Link>
            </div>
        </div>
    );
};

export default Header;