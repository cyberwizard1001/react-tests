import React from "react";
import { Container, Grid} from "@mui/material";
import SessionList from "./sessionsList";
import SlotsDashboard from "./slots-dashboard";


export default function Dashboard(){

    return(
        <Container>
            
        <main>
            <Grid container spacing={2}>
            <SessionList/>
            <SlotsDashboard/>
            </Grid> 
        </main>
        </Container>
        
    )
}