import React from 'react';
import { Link } from 'react-router-dom';

const CardExtra = ({ speakers }) => {
  return (
    <>
      {speakers.map((speaker) => {
        return (
          <Link to={'/speaker/' + speaker.id}>
            <div class="speaker">
              <img class="ui avatar image" src={speaker.image} />
              <span>{speaker.name}</span>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default CardExtra;
