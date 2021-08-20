import React from 'react'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import BootStrapCard from 'react-bootstrap/Card';
import { Badge, CloseButton } from 'react-bootstrap';
import { Button, Card, Elevation } from "@blueprintjs/core";

function ItemCard(props) {
  return (
    <div>
      {/* <Card>
                <Card.Header>Featured
                 <CloseButton onClick={props.callToggle} />
                 <CloseButton onClick={props.callDelete} /></Card.Header>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> */}




      <BootStrapCard
        style={{
          // boxShadow: 'rgba(900, 100, 111, 0.2) 0px 7px 29px 0px',
          width: '50rem',
          margin: '1rem'
        }}
      >
        <BootStrapCard.Header
          style={{
            backgroundColor: '#3397a5',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            weidth: '20rem'
          }}
        >
          <div
            style={{
              backgroundColor: '#3397a5',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '150px',
            }}
          >
            <Badge
              variant={props.color}
              pill
              onClick={props.callToggle}
              style={{ cursor: 'pointer' }}
            >
              {props.badge}
            </Badge>
            <span style={{ color: '#fff', fontWeight: '700' }}>
              {props.asignee}
            </span>
          </div>
          <CloseButton onClick={props.callDelete} />
        </BootStrapCard.Header>
        <BootStrapCard.Body style={{ background: '#31bdc3', display: 'flex', flexDirection: 'column' }}>
          <BootStrapCard.Title>{props.title}</BootStrapCard.Title>
          <BootStrapCard.Text
            style={{ alignSelf: 'flex-end', color: 'black' }}
          >
            Difficulty: {props.diff}
          </BootStrapCard.Text>
        </BootStrapCard.Body>
      </BootStrapCard>
    </div>
  )
}

export default ItemCard
