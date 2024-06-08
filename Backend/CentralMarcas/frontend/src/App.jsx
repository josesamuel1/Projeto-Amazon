// Importa o componente AppRouter, que contém as definições das rotas da aplicação.
import AppRouter from './Router'
import "./App.css"

// Define o componente principal da aplicação, App.
function App() {
  return (
    // Renderiza o componente AppRouter, que contém todas as rotas da aplicação.
    <div>
      <AppRouter />
    </div>
  )
}

// Exporta o componente App.
export default App
