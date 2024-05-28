'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Courses.module.css';

const Courses: React.FC = () => {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState<string | null>(null);

    const GET_COURSES_QUERY = `
      query {
        courses {
          id
          title
          ingress
          price
          hours
          imageUrl
        }
      }
    `;

    const fetchCourses = async () => {
        try {
            const response = await fetch('https://localhost:7156/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: GET_COURSES_QUERY,
                }),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                console.error('Failed to fetch courses:', errorMessage);
                setError('Failed to fetch courses');
                return;
            }

            const result = await response.json();
            console.log(result);
            if (result.data && result.data.courses) {
                setCourses(result.data.courses);
            } else {
                console.error('Unexpected response format:', result);
                setError('Unexpected response format');
            }
        } catch (error) {
            console.error('Error fetching courses:', error);
            setError('Error fetching courses');
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <main className={styles.wrapper}>
            <section className={styles.MainHeader}>
                <div className={styles.Container}>
                    <p>
                        <Link legacyBehavior href="/home/index.html">
                            <a className={styles.HomeNav}><i className="fa-solid fa-house"></i> Home</a>
                        </Link>
                        <i id={styles.ArrowsRight} className="fa-solid fa-angles-right"></i>
                        <Link legacyBehavior href="courses.html">
                            <a className={styles.CoursesNav}>Courses</a>
                        </Link>
                    </p>
                    <div className={styles.CoursesHead}>
                        <h2>Courses</h2>
                        <div className={styles.CourseHeadInfo}>
                            <input className={styles.CategoryCourse} type="text" placeholder="All categories" />
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div className={styles.CourseHeadInfo}>
                            <input className={styles.SearchCourse} type="text" placeholder="Search courses" />
                            <i id={styles.MagGlass} className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.CourseCards}>
                <div className={styles.Container}>
                    <div className={styles.AllCourses}>
                        {error ? (
                            <p style={{ color: 'red' }}>{error}</p>
                        ) : (
                            courses.map((course: any) => (
                                <div key={course.id} className={styles.CourseLine}>
                                    <p className={styles.BestSellers2}>{course.bestSeller ? 'Best Seller' : ''}</p>
                                    <Image src="/images/default-course-image.svg" alt={`image of ${course.title}`} width={500} height={500} />
                                    <div className={styles.CourseText1}>
                                        <h5>{course.title}</h5>
                                        <p className={styles.AuthorText}>By {course.ingress}</p>
                                        <p className={styles.PurpleCourseText}>${course.price.toFixed(2)}</p>
                                        <Image src="/images/divider.svg" alt="a divider for texts" width={500} height={500} />
                                        <div className={styles.CourseHours}>
                                            <p><i className="fa-regular fa-clock"></i> {course.hours} hours</p>
                                            <p id={styles.PositionThumbs}><i className="fa-regular fa-thumbs-up"></i> 94% (4.2K)</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className={styles.Pagination}>
                        <p><i className="fa-solid fa-chevron-left"></i></p>
                        <p>1</p>
                        <p className={styles.NumberGray}>2</p>
                        <p className={styles.NumberPurple}>3</p>
                        <p>4</p>
                        <p><i className="fa-solid fa-chevron-right"></i></p>
                    </div>
                </div>
            </section>

            <section className={styles.Banner}>
                <div className={styles.Container}>
                    <div className={styles.BannerText}>
                        <p>Ready to get started?</p>
                        <h2>Take Your</h2>
                        <h2 className={styles.PurpleBanner}>Skills</h2>
                        <h2 className={styles.NormalBanner}>to the</h2>
                        <h2>Next Level</h2>
                        <button className={styles.BtnPurpleS}>Work with us</button>
                    </div>
                    <Image src="/images/bannerimage.svg" alt="image of an animated woman with a laptop" width={500} height={500} />
                </div>
            </section>
        </main>
    );
};

export default Courses;
