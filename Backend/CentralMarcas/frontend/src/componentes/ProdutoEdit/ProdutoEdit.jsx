import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import api from "../../api/api";
import "./ProdutoEdit.css";

function ProdutoEdit() {
  const navigate = useNavigate();
  
  const { produtoId } = useParams();
  
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");

  // Efeito useEffect que é executado sempre que o produtoId é alterado
  useEffect(() => {
    if (!produtoId) return;

    // Carrega os detalhes do produto com base no produtoId fornecido
    api
      .get(`/product/${produtoId}/`)
      .then((response) => {
        // Atualiza os estados com os detalhes do produto recebidos da API
        setName(response.data.name);
        setBrand(response.data.brand);
        setCategory(response.data.category);
        setSize(response.data.size);
        setPrice(response.data.price);
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes do produto:", error);
      });
  }, [produtoId]);

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("brand", brand);
      formData.append("category", category);
      formData.append("size", size);
      formData.append("price", price);

      if (produtoId) {
        await api.put(`/product/${produtoId}/`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Produto atualizado com sucesso!");
      } else {
        await api.post(`/product/`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      navigate("/product");
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
    }
  };

  // Retorna a interface do componente ProdutoEdit
  return (
    <div className="edit-produto-container">
      <div className="container">
        <h1 className="title">
          {produtoId ? "Editar Produto" : "Adicionar Novo Produto"}
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Marca"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <input
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <select
            className="select"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="">Selecione o tamanho</option>
            <option value="PP">PP</option>
            <option value="P">P</option>
            <option value="M">M</option>
            <option value="G">G</option>
            <option value="GG">GG</option>
            <option value="XG">XG</option>
          </select>
          <input
            type="number"
            step="0.01"
            placeholder="Preço"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <button className="save-button" type="submit">
            {produtoId ? "Salvar" : "Criar"}
          </button>

          <Link to="/product">
            <button type="button" className="back-button">
              Voltar para Listagem
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

// Exporta o componente ProdutoEdit
export default ProdutoEdit;
