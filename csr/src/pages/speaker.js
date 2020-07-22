import React, { useEffect, useState } from 'react';
import { Header, Card, Button, Container, Item } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import { getSpeaker } from '../config/api';
const Speaker = () => {
  const { id } = useParams();
  const [speaker, setSpeaker] = useState(false);

  useEffect(() => {
    getSpeaker(id).then((data) => {
      setSpeaker(data.speaker);
    });
  }, [id]);

  let talk = speaker && speaker.talks ? speaker.talks[0] : false;
  return (
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
            <Link to={'/talk/' + talk.id}>
              <Card
                className="vertical"
                image={talk.image}
                header={talk.name}
                meta={moment(talk.date).format('DD/MM/YYYY')}
                description={talk.description}
              ></Card>
            </Link>
          )}
        </>
      )}
      <div className="ui center">
        <Link to={'/'}>
          <Button color="orange"> Volver</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Speaker;
