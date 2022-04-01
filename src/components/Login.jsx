import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

import styles from './styles.module.css';

const Login = () => {
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    localStorage.setItem('@google_user', JSON.stringify(response.profileObj));

    const { name, googleId, imageUrl } = response.profileObj;

    const doc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl,
    };

    console.log(doc);

    navigate('/', { replace: true });
  };

  return (
    <div className={styles.loginBoxWrapper}>
      <h1>Login</h1>

      <GoogleLogin
        clientId="90248417657-u6t72ervqateh93ruk93uq54v7rfimaj.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            type="button"
            className={styles.buttonLogin}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <FcGoogle className="mr-4" /> Entrar com Google
          </button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Login;
