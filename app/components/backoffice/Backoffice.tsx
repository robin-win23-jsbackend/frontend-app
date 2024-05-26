'use client';
import React, { useState } from 'react';
import styles from './Backoffice.module.css';

const Backoffice: React.FC = () => {
    const [title, setTitle] = useState('');
    const [ingress, setIngress] = useState('');
    const [price, setPrice] = useState('');
    const [hours, setHours] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Add your GraphQL create mutation logic here
        console.log({ title, ingress, price, hours, image });
    };

    return (
        <main className={styles.Main}>
            <div className={styles.Container}>
                <div className={styles.AccountDetails}>
                    <h2>Create New Course</h2>
                    <form onSubmit={handleSubmit} className={styles.FormDetails}>
                        <div className={styles.FormPositioning}>
                            <label htmlFor="imageUpload">Upload image</label>
                            <input type="file" id="imageUpload" onChange={handleImageUpload} />
                        </div>
                        <div className={styles.FormPositioning}>
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
                        </div>
                        <div className={styles.FormPositioning}>
                            <label htmlFor="ingress">Ingress</label>
                            <input type="text" id="ingress" value={ingress} onChange={(e) => setIngress(e.target.value)} placeholder="Enter ingress" />
                        </div>
                        <div className={styles.FormPositioning}>
                            <label htmlFor="price">Price</label>
                            <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter price" />
                        </div>
                        <div className={styles.FormPositioning}>
                            <label htmlFor="hours">Hours</label>
                            <input type="text" id="hours" value={hours} onChange={(e) => setHours(e.target.value)} placeholder="Enter hours" />
                        </div>
                        <div className={styles.AccButtons}>
                            <button type="submit" className={styles.BtnPurpleS}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Backoffice;
