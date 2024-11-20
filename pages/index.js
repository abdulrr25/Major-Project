import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from "../styles/style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../components";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Website Title</title>
        <meta name="description" content="Description of your website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`${inter.className} bg-primary w-full overflow-hidden`}>
        {/* Navigation Bar */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        {/* Hero Section */}
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        
        {/* Main Content */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            {/* Uncomment components as needed */}
            {/* <Billing /> */}
            <CardDeal />
            {/* <Testimonials /> */}
            {/* <Clients /> */}
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
