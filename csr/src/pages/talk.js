import React, { useEffect, useState } from 'react';
import { Container, Card, Button } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom';
import CardExtra from '../components/CardExtra';
import { getTalk } from '../config/api';
import moment from 'moment';
const Talk = () => {
  const { id } = useParams();
  const [talk, setTalk] = useState(false);

  useEffect(() => {
    getTalk(id).then((data) => {
      setTalk(data.talk);
    });
  }, [id]);

  return (
    <Container className={'talk'}>
      {talk && (
        <>
          <Card
            image={talk.image}
            header={talk.name}
            meta={moment(talk.date).format('DD/MM/YYYY')}
            description={talk.description}
            extra={<CardExtra speakers={talk.speakers}></CardExtra>}
          ></Card>
        </>
      )}
      <div className="ui center">
        <Link to={'/'}>
          <Button color="orange">Volver</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Talk;
