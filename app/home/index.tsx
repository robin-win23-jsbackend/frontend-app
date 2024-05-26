import styles from './index.module.css';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className={styles.wrapper}>
      {/* Management section */}
      <section className={styles.management}>
        <div className={styles.container}>
          <div className={styles.headerText}>
            <h2>Task Management Assistant You Gonna Love</h2>
            <p className={styles.headerP}>We offer you a new generation of task management system.</p>
            <p className={styles.headerPP}>Plan, manage & track all your tasks in one flexible tool.</p>
            <Link href="/signup.html"><button className={styles.btnPurpleS}>Get started for free</button></Link>
            <p className={styles.taskText}>Largest companies use our tool to work efficiently</p>
            <div>
              <img src="/images/logo1.svg" alt="logipsum logo" />
              <img className={styles.logo2} src="/images/logo2.svg" alt="logipsum logo" />
              <img className={styles.logo3} src="/images/logo3.svg" alt="logipsum logo" />
              <img className={styles.logo1} src="/images/logo4.svg" alt="logipsum logo" />
            </div>
            <img className={styles.headerImage} src="/images/headerimage.svg" alt="image of a dashboard" />
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className={styles.benefits}>
        <div className={styles.container}>
          <div className={styles.benefitsText}>
            <h2>What Do You Get With Our Tool?</h2>
            <p>Make sure all your tasks are organized so you can set the priorities and focus</p>
            <p className={styles.benefSubtext}>on important.</p>
          </div>
          <div className={styles.iconContent}>
            <div className={styles.iconBox1}>
              <img src="/images/icon1.svg" alt="" />
              <h6>Comments on Tasks</h6>
              <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
            </div>
            <div className={styles.iconBox2}>
              <img src="/images/icon2.svg" alt="" />
              <h6>Task Analytics</h6>
              <p>Non imperdiet facilisis nulla tellus Morbi scelerisque eget adipiscing vulputate.</p>
            </div>
            <div className={styles.iconBox3}>
              <img src="/images/icon3.svg" alt="" />
              <h6>Multiple Assignees</h6>
              <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
            </div>
            <div className={styles.iconBox4}>
              <img src="/images/icon4.svg" alt="" />
              <h6>Notifications</h6>
              <p>Diam, suspendisse velit cras ac. Lobortis diam volutpat, eget pellentesque viverra.</p>
            </div>
            <div className={styles.iconBox5}>
              <img src="/images/icon5.svg" alt="" />
              <h6>Sections & Subtasks</h6>
              <p>Mi feugiat hac id in. Sit elit placerat lacus nibh lorem ridiculus lectus.</p>
            </div>
            <div className={styles.iconBox6}>
              <img src="/images/icon6.svg" alt="" />
              <h6>Data Security</h6>
              <p>Aliquam malesuada neque eget elit nulla vestibulum nunc cras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slider section */}
      <section className={styles.sliderSection}>
        <div className={styles.container}>
          <div className={styles.textSides}>
            <h2 className={styles.darkSide}>Switch Between</h2>
            <h2 className={styles.lightSide}>Light & Dark Mode</h2>
          </div>
          <div className={styles.btnNLine}>
            <button className={styles.btnPurpleS}><i className="fa-solid fa-arrows-left-right"></i></button>
            <img src="/images/light&darkline.svg" alt="a straight line" />
          </div>
          <img src="/images/computer.svg" alt="a laptop" />
        </div>
      </section>

      {/* Content section */}
      <section className={styles.content}>
        <div className={styles.container}>
          <img src="/images/imagecontent.svg" alt="pic of a dashboard" />
          <div className={styles.manageWorkText}>
            <h3>Manage Your Work</h3>
            <p><i className="fa-regular fa-circle-check"></i> Powerful project management</p>
            <p><i className="fa-regular fa-circle-check"></i> Transparent work management</p>
            <p><i className="fa-regular fa-circle-check"></i> Manage work & focus on most important tasks</p>
            <p><i className="fa-regular fa-circle-check"></i> Track your progress with interactive charts</p>
            <p><i className="fa-regular fa-circle-check"></i> Easiest way to track time spent on tasks</p>
            <Link href="/courses.html"><button className={styles.btnPurpleS}>Learn more <i className="fa-solid fa-arrow-right"></i></button></Link>
          </div>
        </div>
      </section>

      {/* Apps section */}
      <section className={styles.phoneApps}>
        <div className={styles.container}>
          <div className={styles.iphoneScreen}>
            <img src="/images/iphoneapp.svg" alt="2 iphone screens" />
          </div>
          <div className={styles.appText}>
            <h2>Download Our App</h2>
            <h2>for Any Devices:</h2>
            <div className={styles.appStore}>
              <p>App store</p>
              <div className={styles.starReviews}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <h4>Editor's Choice</h4>
              <p className={styles.ratingText}>rating 4.7, 187K+ reviews</p>
              <Link href="https://appstore.com" target="_blank"><img className={styles.downloadApp} src="/images/appstore.svg" alt="picture of appstore logo" /></Link>
            </div>
            <div className={styles.googlePlay}>
              <p>Google Play</p>
              <div className={styles.starReviews}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <h4>App of the Day</h4>
              <p className={styles.ratingText}>rating 4.8, 30K+ reviews</p>
              <Link href="https://googleplay.com" target="_blank"><img className={styles.downloadPlay} src="/images/googleplay.svg" alt="picture of googleplay logo" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tools section */}
      <section className={styles.tools}>
        <div className={styles.container}>
          <div className={styles.toolText}>
            <h3>Integrate Top Work Tools</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus</p>
            <p className={styles.secondToolText}>facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
          </div>
          <div className={styles.toolApps}>
            <div className={styles.borders}>
              <img src="/images/Googlelogo.svg" alt="google logo" />
              <p>Lorem magnis pretium sed curabitur nunc facilisi nunc cursus sagittis.</p>
            </div>
            <div className={styles.borders}>
              <img src="/images/zoomlogo.svg" alt="zoom logo" />
              <p>In eget a mauris quis. Tortor dui tempus quis integer est sit natoque placerat dolor.</p>
            </div>
            <div className={styles.borders}>
              <img src="/images/slacklogo.svg" alt="slack logo" />
              <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
            </div>
            <div className={styles.borders}>
              <img src="/images/gmaillogo.svg" alt="gmail logo" />
              <p className={styles.weirdText}>Rutrum interdum tortor, sed at nulla. A cursus bibendum elit purus cras praesent.</p>
            </div>
            <div className={styles.borders}>
              <img src="/images/trellologo.svg" alt="trello logo" />
              <p>Congue pellentesque amet, viverra curabitur quam diam scelerisque fermentum urna.</p>
            </div>
            <div className={styles.borders}>
              <img src="/images/MailChimplogo.svg" alt="mailchimp logo" />
              <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
            </div>
            <div className={styles.borders}>
              <img src="/images/Dropboxlogo.svg" alt="dropbox logo" />
              <p>Ut in turpis consequat odio diam lectus elementum. Est faucibus blandit platea.</p>
            </div>
            <div className={styles.borders}>
              <img src="/images/evernotelogo.svg" alt="evernote logo" />
              <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe section */}
      <section className={styles.subscribe}>
        <div className={styles.container}>
          <div className={styles.subscribeHead}>
            <h3>Don't Want to Miss Anything?</h3>
            <img src="/images/curvedarrow.svg" alt="arrow that curves" />
          </div>
          <div className={styles.signupNewsletter}>
            <h4>Sign up for</h4>
            <h4>Newsletters</h4>
          </div>
          <div className={styles.newsletter}>
            <div id={styles.backupAbit}>
              <input className={styles.checkboxColor} type="checkbox" />
              <p>Daily Newsletter</p>
            </div>
            <div id={styles.changePlace2}>
              <input className={styles.checkboxColor} type="checkbox" />
              <p>Advertising Updates</p>
            </div>
            <div>
              <input className={styles.checkboxColor} type="checkbox" />
              <p>Week in Review</p>
            </div>
            <div id={styles.backupAbit} className={styles.changePlace}>
              <input className={styles.checkboxColor} type="checkbox" />
              <p>Event Updates</p>
            </div>
            <div id={styles.changePlace2} className={styles.changePlace}>
              <input className={styles.checkboxColor} type="checkbox" />
              <p>Startups Weekly</p>
            </div>
            <div className={styles.changePlace}>
              <input className={styles.checkboxColor} type="checkbox" />
              <p>Podcasts</p>
            </div>
          </div>
          <div className={styles.subscribeEmail}>
            <div className={styles.inputBox}>
              <input type="text" placeholder="Your Email" />
            </div>
            <Link href="/Newsletter.html"><button className={styles.btnPurpleS}>Subscribe *</button></Link>
          </div>
          <div>
            <p><Link className={styles.lineUnderNone} href="/terms.html">*</Link> Yes, I agree to the <Link href="/terms.html">terms</Link> and <Link href="/privacy.html">privacy policy</Link></p>
          </div>
        </div>
      </section>
    </main>
  );
}
