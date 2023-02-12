import { Typography } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import UpcomingSessionCard from './upcoming-session-card';
import './baseStyles.css';


  export default function SessionList(){
    
    const [cards, setCards] = useState([
        {
          id: 1,
          name: 'Nirmal K',
          date: '4:00 PM, 23-02-2023'
        },
        {
          id: 2,
          name: 'Navaneeth',
          date: '5:00 PM, 21-02-2023'
        },
        {
          id: 3,
          name: 'Rahul',
          date: '2:00 PM, 20-02-2023'
        },
        {
            id: 4,
            name: 'Sumithra',
            date: '3:00 AM, 20-03-2023'
        }
      ])
        
    return(
        <main className="baseCard">
            <Typography variant='subtitle1'>UPCOMING SESSIONS</Typography>
            <UpcomingSessionCard cards={cards}/>
        </main>
        
    )
  }





  