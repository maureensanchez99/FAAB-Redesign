import Image from "next/image";
import styles from "./page.module.css";

export default function Gallery() {
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
        {/* Gallery Title */}
        <h1 className={styles.galleryTitle}>Gallery</h1>

        {/* Gallery Grid */}
        <div className={styles.galleryGrid}>
          {/* Gallery Item 1 - Mass of Remembrance 2021 */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              Mass of Remembrance 2021
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/HYmKkPbN7jT5kiFC8" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/Mass_of_Remembrance_2021.JPG"
                  alt="Mass of Remembrance 2021"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 2 - Family Fun Night 2019 */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              Family Fun Night 2019
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/BRMWPn6d2fKJwpv69" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/Family Fun Night 2019.jpg"
                  alt="Family Fun Night 2019"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 3 - Easter Celebration Malden 2018 */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              Easter Celebration Malden 2018
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/scAliTXOgRKmlh6E3" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/Easter Celebration Malden 2018.jpg"
                  alt="Easter Celebration Malden 2018"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 4 - Mass for Typhoon Haiyan Victims */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              Mass for Typhoon Haiyan Victims
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/nIiSJQBXjaHMRs672" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/Mass for Typhoon Haiyan Victims.JPG"
                  alt="Mass for Typhoon Haiyan Victims"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 5 - Mass with Cardinal O'Malley */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              Mass with Cardinal O'Malley
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/TbYIsfyC7Tq9q2Q73" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/Mass with Cardinal O'Malley.JPG"
                  alt="Mass with Cardinal O'Malley"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 6 - Family Fun Night 2013 */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              Family Fun Night 2013
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/cQQO44xIpfLd39sG2" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/Family Fun Night 2013.JPG"
                  alt="Family Fun Night 2013"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 7 - Christmas in Malden 2012 */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              Christmas in Malden 2012
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/5NtSYVdgE3z65V3s2" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/Christmas in Malden 2012.JPG"
                  alt="Christmas in Malden 2012"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 8 - Family Picnic 2012 */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              Family Picnic 2012
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/hRpdPh7v8sCggm4O2" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/Family Picnic 2012.jpg"
                  alt="Family Picnic 2012"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 9 - Rosary Rally 2012 */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              Rosary Rally 2012
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/LSThB4IWQ5RRP0pD3" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/Rosary Rally 2012.jpg"
                  alt="Rosary Rally 2012"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 10 - May Crowning 2012 */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              May Crowning 2012
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/aGw8VetwKxnlXFYg1" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/May Crowning 2012.JPG"
                  alt="May Crowning 2012"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 11 - Bake a Difference */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              Bake a Difference
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/zIm3PwyCshBX7t7w2" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/Bake a Difference.JPG"
                  alt="Bake a Difference"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 12 - Family Picnic 2011 */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              Family Picnic 2011
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/sgVMhDXoPZ0wXd2C2" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/Family Picnic 2011.JPG"
                  alt="Family Picnic 2011"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 13 - Catholic Diversity Festival 2011 */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              Catholic Diversity Festival 2011
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/6mYnmR4ODflS421k1" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/Catholic Diversity Festival 2011.jpg"
                  alt="Catholic Diversity Festival 2011"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 14 - ONE Awards Banquet 2011 */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              ONE Awards Banquet 2011
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/mSmDSHhoDviz82PE2" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/ONE Awards Banquet 2011.jpg"
                  alt="ONE Awards Banquet 2011"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 15 - Philips Academy 2010 */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              Philips Academy 2010
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/dsX0vrV8vONJlNQx2" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/Philips Academy 2010.JPG"
                  alt="Philips Academy 2010"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 16 - Christmas Celebration 2010 */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              Christmas Celebration 2010
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/6QoCP1gS2gHE37yx2" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/Christmas Celebration 2010.JPG"
                  alt="Christmas Celebration 2010"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 17 - San Lorenzo Ruiz Feast 2010 */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              San Lorenzo Ruiz Feast 2010
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/KPqczsyRV3DdPzLx1" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/San Lorenzo Ruiz Feast 2010.JPG"
                  alt="San Lorenzo Ruiz Feast 2010"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 18 - Family Picnic 2010 */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              Family Picnic 2010
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/BrmAq5SeP1io62A13" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/Family Picnic 2010.JPG"
                  alt="Family Picnic 2010"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 19 - Father Celsi's last Mass in Malden */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              Father Celsi's last Mass in Malden
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/MQFUAgYNLQsZ6MJk2" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/Father Celsi's last Mass in Malden.JPG"
                  alt="Father Celsi's last Mass in Malden"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 20 - Filipino Day Divine Mercy 2009 */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              Filipino Day Divine Mercy 2009
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/IeENu1rlBtjjvhko2" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/Filipino Day Divine Mercy 2009.JPG"
                  alt="Filipino Day Divine Mercy 2009"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 21 - Pasko sa Malden 2009 */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              Pasko sa Malden 2009
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/dU3qIqD4KeKLimNZ2" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/Pasko sa Malden 2009.JPG"
                  alt="Pasko sa Malden 2009"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 22 - Family Fun Night 2010 */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              Family Fun Night 2010
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/n74cyzAgTX9P4A7O2" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/Family Fun Night 2010.JPG"
                  alt="Family Fun Night 2010"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>

          {/* Gallery Item 23 - San Lorenzo Ruiz Feast 2009 */}
          <div className={styles.galleryItem}>
            <div className={styles.imageName}>
              San Lorenzo Ruiz Feast 2009
            </div>
            <div className={styles.imageContainer}>
              <a href="https://photos.app.goo.gl/kHiV3xBlWEGPJ7Dd2" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <Image
                  src="/gallery/Image/San Lorenzo Ruiz Feast 2009.jpg"
                  alt="San Lorenzo Ruiz Feast 2009"
                  width={300}
                  height={225}
                  className={styles.galleryImage}
                />
              </a>
            </div>
          </div>
        </div>
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
