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
                <ul>
                    <li><Link to='/'><HiHome /></Link></li>
                    <li><a href="/menu"><CiMenuBurger /></a></li>
                    <li><a href="/gallery"><TfiGallery /></a></li>
                    <li><Link to='/about'><IoInformationCircleOutline /></Link></li>
                    <li><Link to='/contact'><BiSolidContact /></Link></li>
                </ul>
            </nav>
        </header>
    )
}