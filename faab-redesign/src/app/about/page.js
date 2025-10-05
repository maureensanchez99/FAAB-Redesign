import Image from "next/image";
import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
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

        {/* Navigation */}
        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="#footer">Useful Links</a>
          <a href="/gallery">Gallery</a>
          <a href="/about">About Us</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdlGSZ2wmIXY5ITGgQQvoS_TTKy7ViogAxd4kN3H2stY7jzhA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">Contact</a>
        </nav>
      </header>

      {/* Main content */}
      <main className={styles.main}>
        {/* Logo Explanation Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Logo Explanation</h2>
          
          <div className={styles.content}>
            <div className={styles.logoExplanation}>
              <p>
                <strong>The Bamboo Cross</strong> – represents our Christian identity as Asians. The bamboo also symbolizes strength, and flexibility even in the midst of trials, sufferings, and other adversities. As one Chinese actor expressed "Notice that the stiffest tree is most easily cracked, while the bamboo survives by bending with the wind". It symbolizes our resiliency as Filipinos.
              </p>

              <p>
                <strong>The Sun with eight rays</strong> – taken from our national flag, it symbolizes our diversity. The rays emanate from the center. Our diversity as Filipinos here in the Archdiocese of Boston draws its source in our Lord Jesus Christ especially in the Holy Eucharist.
              </p>

              <p>
                <strong>The Hands</strong> – they are in the action of reaching out to each other. The action is symbolic of our desire to reach out to our kababayan in the Greater Boston Areas through our apostolate as described in the words gumagabay, kumakalinga, at umaaruga. These are the key words from our new vision-mission statement.
              </p>
            </div>

            <div className={styles.attribution}>
              <p><strong>Concept – Fr. Alex Castro, AA</strong></p>
              <p className={styles.quote}>
                *The logo was adapted from the logo used by the National Assembly of Filipino Priest in the USA (NAFP-USA) for their Triennial Assembly last November 2017)
              </p>
            </div>
          </div>
        </section>

        {/* Chaplain Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Chaplain</h2>
          <h3 className={styles.subtitle}>Fr. Lucio Pedro T. Dayag, SVD</h3>
          
          <div className={styles.content}>
            <p>
              <strong>Lucio Pedro T. Dayag</strong>, known as <strong>FR. PERU</strong>, is a member of the Society of the Divine Word (SVD) Missionaries. He was born on January 7, 1961 in Enrile, Cagayan, Philippines. He joined the SVD in 1983, started his novitiate in 1984 in Tagaytay City and was ordained priest on December 8, 1990 in Tagaytay City. He was assigned to the SVD Philippine Southern Province and held responsibilities in the areas of education, hospital, and pastoral apostolates in Cebu City, Tagbilaran City, Tacloban City, Manila City, Surigao del Norte, and Agusan del Sur. He also taught at the graduate schools of the University of San Carlos and Cebu Doctors University in Cebu City. Moreover, he was involved as Chaplain of the Brotherhood of Christian Businessmen and Professionals (BCBP) of which he is a member (Cebu-North Chapter), The Lord's Flock Catholic Charismatic Community (Cebu Chapter from 2007-2018), La Santa Trinita Catholic Charismatic Community (Manila, 2000-2007), and various civic organizations in the Philippines.
            </p>

            <p>
              He obtained the following post graduate degrees: Doctor of Education in Educational Management (2007, De La Salle University, Manila), Master of Engineering (1997, University of San Carlos, Cebu City), and Master of Arts in Hospital Administration (2015, Cebu Doctors' University, Cebu City).
            </p>

            <p>
              He is at present assigned at Miramar Retreat Center, Duxbury, Ma. since February 2018.
            </p>
          </div>
        </section>

        {/* Apostolate Officers Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Apostolate Officer</h2>
          <div className={styles.content}>
            <p><strong>FILIPINO APOSTOLATE OF THE</strong></p>
            <p><strong>ARCHIDIOCESE OF BOSTON</strong></p>
            <p><strong>NORTH SHORE AND SOUTH SHORE COMMUNITIES</strong></p>

            <h3 className={styles.subtitle}>CHAPLAIN</h3>
            <p><strong>FATHER PERU DAYAG, SVD</strong></p>

            <h3 className={styles.subtitle}>BOARD OF ADVISORS</h3>
            <p>(Former Chairpersons of the Apostolate)</p>
            <ul className={styles.officersList}>
              <li>Johnny Manuel</li>
              <li>Jenny Aying</li>
              <li>Meynard Gutierrez</li>
              <li>Gracita Chiefe</li>
              <li>Manuel Paradela</li>
              <li>Finance Committee</li>
              <li>Treasurers Priscilla Cruz</li>
              <li>Gracita Chiefe</li>
              <li>Auditor July Afable</li>
            </ul>
          </div>
        </section>

        {/* Executive Council Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>EXECUTIVE COUNCIL</h2>
          
          <div className={styles.content}>
            <div className={styles.communitySection}>
              <h3 className={styles.communityTitle}>North Shore Communities</h3>
              <ul className={styles.councilList}>
                <li>Coordinator Annie Talaid</li>
                <li>Assistant Coordinator Jeffrey Pagulong</li>
                <li>Secretary Meynard Gutierrez</li>
                <li>Finance Team Crispina Gutierrez</li>
                <li>Head of Liturgy Kaye Vito</li>
                <li>Faith Formation Pearl Brault</li>
                <li>Outreach Jun Cruz</li>
              </ul>
            </div>

            <div className={styles.communitySection}>
              <h3 className={styles.communityTitle}>South Shore/Central Communities</h3>
              <ul className={styles.councilList}>
                <li>Coordinator John Manuel</li>
                <li>Assistant Coordinator Loreta Borneo</li>
                <li>Secretary Alpha Cattaneo</li>
                <li>Finance Team Rudy Hermosa</li>
                <li>Head of Liturgy Ross Mangilog</li>
                <li>Faith Formation Lisa Paradela</li>
                <li>Outreach Salome Afable</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Blue separator line */}
      <div className={styles.separator}></div>

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
