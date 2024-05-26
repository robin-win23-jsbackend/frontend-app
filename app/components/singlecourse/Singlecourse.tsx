import React from 'react';
import styles from './singlecourse.module.css';

const SingleCourse: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <section className={styles.sinCourse}>
        <img id={styles.sCourseImage} src="/images/single-image.svg" alt="image of a laptop with 2 hands" />
        <div className={styles.container}>
          <div className={styles.badges}>
            <p id={styles.sBest}>Best Seller</p>
            <p id={styles.sDigital}>Digital</p>
          </div>
          <div className={styles.sCourseInfo}>
            <h2>Fullstack Web Developer Course from Scratch</h2>
            <p>Egestas feugiat lorem eu neque suspendisse ullamcorper scelerisque aliquam mauris.</p>
          </div>
          <div className={styles.sRating}>
            <p className={styles.sBorder}>
              <i id={styles.starGold} className="fa-solid fa-star"></i>
              <i id={styles.starGold} className="fa-solid fa-star"></i>
              <i id={styles.starGold} className="fa-solid fa-star"></i>
              <i id={styles.starGold} className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              (1.2K reviews)
            </p>
            <p className={styles.sBorder}>
              <i className="fa-regular fa-thumbs-up"></i>
              5K likes
            </p>
            <p>
              <i className="fa-regular fa-clock"></i>
              148 hours
            </p>
          </div>
          <div className={styles.sAuthor}>
            <img src="/images/albertauthor.svg" alt="pic of author" />
            <p id={styles.fatWhite}>Created by</p>
            <p>Albert Flores</p>
          </div>
        </div>
      </section>    

      <section className={styles.courseDescription}>
        <div className={styles.container}>
          <div className={styles.infoCourse}>
            <h2>Course Description</h2>
            <p>Suspendisse natoque sagittis, consequat turpis. Sed tristique tellus morbi magna. At vel senectus accumsan, arcu mattis id tempor. Tellus sagittis, euismod porttitor sed tortor est id. Feugiat velit velit, tortor ut. Ut libero cursus nibh lorem urna amet tristique leo. Viverra lorem arcu nam nunc at ipsum quam. A proin id sagittis dignissim mauris condimentum ornare. Tempus mauris sed dictum ultrices.</p>   
            <div className={styles.courseLearn}>
              <h4>What you'll learn</h4>
              <p> <i className="fa-regular fa-circle-check"></i> Sed lectus donec amet eu turpis interdum. </p>
              <p> <i className="fa-regular fa-circle-check"></i> Nulla at consectetur vitae dignissim porttitor. </p>
              <p> <i className="fa-regular fa-circle-check"></i> Phasellus id vitae dui aliquet mi. </p>
              <p> <i className="fa-regular fa-circle-check"></i> Integer cursus vitae, odio feugiat iaculis aliquet diam, et purus. </p>
              <p> <i className="fa-regular fa-circle-check"></i> In aenean dolor diam tortor orci eu. </p>
            </div>                
          </div>
          <div className={styles.courseInclude}>
            <h4>This course includes:</h4>
            <p> <img src="/images/bx-slideshow.svg" alt="slideshow icon" /> 148 hours on-demand video</p>
            <p> <img src="/images/bx-file.svg" alt="file icon" /> 18 articles</p>
            <p> <img src="/images/bx-download.svg" alt="download icon" /> 25 downloadable resources</p>
            <p> <img src="/images/bx-infinite.svg" alt="infinite icon" /> Full lifetime access</p>
            <p> <img src="/images/bx-trophy.svg" alt="trophy icon" /> Certificate of completion</p>
            <div className={styles.sCoursePrice}>
              <p id={styles.sPrice}>$28.99</p>
              <p id={styles.sOldPrice}>$49.00</p>
            </div>
            <button className={styles.btnPurpleS}>Join Course</button>
          </div>
        </div>
      </section>

      <section className={styles.programDetails}>
        <div className={styles.container}>
          <h2>Program Details</h2>
          <div className={styles.programSteps}>
            <div className={styles.stepsFlex}>
              <img id={styles.stepOfs} src="/images/1.svg" alt="Step 1" />
              <div>
                <h4>Introduction. Getting started</h4>
                <p>Nulla faucibus mauris pellentesque blandit faucibus non. Sit ut et at suspendisse gravida hendrerit tempus placerat.</p>
              </div>
            </div>
            <div className={styles.stepsFlex}>
              <img id={styles.stepTt} src="/images/2.svg" alt="Step 2" />
              <div>
                <h4>The ultimate HTML developer: advanced HTML</h4>
                <p>Lobortis diam elit id nibh ultrices sed penatibus donec. Nibh iaculis eu sit cras ultricies. Nam eu eget etiam egestas donec scelerisque ut ac enim. Vitae ac nisl, enim nec accumsan vitae est.</p>
              </div>
            </div>
            <div className={styles.stepsFlex}>
              <img id={styles.stepTt} src="/images/3.svg" alt="Step 3" />
              <div>
                <h4>CSS & CSS3: basic</h4>
                <p>Duis euismod enim, facilisis risus tellus pharetra lectus diam neque. Nec ultrices mi faucibus est. Magna ullamcorper potenti elementum ultricies auctor nec volutpat augue.</p>
              </div>
            </div>
            <div className={styles.stepsFlex}>
              <img id={styles.stepOfs} src="/images/4.svg" alt="Step 4" />
              <div>
                <h4>JavaScript basics for beginners</h4>
                <p>Morbi porttitor risus imperdiet a, nisl mattis. Amet, faucibus eget in platea vitae, velit, erat eget velit. At lacus ut proin erat.</p>
              </div>
            </div>
            <div className={styles.stepsFlex}>
              <img id={styles.step5} src="/images/5.svg" alt="Step 5" />
              <div>
                <h4>Understanding APIs</h4>
                <p>Risus morbi euismod in congue scelerisque fusce pellentesque diam consequat. Nisi mauris nibh sed est morbi amet arcu urna. Malesuada feugiat quisque consectetur elementum diam vitae. Dictumst facilisis odio eu quis maecenas risus odio fames bibendum.</p>
              </div>
            </div>
            <div className={styles.stepsFlex}>
              <img id={styles.stepOfs} src="/images/6.svg" alt="Step 6" />
              <div>
                <h4>Python from beginner to advanced</h4>
                <p>Quis risus quisque diam diam. Volutpat neque eget eu faucibus sed urna fermentum risus. Est, mauris morbi nibh massa.</p>
              </div>
            </div>
            <img id={styles.sDiv} src="/images/steps-divider.svg" alt="steps divider" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleCourse;
