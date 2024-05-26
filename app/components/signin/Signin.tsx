import styles from './Signin.module.css';
import Link from 'next/link';

const Signin: React.FC = () => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.signinText}>
          <h2>Welcome Back</h2>
          <p>
            Don't have an account yet? <Link legacyBehavior href="/signup/signup"><a>Sign up here</a></Link>
          </p>
        </div>
        <div className={styles.signinForm}>
          <div>
            <p>Email</p>
            <input type="email" placeholder="Enter your email address" />
          </div>
          <div className={styles.signinPassword}>
            <p>Password</p>
            <input type="password" placeholder="********" />
          </div>
        </div>
        <div className={styles.rembmeCheckbox}>
          <input type="checkbox" />
          <p>Remember me</p>
        </div>
        <div className={styles.signinButtons}>
          <Link legacyBehavior href="/account/account">
            <button className={styles.btnPurpleS}>Sign in</button>
          </Link>
          <p>
            <Link legacyBehavior href="/NewPassword"><a>Forgot your password?</a></Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Signin;
