import React, { useState } from "react";
import {Grid, Button, Typography, IconButton, Icon} from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {Link} from "react-router-dom";


const pages = {
    JOIN: 'pages.join',
    CREATE: "pages.create",

};

export default function Info(props) {
    const [page, setPage] = useState(pages.JOIN);
    
    function joinInfo() {
        return (
            <>
              Join Page <br />
              The Join page allows the user to input the code of an existing House Party room.
              If the code is correct, the user will join the House Party room and be able to
              participate and listen.
            </>
          );
        }

    function createInfo() {
        return (
            <>
              Create page <br />
              The Create Page allows a user to create and host a new House Party room 
              with a unique code. Before the room is created, the user will get to choose if other members 
              of the room will be able to skip songs or not. Furthermore, the host gets to choose how many votes
              are needed to skip songs.
            </>
          );
    }

 
    
    return (
        <Grid container spacing = {1}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                    What is House Party?
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Typography variant="body1">
                    {page === pages.JOIN ? joinInfo() : createInfo() }
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <IconButton onClick = {() => {page === pages.CREATE ? setPage(pages.JOIN) : setPage(pages.CREATE)}}>
                    {page === pages.CREATE ? <NavigateBeforeIcon/> : <NavigateNextIcon/>}
                </IconButton>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color ="success" variant="contained" to= "/" component={Link}>
                    Back
                </Button>
            </Grid>
        </Grid>
    );
}