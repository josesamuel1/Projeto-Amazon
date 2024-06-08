
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="box container">
        <form>
          <h1 className="logo">Estoque Center</h1>
          <p className="register_title">Registre-se</p>

          <div className="email">
            <input
              type="email"
              placeholder="E-mail"
            />
          </div>

          <div className="password">
            <input
              type="password"
              placeholder="Senha"
            />
          </div>

          <div className="sign_in">
            <p>
              Já tem uma conta? <a className="login_button" href="/login">Logue agora.</a>
            </p>
            <a className="register_button" href="/login">Registrar</a>
          </div>
        </form>
      </div>
    </div>
  );
}
