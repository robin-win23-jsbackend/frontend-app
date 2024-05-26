import React from 'react';
import Backoffice from '../components/backoffice/Backoffice'; // Justera importvägen för Backoffice-komponenten
import styles from '../components/backoffice/Backoffice.module.css'; // Justera importvägen för CSS-modulen

const BackofficePage: React.FC = () => {
    return (
        <div className={styles.Main}>
            <Backoffice />
        </div>
    );
};

export default BackofficePage;
