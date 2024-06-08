import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import api from "../../api/api";
import "./ProdutoRead.css";

function ProdutoRead() {
  const { produtoId } = useParams();
  
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    // Carrega os detalhes do produto
    api
      .get(`/product/${produtoId}/`)
      .then((response) => {
        setId(response.data.id);
        setName(response.data.name);
        setBrand(response.data.brand);
        setCategory(response.data.category);
        setSize(response.data.size);
        setPrice(response.data.price);
        setImage(response.data.image);
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes do produto:", error);
      });
  }, [produtoId]);

  return (
    <div className="read-carrinho-container">
      <h1>Detalhes do Carrinho</h1>
      <Link to="/product">
        <button type="button" className="back-button">
          Voltar para Listagem
        </button>
      </Link>
      <h1>Produto {id}</h1>
      <h2>Nome: {name}</h2>
      <p>Marca: {brand}</p>
      <p>Categoria: {category}</p>
      <p>Tamanho: {size}</p>
      <p>Preço: {price}</p>
      <p>Imagem: {image}</p>
    </div>
  );
}

// Exporta o componente ProdutoRead
export default ProdutoRead;
