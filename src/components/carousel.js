import React from "react";
import { Carousel } from "react-bootstrap";
import logoUno from "../assets/imgUno.jpeg";
import logoDos from "../assets/imgDos.jpeg";
import logoTres from "../assets/imgTres.jpeg";
import logoCuatro from "../assets/imgCuatro.jpeg";
import "../components/carousel.css";

const Carrousel = () => {

    return(
        <Carousel className="next-button">
            <Carousel.Item>
                <img className="d-block img-carousel" style={{ height: 300 }} src={ logoUno } alt="First slide" />
                <Carousel.Caption>
                    <h1 className="titulo-carousel">40% off</h1>
                    <p className="parrafo-carousel">on hamburguesas</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block img-carousel" style={{ height: 300 }} src={logoDos} alt="Second slide" />
                <Carousel.Caption>
                    <h3 className="titulo-carousel">30% off</h3>
                    <p className="parrafo-carousel">on Lorem</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block img-carousel" style={{ height: 300 }} src={logoTres} alt="Third slide" />
                <Carousel.Caption>
                    <h3 className="titulo-carousel">30% off</h3>
                    <p className="parrafo-carousel">on Lorem</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block img-carousel" style={{ height: 300 }} src={logoCuatro} alt="Third slide" />
                <Carousel.Caption>
                    <h3 className="titulo-carousel">30% off</h3>
                    <p className="parrafo-carousel">on Lorem</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrousel;