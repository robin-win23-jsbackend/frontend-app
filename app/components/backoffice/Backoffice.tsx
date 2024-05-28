"use client";
import React, { useState } from "react";
import styles from "./Backoffice.module.css";

const Backoffice: React.FC = () => {
  const [title, setTitle] = useState("");
  const [ingress, setIngress] = useState("");
  const [price, setPrice] = useState("");
  const [hours, setHours] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const CREATE_COURSE_MUTATION = `
          mutation CreateCourse($input: CreateCourseInput!) {
            createCourse(input: $input) {
              id
              title
            }
          }
        `;

    const input = {
      title,
      ingress,
      price: parseFloat(price),
      hours: parseInt(hours),
      imageUrl: image ? URL.createObjectURL(image) : null,
    };

    try {
      const response = await fetch("https://localhost:7156/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: CREATE_COURSE_MUTATION,
          variables: { input },
        }),
      });

      const result = await response.json();
      if (result.data && result.data.createCourse) {
        setMessage("Course created successfully!");
      } else {
        setMessage("Failed to create course.");
      }
    } catch (error) {
      console.error("Error creating course:", error);
      setMessage("Error creating course.");
    }
  };

  return (
    <main className={styles.Main}>
      <div className={styles.Container}>
        <div className={styles.AccountDetails}>
          <h2>Create New Course</h2>
          <form onSubmit={handleSubmit} className={styles.FormDetails}>
            <div className={styles.FormPositioning}>
              <label htmlFor="imageUpload">Upload image</label>
              <input
                type="file"
                id="imageUpload"
                onChange={handleImageUpload}
              />
            </div>
            <div className={styles.FormPositioning}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
              />
            </div>
            <div className={styles.FormPositioning}>
              <label htmlFor="ingress">Ingress</label>
              <input
                type="text"
                id="ingress"
                value={ingress}
                onChange={(e) => setIngress(e.target.value)}
                placeholder="Enter ingress"
              />
            </div>
            <div className={styles.FormPositioning}>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price"
              />
            </div>
            <div className={styles.FormPositioning}>
              <label htmlFor="hours">Hours</label>
              <input
                type="text"
                id="hours"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                placeholder="Enter hours"
              />
            </div>
            <div className={styles.AccButtons}>
              <button type="submit" className={styles.BtnPurpleS}>
                Save
              </button>
            </div>
          </form>
          {message && (
            <p
              style={{
                color: message.includes("successfully") ? "green" : "red",
              }}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Backoffice;
