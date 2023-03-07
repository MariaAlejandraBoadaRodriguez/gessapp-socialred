import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { auth } from '../firebase';

export default function Header() {
  const [error, setError] = useState('');
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error);
      setError('Error al cerrar sesión');
    }
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <img src="logo.png" alt="Logo" />
        </Link>
        {currentUser ? (
          <div>
            <Link to="/posts">Posts</Link>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
        ) : (
          <Link to="/login">Iniciar sesión</Link>
        )}
      </nav>
      {error && <div>{error}</div>}
    </header>
  );
}
