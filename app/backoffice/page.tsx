import React from 'react';
import Backoffice from '../components/backoffice/Backoffice';
import styles from '../components/backoffice/Backoffice.module.css';

const BackofficePage: React.FC = () => {
    return (
        <div className={styles.Main}>
            <Backoffice />
        </div>
    );
};

export default BackofficePage;
