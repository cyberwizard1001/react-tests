import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './upcoming-session-card.css'


export default function UpcomingSessionCard(props) {
  return (
    <Card sx={{ minWidth: 275 }} className='Card'>
      {props.cards.map(card => {
        return(
          <div className='container'>
      
      <div className='column'>
      <div className="Name">
        <Typography variant='h6'>{card.name}</Typography>
      </div>
      <div className='LastDate'>
        <Typography variant='h7'>{card.date}</Typography>
      </div>
      </div>
      
      <div style={{display: 'flex', flexDirection: 'row', padding: '10px', gap: '10px', flexGrow: '5'}}>
        <Button variant="contained">View</Button>
        <Button variant="contained">Join</Button>
      </div>
      </div>
        )
      })}
      
    </Card>
  );
}