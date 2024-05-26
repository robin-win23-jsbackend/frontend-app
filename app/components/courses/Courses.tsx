import Link from 'next/link';
import Image from 'next/image';
import styles from './Courses.module.css';

const Courses: React.FC = () => (
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
                    <div className={styles.CourseLine}>
                        <p className={styles.BestSellers2}>Best Seller</p>
                        <Image src="/images/course1-1.svg" alt="image of first course" width={500} height={500} />
                        <div className={styles.CourseText1}>
                            <h5>Fullstack Web Developer Course from Scratch</h5>
                            <p className={styles.AuthorText}>By Robert Fox</p>
                            <p className={styles.PurpleCourseText}>$12.50</p>
                            <Image src="/images/divider.svg" alt="a divider for texts" width={500} height={500} />
                            <div className={styles.CourseHours}>
                                <p><i className="fa-regular fa-clock"></i> 220 hours</p>
                                <p id={styles.PositionThumbs}><i className="fa-regular fa-thumbs-up"></i> 94% (4.2K)</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.CourseLine}>
                        <Image src="/images/course1-2.svg" alt="image of second course" width={500} height={500} />
                        <div className={styles.CourseText1}>
                            <h5>HTML, CSS, JavaScript Web Developer</h5>
                            <p className={styles.AuthorText}>By Jenny Wilson & Marvin McKinney</p>
                            <p className={styles.PurpleCourseText}>$15.99</p>
                            <Image src="/images/divider.svg" alt="a divider for texts" width={500} height={500} />
                            <div className={styles.CourseHours}>
                                <p><i className="fa-regular fa-clock"></i> 160 hours</p>
                                <p id={styles.PositionThumbs}><i className="fa-regular fa-thumbs-up"></i> 92% (3.1K)</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.CourseLine}>
                        <Image src="/images/course1-3.svg" alt="image of third course" width={500} height={500} />
                        <div className={styles.CourseText1}>
                            <h5>The Complete Front-End Web Development Course</h5>
                            <p className={styles.AuthorText}>By Albert Flores</p>
                            <p className={styles.RedCourseText}>$9.99</p>
                            <p className={styles.OrgPrice}>$44.99</p>
                            <Image src="/images/divider.svg" alt="a divider for texts" width={500} height={500} />
                            <div className={styles.CourseHours}>
                                <p><i className="fa-regular fa-clock"></i> 100 hours</p>
                                <p id={styles.PositionThumbs}><i className="fa-regular fa-thumbs-up"></i> 98% (2.7K)</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.CourseLine}>
                        <Image src="/images/course2-1.svg" alt="image of fourth course" width={500} height={500} />
                        <div className={styles.CourseText1}>
                            <h5>iOS & Swift - The Complete iOS App Development Course</h5>
                            <p className={styles.AuthorText}>By Marvin McKinney</p>
                            <p className={styles.PurpleCourseText}>$15.99</p>
                            <Image src="/images/divider.svg" alt="a divider for texts" width={500} height={500} />
                            <div className={styles.CourseHours}>
                                <p><i className="fa-regular fa-clock"></i> 160 hours</p>
                                <p id={styles.PositionThumbs}><i className="fa-regular fa-thumbs-up"></i> 92% (3.1K)</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.CourseLine}>
                        <p className={styles.BestSellers}>Best Seller</p>
                        <Image src="/images/course2-2.svg" alt="image of fifth course" width={500} height={500} />
                        <div className={styles.CourseText1}>
                            <h5>Data Science & Machine Learning with Python</h5>
                            <p className={styles.AuthorText}>By Esther Howard</p>
                            <p className={styles.PurpleCourseText}>$11.20</p>
                            <Image src="/images/divider.svg" alt="a divider for texts" width={500} height={500} />
                            <div className={styles.CourseHours}>
                                <p><i className="fa-regular fa-clock"></i> 160 hours</p>
                                <p id={styles.PositionThumbs}><i className="fa-regular fa-thumbs-up"></i> 92% (3.1K)</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.CourseLine}>
                        <Image src="/images/course2-3.svg" alt="image of sixth course" width={500} height={500} />
                        <div className={styles.CourseText1}>
                            <h5>Creative CSS Drawing Course: Make Art With CSS</h5>
                            <p className={styles.AuthorText}>By Robert Fox</p>
                            <p className={styles.PurpleCourseText}>$10.50</p>
                            <Image src="/images/divider.svg" alt="a divider for texts" width={500} height={500} />
                            <div className={styles.CourseHours}>
                                <p><i className="fa-regular fa-clock"></i> 220 hours</p>
                                <p id={styles.PositionThumbs}><i className="fa-regular fa-thumbs-up"></i> 94% (4.2K)</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.CourseLine}>
                        <Image src="/images/course3-1.svg" alt="image of seventh course" width={500} height={500} />
                        <div className={styles.CourseText1}>
                            <h5>Blender Character Creator v2.0 for Video Games Design</h5>
                            <p className={styles.AuthorText}>By Ralph Edwards</p>
                            <p className={styles.PurpleCourseText}>$18.99</p>
                            <Image src="/images/divider.svg" alt="a divider for texts" width={500} height={500} />
                            <div className={styles.CourseHours}>
                                <p><i className="fa-regular fa-clock"></i> 160 hours</p>
                                <p id={styles.PositionThumbs}><i className="fa-regular fa-thumbs-up"></i> 92% (3.1K)</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.CourseLine}>
                        <Image src="/images/course3-2.svg" alt="image of eight course" width={500} height={500} />
                        <div className={styles.CourseText1}>
                            <h5>The Ultimate Guide to 2D Mobile Game Development with Unity</h5>
                            <p className={styles.AuthorText}>By Albert Flores</p>
                            <p className={styles.RedCourseText}>$12.99</p>
                            <p className={styles.OrgPrice2}>$44.99</p>
                            <Image src="/images/divider.svg" alt="a divider for texts" width={500} height={500} />
                            <div className={styles.CourseHours}>
                                <p><i className="fa-regular fa-clock"></i> 100 hours</p>
                                <p id={styles.PositionThumbs}><i className="fa-regular fa-thumbs-up"></i> 98% (2.7K)</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.CourseLine}>
                        <Image src="/images/course3-3.svg" alt="image of ninth course" width={500} height={500} />
                        <div className={styles.CourseText1}>
                            <h5>Learn JMETER from Scratch on Live Apps-Performance Testing</h5>
                            <p className={styles.AuthorText}>By Jenny Wilson</p>
                            <p className={styles.PurpleCourseText}>$14.50</p>
                            <Image src="/images/divider.svg" alt="a divider for texts" width={500} height={500} />
                            <div className={styles.CourseHours}>
                                <p><i className="fa-regular fa-clock"></i> 160 hours</p>
                                <p id={styles.PositionThumbs}><i className="fa-regular fa-thumbs-up"></i> 92% (3.1K)</p>
                            </div>
                        </div>
                    </div>
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

export default Courses;
