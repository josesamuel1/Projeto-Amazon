import Header from "../header/header"
import Footer from "../footer/footer"
import Carousel from "../carrossel/carrossel"

import "./inicio.css"

export default function Inicio() {
    return (
        <div className="margin_zero">
            <Header />
            <Carousel />
            <Footer />
        </div>
    )
}
