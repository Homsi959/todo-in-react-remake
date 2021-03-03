import { render } from '@testing-library/react';
import React from 'react'
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header>
            <h1>Планировщик</h1>
        </header>
    )
}

export default Header;