import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <a href="/" className={styles.logoLink}>
            <Image
              src="/faab_logo.png"
              alt="Filipino Apostolate Archdiocese of Boston - Home"
              width={120}
              height={120}
              priority
            />
          </a>
        </div>

        {/* Hamburger toggle */}
        <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />
        <label htmlFor="menu-toggle" className={styles.hamburger}>
          ☰
        </label>

        {/* Nav links */}
        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="#footer">Useful Links</a>
          <a href="/gallery">Gallery</a>
          <a href="/about">About</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdlGSZ2wmIXY5ITGgQQvoS_TTKy7ViogAxd4kN3H2stY7jzhA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">Contact</a>
        </nav>
      </header>

      {/* Main content */}
      <main className={styles.main}>
        {/* Mission Statement Section */}
        <section className={styles.missionSection}>
          <div className={styles.blueOverlay}>
            <h1 className={styles.missionTitle}>
              Mission Statement of the Filipino Apostolate of the Archdiocese of Boston
            </h1>
            
            <div className={styles.missionContent}>
              <p className={styles.missionText}>
                Kami ay isang Sambayanang Kristiyano na gumagabay, kumakalinga, at umaaruga sa aming mga kabataan at kapwa Pilipino dito sa Arkidiosesis ng Boston.
              </p>
              
              <p className={styles.missionText}>
                We are a Christian Community who guides, takes care, and nourishes the faith life of our young people, and our fellow Filipinos in the Archdiocese of Boston.
              </p>
              
              <div className={styles.keyWords}>
                <h3>Key words to reflect on which should lead us to our lines of actions:</h3>
                <ul className={styles.keyWordsList}>
                  <li>Sambayanang Kristiyano.....</li>
                  <li>Gumagabay....(to guide)</li>
                  <li>Kumakalinga.....(to take care)</li>
                  <li>Umaaruga....(to nourish)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className={styles.eventsSection}>
          <h2 className={styles.eventsTitle}>Up Coming events</h2>
          <div className={styles.eventsContent}>
            <div className={styles.eventItem}>
              <h3 className={styles.eventDate}>December 8, 2024</h3>
              <h4 className={styles.eventName}>Feast of the Immaculate Conception Mass</h4>
              <p className={styles.eventDescription}>Join us for a special Mass celebrating the Feast of the Immaculate Conception</p>
            </div>
            
            <div className={styles.eventItem}>
              <h3 className={styles.eventDate}>December 15, 2024</h3>
              <h4 className={styles.eventName}>Christmas Celebration</h4>
              <p className={styles.eventDescription}>Annual Christmas celebration with Filipino traditions and fellowship</p>
            </div>
            
            <div className={styles.eventItem}>
              <h3 className={styles.eventDate}>January 6, 2025</h3>
              <h4 className={styles.eventName}>Epiphany Mass</h4>
              <p className={styles.eventDescription}>Celebrate the Epiphany with our community Mass</p>
            </div>
            
            <div className={styles.eventItem}>
              <h3 className={styles.eventDate}>February 2, 2025</h3>
              <h4 className={styles.eventName}>Presentation of the Lord</h4>
              <p className={styles.eventDescription}>Special Mass for the Presentation of the Lord (Candlemas)</p>
            </div>
            
            <div className={styles.eventItem}>
              <h3 className={styles.eventDate}>March 19, 2025</h3>
              <h4 className={styles.eventName}>Feast of St. Joseph</h4>
              <p className={styles.eventDescription}>Honor St. Joseph, patron of the universal Church</p>
            </div>
            
            <div className={styles.eventItem}>
              <h3 className={styles.eventDate}>April 20, 2025</h3>
              <h4 className={styles.eventName}>Easter Sunday Mass</h4>
              <p className={styles.eventDescription}>Celebrate the Resurrection of our Lord Jesus Christ</p>
            </div>
          </div>
          
          <div className={styles.eventsFooter}>
            <a href="https://sites.google.com/site/faabcalendar/" target="_blank" rel="noopener noreferrer" className={styles.calendarLink}>
              View Full Calendar →
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className={styles.footer}>
        <div className={styles.footerLogo}>
          <a href="/" className={styles.logoLink}>
            <Image
              src="/faab_logo.png"
              alt="Filipino Apostolate Archdiocese of Boston - Home"
              width={120}
              height={120}
              priority
            />
          </a>
        </div>
        
        <div className={styles.footerLinks}>
          <h3 className={styles.linksTitle}>Links</h3>
          <div className={styles.linksColumns}>
            <div className={styles.linksColumn}>
              <a href="https://sites.google.com/site/faabcalendar/" target="_blank" rel="noopener noreferrer">Calendar of Events</a>
              <a href="/gallery">Photo Gallery</a>
              <a href="http://vimeo.com/channels/92482" target="_blank" rel="noopener noreferrer">Video Gallery</a>
              <a href="https://marian.org/mary/rosary/how-to-pray" target="_blank" rel="noopener noreferrer">Catholic Devotions</a>
            </div>
            <div className={styles.linksColumn}>
              <a href="http://www.facebook.com/pages/Filipino-Apostolate-of-Boston/209496125747105" target="_blank" rel="noopener noreferrer">Apostolate Facebook Page</a>
              <a href="http://filipinoapostolate.blogspot.com/p/useful-links.html" target="_blank" rel="noopener noreferrer">Useful Links</a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdlGSZ2wmIXY5ITGgQQvoS_TTKy7ViogAxd4kN3H2stY7jzhA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">Email Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}