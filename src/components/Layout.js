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
        {
        router.pathname !== "/" &&  <><Link href="/">
        Home
        </Link>
         <span style={{fontFamily: "Ibarra Real Nova", marginLeft: 10}}>TWTG</span>
         </>
        }
        <img className={styles["header_img"]} src="/twtg-logo.svg" />
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
          <div className={styles["footer--social"]}>
            <a href="https://instagram.com/thewoodlandstxgardener/" target={"_blank"}>
              <img className={styles["footer_ig--dark"]} src="/instagram.png"/>
              {/* <img className={styles["footer_ig--light"]} src="/instagram-fff-logo.png"/> */}
            </a>
            <a href="https://www.facebook.com/TheWoodlandsTxGardener" target={"_blank"}>
              <img className={styles["footer_fb--dark"]} src="/facebook.png"/>
              {/* <img className={styles["footer_fb--light"]} src="/facebook-fff-logo.png"/> */}
            </a>
          </div>
          <p style={{display: "none"}}><a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Freepik - Flaticon</a></p>
          <p style={{display: "none"}}><a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Facebook icons created by Freepik - Flaticon</a></p>
        </footer>
    </div>

    )
  }
