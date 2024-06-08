import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../api/api";
import "./ProdutoList.css";

function ProdutoList() {
  const [produtos, setProdutos] = useState([]);

  // Função para lidar com a exclusão de um produto
  const handleDelete = async (produtoId) => {
    try {
      // Faz uma solicitação DELETE para a API para excluir o produto com o ID fornecido
      await api.delete(`/product/${produtoId}/`);

      const updatedProdutos = produtos.filter(
        (produto) => produto.id !== produtoId
      );

      setProdutos(updatedProdutos);
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
    }
  };

  // Efeito useEffect que é executado após a renderização inicial do componente
  useEffect(() => {
    // Faz uma solicitação GET para a API para obter a lista de produtos
    api
      .get(`/product/`)
      .then((response) => {
        // Atualiza o estado dos produtos com os dados recebidos da API
        setProdutos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

  // Retorna a interface do componente ProdutoList
  return (
    <div>
      <div className="header2">
        <h1 className="listaProdutos">Controle de Carrinho</h1>
        <Link to="/product/create" className="create-button">
          Adicionar Carrinho +
        </Link>
      </div>
      <ul className="list">
        {produtos.map((produto) => (
          <li key={produto.id} className="produto-item">
            <Link
              to={`/product/${produto.id}/detail`}
              className="produto-link-name"
            >
              {produto.image}
            </Link>
            <Link
              to={`/product/${produto.id}/detail`}
              className="produto-link-name"
            >
              {produto.name}
            </Link>
            <Link
              to={`/product/${produto.id}/detail`}
              className="produto-link-name"
            >
              {produto.brand}
            </Link>
            <Link
              to={`/product/${produto.id}/detail`}
              className="produto-link-name"
            >
              {produto.category}
            </Link>
            <Link
              to={`/product/${produto.id}/detail`}
              className="produto-link-name"
            >
              {produto.size}
            </Link>
            <Link
              to={`/product/${produto.id}/detail`}
              className="produto-link-name"
            >
              {produto.price}
            </Link>
            <div className="actions">
              <Link to={`/product/${produto.id}/edit`} className="produto-link">
                Editar
              </Link>
              <button
                onClick={() => handleDelete(produto.id)}
                className="delete-button"
              >
                Deletar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Exporta o componente ProdutoList
export default ProdutoList;
