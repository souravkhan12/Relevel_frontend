import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';

function FoldersGrid() {
  const [cards, setCards] = useState([
    {
      "parentList":
      [
        "/"
      ],
      "_id": "5fe7a6604075060017af3a40",
      "name": "Media",
      "parent": "/",
      "owner": "5fe7a5194075060017af39e3",
      "createdAt": "2020-12-26T21:08:48.756Z",
      "updatedAt": "2020-12-26T21:08:53.413Z",
      "__v": 0
    },
    {
      "parentList":
      [
        "/"
      ],
      "_id": "5fe7a65d4075060017af3a3f",
      "name": "Homework",
      "parent": "/",
      "owner": "5fe7a5194075060017af39e3",
      "createdAt": "2020-12-26T21:08:45.030Z",
      "updatedAt": "2020-12-26T21:08:45.030Z",
      "__v": 0
    },
    {
      "parentList":
      [
        "/"
      ],
      "_id": "5fe7a6544075060017af3a3e",
      "name": "Folder",
      "parent": "/",
      "owner": "5fe7a5194075060017af39e3",
      "createdAt": "2020-12-26T21:08:36.533Z",
      "updatedAt": "2020-12-26T21:08:36.533Z",
      "__v": 0
    }
  ]);

//   {
//     "parentList":
//     [
//       "/"
//     ],
//     "_id": "5fe7a6544075060017af3a3e",
//     "name": "Folder",
//     "parent": "/",
//     "owner": "5fe7a5194075060017af39e3",
//     "createdAt": "2020-12-26T21:08:36.533Z",
//     "updatedAt": "2020-12-26T21:08:36.533Z",
//     "__v": 0
//   }

  return (
    <Grid columns={3}>
      {cards.map(card => (
        <Grid.Column key={card._id}>
          <Card>
            <Image src={"/images/folder-svg.svg"} />
            <Card.Content>
              <Card.Header>{card.name}</Card.Header>
              <Card.Description>{card.owner}</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      ))}
    </Grid>
  );
}

export default FoldersGrid;