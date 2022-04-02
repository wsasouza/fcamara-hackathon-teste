import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';
import { GoogleLogout } from 'react-google-login';

import { fetchUser } from '../utils/fetchUser';

import styles from './styles.module.css';

const userInfo = fetchUser();

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  console.log(user);

  if (!user) {
    navigate('/login');
  }

  useEffect(() => {
    setUser(userInfo);
  }, [userInfo]);

  const logout = () => {
    localStorage.clear();

    navigate('/login');
  };

  return (
    <>
      {user ? (
        <div className={styles.container}>
          <div>
            <img
              className={styles.banner}
              src="https://source.unsplash.com/1600x900/?nature,photography,technology"
              alt="banner-pic"
            />
          </div>
          <div>
            <h1>Olá, {user.name}</h1>
            <h1>E-mail: {user.email}</h1>
            <img classname={styles.photo} src={user.imageUrl} alt="user-pic" />
            <GoogleLogout
              clientId="90248417657-u6t72ervqateh93ruk93uq54v7rfimaj.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  type="button"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <AiOutlineLogout color="red" fontSize={28} />
                </button>
              )}
              onLogoutSuccess={logout}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
      ) : (
        <h1>Não consegui recuperar suas credenciais</h1>
      )}
    </>
  );
};

export default Home;
