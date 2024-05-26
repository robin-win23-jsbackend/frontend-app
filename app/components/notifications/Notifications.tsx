import styles from './Notifications.module.css';
import Link from 'next/link';

const Notifications: React.FC = () => {
  return (
    <main>
      <div className={styles.container}>
        <aside className={styles.accountProfile}>
          <div className={styles.accProfileInfo}>
            <img src="/images/profilepic.svg" alt="profile picture" />
            <button id="acc-btn-1" className={styles.btnWhiteS}>
              <i className="fa-solid fa-arrows-rotate"></i>
            </button>
            <h4>John Doe</h4>
            <p>john.doe@domain.com</p>
          </div>

          <div className={styles.accBtnsDetails}>
            <Link href="/account/">
              <p>
                <i className="fa-solid fa-gear"></i> Account Details
              </p>
            </Link>
            <Link href="#">
              <p>
                <i className="fa-solid fa-lock"></i> Security
              </p>
            </Link>
            <Link href="/notifications/notifications">
              <button className={styles.btnPurpleS}>
                <i className="fa-solid fa-bell"></i> Notifications
              </button>
            </Link>
            <Link href="#">
              <p>
                <i className="fa-solid fa-message"></i> Messages
              </p>
            </Link>
            <Link href="#">
              <p>
                <i className="fa-solid fa-bookmark"></i> Saved Items
              </p>
            </Link>
            <Link href="/home/index">
              <p>
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Sign Out
              </p>
            </Link>
          </div>
        </aside>

        <div className={styles.notifications}>
          <h2>Notifications</h2>
          <div className={styles.emailNotify}>
            <p>Preferred email for notifications</p>
            <input type="email" placeholder="john.doe@domain.com" />
          </div>
          <div className={styles.subNotify}>
            <label className={styles.notiSliders}>
              <input type="checkbox" />
              <span className={styles.sliderRound}></span>
            </label>
            <div className={styles.notifySliderText}>
              <h6>Subscribe to Newsletter</h6>
              <p>
                Nec, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque ullamcorper.
              </p>
            </div>
          </div>
          <div className={styles.subNotify}>
            <label className={styles.notiSliders}>
              <input type="checkbox" />
              <span className={styles.sliderRound}></span>
            </label>
            <div className={styles.notifySliderText}>
              <h6>Use Dark Mode Theme in Application</h6>
              <p>Tortor massa porttitor enim tristique neque fermentum sed.</p>
            </div>
          </div>

          <div className={styles.accButtons}>
            <button className={styles.btnWhiteS}>Cancel</button>
            <button className={styles.btnPurpleS}>Save changes</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Notifications;
