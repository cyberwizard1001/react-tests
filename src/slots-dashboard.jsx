import React from "react";
import CalendarPage from "./calendar";
import { Grid, Button } from "@mui/material";


export default function SlotsDashboard(){
    return(
        <main>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'block'}}>
            <h1>Slots</h1>
            <CalendarPage/>
            <Button variant="text">Manage Slots</Button>
            </div>

            <div style={{display: 'flex', flexDirection: 'column'}}>
           <Grid container direction="column" style={{gap: '30px'}}> 
           <Grid container spacing={3} direction="row">
           <Button>12:00 AM</Button>
           <Button>1:00 AM</Button>
           <Button>5:00 AM</Button>
           </Grid>
           
           <Grid container spacing={3}  direction="row">
           <Button>6:00 AM</Button>
           <Button>7:00 AM</Button>
           <Button>8:00 AM</Button>
           </Grid>
           
           <Grid container spacing={3}  direction="row">
           <Button>9:00 AM</Button>
           <Button>10:00 AM</Button>
           <Button>11:00 AM</Button>
           </Grid>

           <Grid container spacing={3}  direction="row">
           <Button>12:00 PM</Button>
           <Button>1:00 PM</Button>
           <Button>2:00 PM</Button>
           </Grid>

           <Grid container spacing={3}  direction="row">
           <Button>3:00 PM</Button>
           <Button>4:00 PM</Button>
           <Button>5:00 PM</Button>
           </Grid>

           <Grid container spacing={3}  direction="row">
           <Button>6:00 PM</Button>
           <Button>7:00 PM</Button>
           <Button>8:00 PM</Button>
           </Grid>

           <Grid container spacing={3}  direction="row">
           <Button>9:00 PM</Button>
           <Button>10:00 PM</Button>
           <Button>11:00 PM</Button>
           </Grid>
           
           </Grid>
           <Button variant="contained">SET</Button>
           </div>

        
            
            </div>
            
        </main>
    )
}