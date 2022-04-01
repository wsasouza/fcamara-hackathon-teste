import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';
import { GoogleLogout } from 'react-google-login';

import { fetchUser } from '../utils/fetchUser';

import styles from './styles.module.css';

const Home = () => {
  const navigate = useNavigate();

  const user = fetchUser();
  console.log(user);

  const logout = () => {
    localStorage.clear();

    navigate('/login');
  };

  return (
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
        <h1>E-mail, {user.email}</h1>
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
  );
};

export default Home;
