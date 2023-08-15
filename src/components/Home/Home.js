import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="split-background">
            <div className="black-side">
                <div className="attractions-logo">
                <img src="./assets/img/bglogo.png" alt="bglogo" />

                </div>
                <div className="attractions">
                    <img src="./assets/img/speed-side-hills_7785-808.jpg" alt="1" />
                    <img src="./assets/img/bungee.jpg" alt="2" />
                    <img src="./assets/img/8383976.jpg" alt="3" />
                    <img src="./assets/img/2008.i203.007.diving snorkeling cartoon.jpg" alt="4" />
                </div>

                <Link to='/menu' className="explore-button">Explore more</Link>

            </div>
            <div className="white-side">
                <video className="video-element" autoPlay loop muted>
                    <source src="./assets/img/backVideo.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
};


