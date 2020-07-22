import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Container, Item, Header, Card, Button } from 'semantic-ui-react';
import Link from 'next/link';
import { getSpeaker } from '../../config/api';
import moment from 'moment';

const Speaker = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [speaker, setSpeaker] = useState(props.speaker);

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
            <Link href="/talk/[id]" as={`/talk/${talk.id}`}>
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
        <Link href={'/'}>
          <Button color="orange"> Volver</Button>
        </Link>
      </div>
    </Container>
  );
};

Speaker.getInitialProps = async (ctx) => {
  const id = ctx.query.id;
  const json = await getSpeaker(id);

  return { speaker: json.speaker };
};

export default Speaker;
