import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "./Components/navbar";

const Home: NextPage = () => {
  return (
      <><Navbar/>
          <div className={styles.container}>
              <Head>
                  <title>Formula One</title>
                  <meta name="description" content="Generated by create next app"/>
                  <link rel="icon" href="/favicon.ico"/>
              </Head>

              <main className={styles.main}>


                  <iframe title="F1" width="1850" height="900"
                          src="https://app.powerbi.com/reportEmbed?reportId=f831feb3-5179-464b-b2f0-7e1e7fcdb8c5&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLW5vcnRoLWV1cm9wZS1pLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D"
                          frameBorder="0" allowFullScreen/>
                  <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSeTYL2u82kfmAv1NSItpgi1tV09mafm47Jb_J19lEWd8SwbAg/viewform?embedded=true"
                      width="640" height="960" frameBorder="0">
                  </iframe>
              </main>

              <footer className={styles.footer}>
                  <a
                      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Powered by{' '}
                      <span className={styles.logo}>
                      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
                  </span>
                  </a>
              </footer>
          </div>
      </>
  )
}

export default Home