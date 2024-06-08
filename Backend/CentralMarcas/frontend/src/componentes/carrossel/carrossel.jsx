import "./carrossel.css"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';


export default function Carousel() {
  return (
    <div className="image_container">
      <Splide
        options={{
          type: 'fade',       // Opção para transição de fade
          rewind: true,       // Opção para retroceder no final do slide
          autoplay: true,     // Ativa o modo de reprodução automática
          interval: 3000,     // Intervalo de tempo entre os slides em milissegundos (3 segundos)
          pauseOnHover: true  // Pausa a reprodução automática ao passar o mouse sobre o carrossel
        }}
        aria-label="Imagens do Carrossel"
      >
        <SplideSlide className="image_list">
          <img src="/images/1.png" className="image_item" alt="Imagem 1"/>
        </SplideSlide>
        <SplideSlide className="image_list">
          <img src="/images/2.png" className="image_item" alt="Imagem 2"/>
        </SplideSlide>
        <SplideSlide className="image_list">
          <img src="/images/3.png" className="image_item" alt="Imagem 3"/>
        </SplideSlide>
      </Splide>
    </div>
  )
}