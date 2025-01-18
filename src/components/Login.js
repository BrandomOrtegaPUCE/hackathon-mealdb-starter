import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin(true);
    } catch (error) {
      alert('Error al iniciar sesión: ' + error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Usuario registrado exitosamente');
      setIsRegistering(false);
    } catch (error) {
      alert('Error al registrarse: ' + error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">{isRegistering ? 'Registro' : 'Login'}</h2>
              <form onSubmit={isRegistering ? handleRegister : handleLogin}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">
                  {isRegistering ? 'Registrarse' : 'Iniciar sesión'}
                </button>
              </form>
              <button
                className="btn btn-link w-100 mt-2"
                onClick={() => setIsRegistering(!isRegistering)}
              >
                {isRegistering ? '¿Ya tienes una cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
