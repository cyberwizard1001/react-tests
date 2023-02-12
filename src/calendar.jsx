import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import './calendar-styles.css'

let date = '';
function CalendarPage() {
  const [date, setDate] = useState(new Date());
 
  return (
    <div className='app'>
      
        <Calendar onChange={setDate} value={date} />
      
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default CalendarPage;