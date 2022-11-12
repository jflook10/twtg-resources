import { Grid, Row, Card, Text, Link } from "@nextui-org/react";

// import Link from 'next/link'
import Layout from '../src/components/Layout'
import styles from '../styles/Home.module.css'
// todo fix colors 
export default function Home() {
  return (
    <Layout 
      title={<span>TWTG</span>}
      description={"Resources to get you growing!"}
    >
        <Grid.Container>
          <Row gap={1} justify="center"  xs wrap={"wrap"}>
            <Link href="/aboutme">
              <Card  className={styles.card}>
                <Card.Header>
                <Text className={styles.card_title}>About Me</Text>
                </Card.Header>
                <Card.Body className={styles.card_body}>
                <Text>More about Jillian -me- the grower behind TWTG</Text>
                </Card.Body>
            </Card>
            </Link>

            <Link href="/collaborations"> 
              <Card  className={styles.card}>
                <Card.Header>
                <Text className={styles.card_title}>Collaborations</Text>
                </Card.Header>
                <Card.Body className={styles.card_body}>
                <Text>Coupons, product reviews, and collaborations</Text>
                </Card.Body>
              </Card>
            </Link>
          </Row>
          <Row gap={1} justify="center"  xs wrap={"wrap"}>
            <Link href="/htx-resources">
            <Card
              className={styles.card}
            >
              <Card.Header>
              <Text className={styles.card_title}>Houston Area Resources</Text>
              </Card.Header>

              <Card.Body className={styles.card_body}>
              <Text>Discover tools, resources, and links for Houston area gardeners</Text>
              </Card.Body>
            </Card>
            </Link>

            <Link href="/ctx-resources">
            <Card className={styles.card}>
              <Card.Header>
                <Text className={styles.card_title}>Central Texas Resources</Text>
              </Card.Header>
              <Card.Body className={styles.card_body}>
                <Text>Discover tools, resources, and links for Central Texas gardeners</Text>
              </Card.Body>
            </Card>
            </Link>
          </Row>
          
        </Grid.Container>
    </Layout>
  )
}
