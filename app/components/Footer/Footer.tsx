import styles from './Footer.module.css';

export default function Footer() {
    console.log("Rendering Footer");
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.socialMedias}>
                    <a className='btn btn-social' href="#"><i className="fa-brands fa-square-facebook"></i></a>
                    <a className='btn btn-social' href="#"><i className="fa-brands fa-square-x-twitter"></i></a>
                    <a className='btn btn-social' href="#"><i className="fa-brands fa-square-instagram"></i></a>
                    <a className='btn btn-social' href="#"><i className="fa-brands fa-youtube"></i></a>
                </div>
                <p>© 2024 Silicon. All rights reserved. Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse</p>
                <p className={styles.footerRights}>viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.</p>
            </div>
        </footer> 
    );
}
