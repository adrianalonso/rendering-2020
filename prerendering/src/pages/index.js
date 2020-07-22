import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import CardExtra from "../components/CardExtra"
import moment from "moment"
import { Card, Grid, Container } from "semantic-ui-react"

const Talks = ({ data }) => {
  const talkList = data.allTalks.nodes

  return (
    <Layout>
      <Container className="talks">
        <Grid columns="three" stackable={true}>
          <Grid.Row>
            {talkList.map(talk => {
              return (
                <Grid.Column>
                  <Link to={`/talk/${talk._id}`}>
                    <a>
                      <Card
                        image={talk.image}
                        header={talk.name}
                        meta={moment(talk.date).format("DD/MM/YYYY")}
                        description={talk.description}
                        extra={<CardExtra speakers={talk.speakers} />}
                      ></Card>
                    </a>
                  </Link>
                </Grid.Column>
              )
            })}
          </Grid.Row>
        </Grid>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allTalks {
      nodes {
        _id
        id
        name
        description
        date
        image
        speakers {
          id
          name
          image
          bio
          company
        }
      }
    }
  }
`

export default Talks
