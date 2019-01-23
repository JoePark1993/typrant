import React from 'react';
import "./HomeHero.css";


class HomeHero extends React.PureComponent {
    render() {
        return(
            <div class = "HeroBackground">

            <div class = "Greeting">
                Welcome, Hero
            </div>

            <div class = "Subgreeting">
                Typrant awaits you...
            </div>



            <a href = "/Play/Play" class = "button"> Play </a>

            </div>
        )
    }
}

export default HomeHero;