import { Link } from "react-router-dom"

export const Gallery = () => {

    return (
        <div className="gallery-page">
            <ul className="gallery-section">
                <Link to='/gallery/bungee'>
                    <li className="gallery-logo">
                        <img src="../assets/img/f1.jpg" alt="Logo" />
                    </li>
                    <h2 className="text-overlay">
                        Bungee Jumping
                    </h2>
                </Link>
            </ul>
            <ul className="gallery-section">
                <Link to='/gallery/rafting'>
                    <li className="gallery-logo">
                        <img src="../assets/img/bukit-cilli-rafting.jpg" alt="Logo" />
                    </li>
                    <h2 className="text-overlay">
                        Rafting
                    </h2>
                </Link>
            </ul>
            <ul className="gallery-section">

                <Link to='/gallery/drifting'>
                    <li className="gallery-logo">
                        <img src="../assets/img/photo-1567965850174-8f5f68f5a1bd.jpg" alt="Logo" />
                    </li>
                    <h2 className="text-overlay">
                        Drifting
                    </h2>
                </Link>

            </ul>
            <ul className="gallery-section">

                <Link to='/gallery/airballoon'>
                    <li className="gallery-logo">
                        <img src="../assets/img/pexels-pixabay-163314.jpg" alt="Logo" />
                    </li>
                    <h2 className="text-overlay">
                        Air Balloon
                    </h2>
                </Link>

            </ul>
            <ul className="gallery-section">
                <Link to='/gallery/diving'>
                    <li className="gallery-logo">
                        <img src="../assets/img/pexels-pia-b-3046582.jpg" alt="Logo" />
                    </li>
                    <h2 className="text-overlay">
                        Diving
                    </h2>
                </Link>

            </ul>
            <ul className="gallery-section">

                <Link to='/gallery/parachute'>
                    <li className="gallery-logo">
                        <img src="../assets/img/pexels-tom-fisk-11124984.jpg" alt="Logo" />
                    </li>
                    <h2 className="text-overlay">
                        Parachute jumping
                    </h2>
                </Link>

            </ul>
        </div>
    )
}