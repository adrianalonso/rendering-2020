import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'semantic-ui-react';
import Link from 'next/link';
import { getTalk } from '../../config/api';
import moment from 'moment';
import CardExtra from '../../components/CardExtra';

const Talk = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [talk, setTalk] = useState(props.talk);

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
        <Link href="/" as={`/`}>
          <Button color="orange">Volver</Button>
        </Link>
      </div>
    </Container>
  );
};

Talk.getInitialProps = async (ctx) => {
  const id = ctx.query.id;
  const json = await getTalk(id);
  return { talk: json.talk };
};

export default Talk;
