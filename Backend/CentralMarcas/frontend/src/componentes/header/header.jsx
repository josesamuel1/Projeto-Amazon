import "./header.css"

export default function Header() {
    return (
        <header className="header">
            <div className="container container_header">
                <div className="logo_container border_white">
                    <h1>Central Marcas</h1>
                </div>

                <div className="search_container">
                    <input type="text" className="search_input"/>
                    <div className="search_icon">
                        <img className="svg_search_icon" src="/images/magnifying-glass-solid.svg" alt="Imagem"/>
                    </div>
                </div>

                <div className="language_container border_white"/>

                <div className="cart_container border_white">
                    <img className="svg_cart_icon" src="/images/cart-shopping-solid.svg" alt="Imagem"/>
                    <a href="/product" className="link_carrinho">Carrinho</a>
                </div>
            </div>

            <nav className="nav">
                <div className="container nav_container">
                    <ul>
                        <li className="border_white"> <a href="/inicio">Início</a> </li>
                        <li className="border_white"> <a href="/camisas">Camisas</a> </li>
                        <li className="border_white"> <a href="/shorts">Shorts</a> </li>
                        <li className="border_white"> <a href="/#">Calças</a> </li>
                        <li className="border_white"> <a href="/#">Bermudas</a> </li>
                        <li className="border_white"> <a href="/#">Moletons</a> </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
