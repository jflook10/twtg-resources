import Head from "next/head"
import { useRouter } from 'next/router'
import {Link} from "@nextui-org/react"

import styles from "../../styles/Home.module.css" //TODO move styles to global

//TODO use container/grid and card components
//back button
export default function Layout({title, description, children}) {
  const router = useRouter() 
  return (
      <div className={styles.container}>
      <Head>
        <title>TWTG Resources</title>
        <meta name="description" content="TWTG resources" />
        <link rel="icon" href="/sunflower.png" />
      </Head>
      <header>
        {
        router.pathname !== "/" && <Link href="/">
        Home
        </Link>
        }
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>
         {title}
        </h1>

        <p className={styles.description}>
          {description}
        </p>
      </main>

      {children}
        <a style={{display: "none"}} href="https://www.flaticon.com/free-icons/sunflower" title="sunflower icons">Sunflower icons created by Freepik - Flaticon</a>
        <footer>
          
        </footer>
    </div>

    )
  }
