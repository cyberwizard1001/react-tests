import React,{ useState } from "react";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Paper from "@mui/material/Paper";
import { Camera } from '@mui/icons-material'

//create our style
const styles = {
  paper: {
    height: 100,
    width: 100,
    color: '#808080'
  },

  radio: {
    backgroundColor: "#808080",
    color: "#fff"
  }
};


const MUIspacing = () => {
  //Make our variable for spacing. The default value is 0.
  const [spacing, setSpacing] = useState(0);

  //When executed, change the value of the spacing Hook to the value specified.
  const changeSpacing = (e) => {
    setSpacing(Number(e.target.value));
  };
  return (
    <div>
      <div>
        {/* User will determine spacing according to their preference*/}
        <Grid container spacing={spacing}>

          {/*Rethreeder 3 empty black boxes as items of this container*/}
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Camera style={styles.paper} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        <Paper>
          <div>
            {/* Show user's chosen spacing value*/}
            {spacing}
            <RadioGroup
              name="spacing"
              aria-label="spacing"
              value={spacing.toString()}
              onChange={changeSpacing}
              row
              style={styles.radio}
            >
              {/*Create a form with multiple spacing values. */}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <FormControlLabel
                  key={value}
                  value={value.toString()}
                  control={<Radio />}
                  label={value.toString()}
                />
              ))}
            </RadioGroup>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default MUIspacing;