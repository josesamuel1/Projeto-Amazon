// Este código define um componente chamado AppRouter que representa as rotas da aplicação. Ele utiliza o Router do React Router para envolver a aplicação e fornecer a navegação baseada em rotas. As rotas são definidas dentro do componente Routes.

// Importa os componentes necessários do react-router-dom e os componentes da aplicação
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from "./auth/login/login"
import Register from "./auth/register/register"
import Inicio from "./componentes/inicio/inicio"

import ProdutoList from './componentes/ProdutoList/ProdutoList'
import ProdutoEdit from './componentes/ProdutoEdit/ProdutoEdit'
import CreatePost from './componentes/ProdutoEdit/ProdutoEdit'
import ProdutoRead from './componentes/ProdutoRead/ProdutoRead'

import PrivateRoute from "./componentes/PrivateRoute"

// Define o componente AppRouter que contém as rotas da aplicação
function AppRouter() {
  return (
    // Define o componente Router para envolver a aplicação e fornecer navegação baseada em rotas
    <Router>

      {/* Define as rotas da aplicação */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route element={<PrivateRoute />}>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/product" element={<ProdutoList />} />
          <Route path="/product/create" element={<CreatePost />} />
          <Route path="/product/:produtoId/edit" element={<ProdutoEdit />} />
          <Route path="/product/:produtoId/detail" element={<ProdutoRead />} />
        </Route>
      </Routes>
    </Router>
  )
}

// Exporta o componente AppRouter
export default AppRouter
