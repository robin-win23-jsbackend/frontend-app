import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Account.module.css';

const Account: React.FC = () => {
  return (
    <main className={styles.Main}>
      <div className={styles.Container}>
        <aside className={styles.AccountProfile}>
          <div className={styles.AccProfileInfo}>
            <Image src="/images/profilepic.svg" alt="profile picture" width={50} height={50} />
            <button id="acc-btn-1" className={styles.BtnWhiteS}><i className="fa-solid fa-arrows-rotate"></i></button>
            <h4>John Doe</h4>
            <p>john.doe@domain.com</p>
          </div>
          
          <div className={styles.AccBtnsDetails}>
            <Link href="/account/">
              <button className={styles.BtnPurpleS}><i className="fa-solid fa-gear"></i> Account Details</button>
            </Link>
            <Link href="#">
              <p><i className="fa-solid fa-lock"></i> Security</p>
            </Link>
            <Link href="/notifications">
              <p><i className="fa-solid fa-bell"></i> Notifications</p>
            </Link>
            <Link href="#">
              <p><i className="fa-solid fa-message"></i> Messages</p>
            </Link>
            <Link href="#">
              <p><i className="fa-solid fa-bookmark"></i> Saved Items</p>
            </Link>
            <Link href="/home/index.html">
              <p><i className="fa-solid fa-arrow-right-from-bracket"></i> Sign Out</p>
            </Link>
          </div>
        </aside>

        <div className={styles.AccountDetails}>
          <h2>Account Details</h2>
          <div className={styles.BasicInfo}>
            <h6>Basic Info</h6>
            <div className={styles.FormDetails}>
              <div>
                <p>First name</p>
                <input type="text" placeholder="John" />
              </div>
              <div>
                <p>Last name</p>
                <input type="text" placeholder="Doe" />
              </div>
              <div className={styles.FormPositioning}>
                <p>Email address</p>
                <input type="email" placeholder="john.doe@domain.com" />
              </div>
              <div className={styles.FormPositioning}>
                <p>Phone (optional)</p>
                <input type="number" placeholder="Enter your phone" />
              </div>
              <div className={styles.FormPositioning2}>
                <p>Biography (optional)</p>
                <textarea placeholder="Add a short bio..." />
              </div>
            </div>
            <div className={styles.AccButtons}>
              <button className={styles.BtnWhiteS}>Cancel</button>
              <button className={styles.BtnPurpleS}>Save changes</button>
            </div>
          </div>

          <div className={styles.AccAddress}>
            <h6>Address</h6>
            <div>
              <p>Address line 1</p>
              <input className={styles.AddressInput} type="text" placeholder="Enter your address line" />
            </div>
            <div className={styles.AddressPadding}>
              <p>Address line 2 (optional)</p>
              <input className={styles.AddressInput} type="text" placeholder="Enter your second address line" />
            </div>
            <div className={styles.FormDetails2}>
              <div>
                <p>Postal code</p>
                <input type="text" placeholder="Enter your postal code" />
              </div>
              <div>
                <p>City</p>
                <input type="text" placeholder="Enter your city" />
              </div>
            </div>
            <div className={styles.AccButtons}>
              <button className={styles.BtnWhiteS}>Cancel</button>
              <button className={styles.BtnPurpleS}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Account;
