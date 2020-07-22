import React, { useEffect, useState } from 'react';
import { Card, Icon, Grid, Container, Menu } from 'semantic-ui-react';
import Link from 'next/link';
import { getTalks } from '../config/api';
import moment from 'moment';
import CardExtra from '../components/CardExtra';

const Talks = (props) => {
  const [talks, setTalks] = useState(props.talks);
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
                <Link href="/talk/[id]" as={`/talk/${talk.id}`}>
                  <a>
                    <Card
                      image={talk.image}
                      header={talk.name}
                      meta={moment(talk.date).format('DD/MM/YYYY')}
                      description={talk.description}
                      extra={<CardExtra speakers={talk.speakers} />}
                    ></Card>
                  </a>
                </Link>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </Container>
  );
};

Talks.getInitialProps = async (ctx) => {
  const json = await getTalks();
  return { talks: json.list };
};
export default Talks;
