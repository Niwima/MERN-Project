//this component is not currently being used, may use its structure later

import React, { Component } from 'react'
import AsgardImage from "../images/city-images/asgard.jpg"
import CamelotImage from "../images/city-images/camelot.jpg"
import CoruscantImage from "../images/city-images/coruscant.jpg"
import EmeraldCityImage from "../images/city-images/emeraldcity.jpg"
import GothamImage from "../images/city-images/gotham.jpg"
import HogwartsImage from "../images/city-images/hogwarts.jpg"
import NeverlandImage from "../images/city-images/neverland.jpg"
import OmashuImage from "../images/city-images/omashu.jpg"
import PawneeImage from "../images/city-images/pawnee.jpg"
import QonosImage from "../images/city-images/qo-nos.jpg"
import ShireImage from "../images/city-images/shire.jpg"
import WonderlandImage from "../images/city-images/wonderland.jpg"

class CityImages extends Component {
    state= {
        cities: [
                    [
                        {name: "Asgard", image: AsgardImage, classes: "carousel-item active", key: 1},
                        {name: "Camelot", image: CamelotImage, key: 2},
                    ],
                    [
                        {name: "Coruscant", image: CoruscantImage, classes: "carousel-item", key: 3},
                        {name: "Emerald City", image: EmeraldCityImage, key: 4},
                    ],
                    [
                        {name: "Gotham", image: GothamImage, classes: "carousel-item", key: 5},
                        {name: "Hogwarts", image: HogwartsImage, key: 6},
                    ],
                    [
                        {name: "Neverland", image: NeverlandImage, classes: "carousel-item", key: 7},
                        {name: "Omashu", image: OmashuImage, key: 8},
                    ],
                    [
                        {name: "Pawnee", image: PawneeImage, classes: "carousel-item", key: 9},
                        {name: "Qo'nos", image: QonosImage, key: 10},
                    ],
                    [
                        {name: "The Shire", image: ShireImage, classes: "carousel-item", key: 11},
                        {name: "Wonderland", image: WonderlandImage, key: 12},
                    ],
        ]
    }
    
    render() {
        const cityElement = this.state.cities.map(group => {
            
            return (
                <div className={group[0].classes} key={group[0].key}>
                    
                    <div className="carouselImageWrapper">
                        <div className="carouselImageCaption">
                            <div className="carouselImageCaptionText pl-2 pr-2">
                                {group[0].name}
                            </div>
                        </div>
                        <img className="carouselImage" src={group[0].image} alt={group[0].name}/>
                    </div>

                    <div className="carouselImageWrapper">
                        <div className="carouselImageCaption">
                            <div className="carouselImageCaptionText pl-2 pr-2">
                                {group[1].name}
                            </div>
                        </div>
                        <img className="carouselImage" src={group[1].image} alt={group[1].name}/>
                    </div>

                </div>
            )
        })

        return (
            <div id="carouselControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" >
                    {cityElement}
                </div>
                <a className="carousel-control-prev bg-dark very-rounded-left" href="#carouselControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next bg-dark very-rounded-right" href="#carouselControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
        
    }}
    export default CityImages