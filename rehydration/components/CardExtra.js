import React from 'react';
import Link from 'next/link';

const CardExtra = ({ speakers }) => {
  return (
    <>
      {speakers.map((speaker) => {
        return (
          <Link href="/speaker/[id]" as={`/speaker/${speaker.id}`}>
            <a class="speaker">
              <img class="ui avatar image" src={speaker.image} />
              <span>{speaker.name}</span>
            </a>
          </Link>
        );
      })}
    </>
  );
};

export default CardExtra;
