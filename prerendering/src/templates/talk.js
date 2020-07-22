import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Container, Card, Button } from "semantic-ui-react"
import moment from "moment"
import CardExtra from "../components/CardExtra"

const Talk = ({ data }) => {
  const talk = data.allTalks.nodes[0]

  return (
    <Layout>
      <Container className={"talk"}>
        {talk && (
          <>
            <Card
              image={talk.image}
              header={talk.name}
              meta={moment(talk.date).format("DD/MM/YYYY")}
              description={talk.description}
              extra={<CardExtra speakers={talk.speakers}></CardExtra>}
            ></Card>
          </>
        )}
        <div className="ui center">
          <Link to="/">
            <Button color="orange">Volver</Button>
          </Link>
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($id: Int!) {
    allTalks(filter: { _id: { eq: $id } }) {
      nodes {
        id
        name
        image
        description
        speakers {
          id
          name
          image
        }
      }
    }
  }
`

export default Talk
