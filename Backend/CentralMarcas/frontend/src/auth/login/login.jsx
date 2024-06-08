import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import api from '../../api/api'

import "./login.css";

export default function Login() {
  // Define estados para o nome de usuário e senha
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Obtém a função de navegação do hook useNavigate
  const navigate = useNavigate();

  // Função para lidar com o envio do formulário de login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Faz uma solicitação POST para a API para obter o token de acesso
      const response = await api.post(`/authentication/token/`, { email, password });

      // Armazena o token de acesso no localStorage
      localStorage.setItem("token", response.data.access);
      
      // Redireciona para a página de listagem de posts após o login bem-sucedido
      navigate("/inicio/");
    } catch (error) {
      // Registra qualquer erro ocorrido ao fazer login
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="login margin_zero">
      <div className="box container">
        <form onSubmit={handleSubmit}>
          <h1 className="logo">Estoque Center</h1>
          <p className="login_title">Faça login</p>

          <div className="email">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="password">
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="sign_in">
            <p>
              Ainda não tem uma conta? <a href="/register">Crie uma conta.</a>
            </p>
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
