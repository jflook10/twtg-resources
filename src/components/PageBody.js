import { Card, Grid, Text } from "@nextui-org/react";

//TODO use the description
export default function PageBody({data, description}) {
    return (
      <Grid.Container justify="center" fluid gap={1}>
        <p>{description}</p>
        <ul>
          {data.map((cardItem)=> { 
            return <Grid key={cardItem.key}>
              <Card 
                isHoverable
                css={{ mw: "400px" }}>
                <Card.Header css={{ py: "$1" }}>
                  <Text b>{cardItem.title}</Text>
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