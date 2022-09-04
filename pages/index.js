import { Grid, Row, Card, Text, Link } from "@nextui-org/react";

// import Link from 'next/link'
import Layout from '../src/components/Layout'
import styles from '../styles/Home.module.css'
// todo fix colors 
export default function Home() {
  return (
    <Layout 
      title={<span>Welcome to <br/> The Woodlands Texas Gardener (TWTG)</span>}
      description={"Resources to get you growing!"}
    >
        <Grid.Container>
          <Row gap={1} justify="center">
            <Link href="/aboutme">
              <Card  className={styles.card}>
                <Card.Header>
                <Text>About Me</Text>
                </Card.Header>
                <Card.Body>
                <Text>More about Jillian -me- the grower behind TWTG</Text>
                </Card.Body>
            </Card>
            </Link>

            <Link href="/collaborations"> 
              <Card  className={styles.card}>
                <Card.Header>
                <Text>Collaborations</Text>
                </Card.Header>
                <Card.Body>
                <Text>Coupons, product reviews, and collaborations</Text>
                </Card.Body>
              </Card>
            </Link>
          </Row>
          <Row gap={1} justify="center">
            <Link href="/htx-resources">
            <Card
              className={styles.card}
            >
              <Card.Header>
              <Text>Houston Area Resources</Text>
              </Card.Header>

              <Card.Body>
              <Text>Discover tools, resources, and link for greater Houston area gardeners</Text>
              </Card.Body>
            </Card>
            </Link>

            <Link href="/ctx-resources">
            <Card className={styles.card}>
              <Card.Header>
                <Text>Central Texas Resources</Text>
              </Card.Header>
              <Card.Body>
                <Text>Discover tools, resources, and link for Central Texas area gardeners</Text>
              </Card.Body>
            </Card>
            </Link>
          </Row>
          
        </Grid.Container>
    </Layout>
  )
}
