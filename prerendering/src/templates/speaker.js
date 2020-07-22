import React from "react"
import { graphql, Link, Helmet } from "gatsby"
import Layout from "../components/layout"
import { Container, Item, Header, Card, Button } from "semantic-ui-react"
import moment from "moment"

const Speaker = ({ data }) => {
  const speaker = data.allSpeakers.nodes[0]

  let talk = speaker && speaker.talks ? speaker.talks[0] : false

  return (
    <Layout>
      <Container className="speaker">
        {speaker && (
          <>
            <Item.Group>
              <Item>
                <Item.Image size="small" src={speaker.image} rounded={true} />

                <Item.Content>
                  <Item.Header as="a">{speaker.name}</Item.Header>
                  <Item.Meta>{speaker.company}</Item.Meta>
                  <Item.Description>{speaker.bio}</Item.Description>
                  <Item.Extra>
                    <a href={`https://twitter.com/${speaker.twitter}`}>
                      @{speaker.twitter}
                    </a>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
            <Header as="h3" dividing>
              Charlas
            </Header>
            {talk && (
              <Link to={`/talk/${talk.id}`}>
                <Card
                  className="vertical"
                  image={talk.image}
                  header={talk.name}
                  meta={moment(talk.date).format("DD/MM/YYYY")}
                  description={talk.description}
                ></Card>
              </Link>
            )}
          </>
        )}
        <div className="ui center">
          <Link to={"/"}>
            <Button color="orange"> Volver</Button>
          </Link>
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($id: Int!) {
    allSpeakers(filter: { _id: { eq: $id } }) {
      nodes {
        _id
        id
        name
        image
        bio
        company
        twitter
        talks {
          id
          name
          description
          date
          image
        }
      }
    }
  }
`

export default Speaker
