import { HiHome } from 'react-icons/hi'
import { BiSolidContact } from 'react-icons/bi'
import { CiMenuBurger } from 'react-icons/ci'
import { TfiGallery } from 'react-icons/tfi'
import { IoInformationCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'


export const Header = () => {


    return (
        <header>
            <nav className="navbar">
                <Link to='/'> <img className="logo-header" src="./assets/img/bglogo.png" alt="Logo" /></Link>
                <ul>
                    <li><Link to='/'><HiHome /></Link></li>
                    <li><Link to='/menu'><CiMenuBurger /></Link></li>
                    <li><Link to='/gallery'><TfiGallery /></Link></li>
                    <li><Link to='/about'><IoInformationCircleOutline /></Link></li>
                    <li><Link to='/contact'><BiSolidContact /></Link></li>
                </ul>
            </nav>
        </header>
    )
}