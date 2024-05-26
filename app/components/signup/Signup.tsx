import styles from './Signup.module.css';
import Link from 'next/link';

const Signup: React.FC = () => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.createAccText}>
          <h2>Create Account</h2>
          <p>
            Already have an account? <Link legacyBehavior href="/signin/signin"><a>Sign in here.</a></Link>
          </p>
        </div>
        <div className={styles.creatingAcc}>
          <div className={styles.firstLastName}>
            <div>
              <p>First name</p>
              <input className={styles.inputValidationError} type="text" placeholder="Enter your first name" />
            </div>
            <div>
              <p>Last name</p>
              <input className={styles.inputValidationError} type="text" placeholder="Enter your last name" />
            </div>
          </div>
          <div className={styles.emailPassConf}>
            <div>
              <p>Email address</p>
              <input className={styles.inputValidationError} type="email" placeholder="Enter your email address" />
            </div>
            <div>
              <p>Password</p>
              <input className={styles.inputValidationError} type="password" placeholder="********" />
            </div>
            <div>
              <p>Confirm password</p>
              <input className={styles.inputValidationError} type="password" placeholder="********" />
            </div>
          </div>
        </div>
        <div className={styles.acceptTnc}>
          <input className={styles.inputValidationError} type="checkbox" />
          <p>
            I agree to the <Link legacyBehavior href="/terms"><a>Terms</a></Link> & <Link legacyBehavior href="/conditions"><a>Conditions</a></Link>.
          </p>
        </div>
        <Link legacyBehavior href="/account/account">
          <button className={styles.btnPurpleS}>Sign up</button>
        </Link>
      </div>
    </main>
  );
};

export default Signup;
