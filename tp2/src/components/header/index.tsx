import { ReactElement } from 'react';
import SiteLogo from '../../assets/site-logo.svg'
import './styles.scss'
import Cart from '../cart';

export default function Header():ReactElement{
    return (
        <header>
            <div className="container">
                <a href="#">
                    <img src={SiteLogo} alt="site-logo" />
                    ME-Book
                </a>
                <Cart/>
            </div>
        </header>
    )
}