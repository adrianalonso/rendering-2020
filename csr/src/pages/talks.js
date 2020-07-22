import React, { useEffect, useState } from 'react';
import { Card, Grid, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getTalks } from '../config/api';
import CardExtra from '../components/CardExtra';
import moment from 'moment';
const Talks = () => {
  const [talks, setTalks] = useState([]);
  useEffect(() => {
    getTalks().then((data) => {
      setTalks(data.list);
    });
  }, [true]);
  return (
    <Container className="talks">
      <Grid columns="three" stackable={true}>
        <Grid.Row>
          {talks.map((talk) => {
            return (
              <Grid.Column>
                <Link to={'/talk/' + talk.id}>
                  <Card
                    image={talk.image}
                    header={talk.name}
                    meta={moment(talk.date).format('DD/MM/YYYY')}
                    description={talk.description}
                    extra={<CardExtra speakers={talk.speakers}></CardExtra>}
                  ></Card>
                </Link>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Talks;
