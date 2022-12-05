import Head from "next/head"
import { useRouter } from 'next/router'
import {Link} from "@nextui-org/react"

import styles from "../../styles/Home.module.css" //TODO move styles to global

//TODO use container/grid and card components
//header center/alignment, update fonts
export default function Layout({title, description, children}) {
  const router = useRouter() 
  return (
      <div className={styles.container}>
      <Head>
        <title>TWTG Resources</title>
        <meta name="description" content="TWTG resources" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova&family=Open+Sans"/>
      </Head>
      <header className={styles["header--top"]}>
        <div className={styles["header--align"]}>
        {
        router.pathname !== "/" &&  <><Link href="/">
        Home
        </Link>
         <span style={{fontFamily: "Ibarra Real Nova", marginLeft: 10}}>TWTG</span>
         </>
        }
        </div>
        <img className={styles["header_img"]} src="/twtg-logo.svg" />
        <div className={styles["header--align"]}></div>
      </header>
      <main className={styles.main}>
        <div className={styles["main--description"]}>
        <h1 className={styles.title}>
         {title}
        </h1>
        <p className={styles.description}>
          {description}
        </p>
        </div>
        {children}
      </main>
        <footer className={styles.footer}>
          <div className={styles["footer_container--social"]}>
            <a href="https://instagram.com/thewoodlandstxgardener/" target={"_blank"} rel="noreferrer">
              <div className={`${styles["footer_social--ig"]} ${styles["footer_social"]}`}></div>
            </a>
            <a href="https://www.facebook.com/TheWoodlandsTxGardener" target={"_blank"} rel="noreferrer">
              <div className={`${styles["footer_social--fb"]} ${styles["footer_social"]}`}></div>
            </a>
          </div>
          <p style={{display: "none"}}><a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Freepik - Flaticon</a></p>
          <p style={{display: "none"}}><a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Facebook icons created by Freepik - Flaticon</a></p>
        </footer>
    </div>

    )
  }
