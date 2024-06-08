import "./footer.css"

export default function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="site">
                        <h3>Central Marcas</h3>
                        <p>Loja de Roupas Online.<br/>Venha comprar online conosco!</p>
                        <p>Camisas, calças, shorts e muito mais.<br/>Navegue por nossa loja e fique por dentro das novidades.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="contact">
                        <h3>Fale com a gente!</h3>
                        <p>Email: contato@centralmarcas.com</p>
                        <p>Whatsapp: +55 83 94002-8922</p>
                    </div>
                </div>
                <div className="container">
                    <div className="socials">
                        <h3>Nossas Redes Sociais</h3>
                        <div className="icons">
                            <a href="/#"> <img src="https://cdn-icons-png.flaticon.com/128/4494/4494475.png" alt="Imagem"/> </a>
                            <a href="/#"> <img src="https://cdn-icons-png.flaticon.com/128/4494/4494488.png" alt="Imagem"/> </a>
                            <a href="/#"> <img src="https://cdn-icons-png.flaticon.com/128/4494/4494485.png" alt="Imagem"/> </a>
                        </div>
                    </div>   
                </div>
            </div>
            <div className="last_text">
                <p>@{new Date().getFullYear()} Made by Lucas Clark & José Samuel. All rights reserved.</p>
            </div>
        </div>
    )
}
