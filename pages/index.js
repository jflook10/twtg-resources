import Link from 'next/link'
import Layout from '../src/components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout 
      title={<span>Welcome to <br/> The Woodlands Texas Gardener (TWTG)</span>}
      description={"Resources to get you growing!"}
    >
        <div className={styles.grid}>
          <Link href="/aboutme">
            <div  className={styles.card}>
            <h2>About Me</h2>
            <p>More about Jillian -me- the grower behind TWTG</p>
          </div>
          </Link>

         <Link href="/collaborations"> 
          <div  className={styles.card}>
            <h2>Collaborations</h2>
            <p>Coupons, product reviews, and collaborations</p>
          </div>
          </Link>

          <Link href="/htx-resources">
          <div
            className={styles.card}
          >
            <h2>Houston Area Resources</h2>
            <p>Discover tools, resources, and link for greater Houston area gardeners</p>
          </div>
          </Link>

          <Link href="/ctx-resources">
          <div className={styles.card}>
            <h2>Central Texas Resources</h2>
            <p>
            Discover tools, resources, and link for Central Texas area gardeners
            </p>
          </div>
          </Link>
          
        </div>
    </Layout>
  )
}
