import { Card, Grid, Text, Row } from "@nextui-org/react";

import styles from "../../styles/Home.module.css" //TODO move styles to global

//TODO use the description
export default function PageBody({data, description}) {
    const handlePress = (index) => {
      console.log("called", data, index, data[index])
      if(!data[index].link) return
      window.open(data[index].link, '_blank').focus()
    }

    return (
      <Grid.Container justify="center" fluid gap={1}>
        <Row justify="center">{description}</Row>
        <Row justify="center">
        <ul>
          {data.map((cardItem, index)=> { 
            return <Grid key={cardItem.id}>
              <Card 
                isHoverable
                isPressable
                onPress={() => handlePress(index)}
                className={styles.card}
                >
                <Card.Header css={{ py: "$1" }}>
                  <Text className={styles.card_title}>{cardItem.title}</Text>
                </Card.Header>
                <Card.Body css={{ py: "$1" }}>
                  <Text>
                    {cardItem.description}
                  </Text>
                </Card.Body>
              </Card>
            </Grid>
              })
            }
          </ul>
        </Row>

      </Grid.Container>
    )
  }

//   {
//     "title": "",
//     "description":"",
//     "link":"",
//     "type":"",
//     "id":""
// }