import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';


const List = ({ places, childClicked, isloading, type, setType, rating, setRating }) => {
  const classes = useStyles();
  const [refs, setRefs] = useState([]);
  
  useEffect(() => {
    console.log(places);
    const reff = Array(places?.length).fill().map((_, i) => refs[i] || createRef());
    setRefs(reff);  
}, [places]);


  return (
    <div className={classes.container}>
      <Typography variant='h4'>Restaurants, Hotels & Attractions around you</Typography>
      {isloading ? (
        <div className={classes.loading}>
            <CircularProgress size="5rem" />
          </div>  
      ) : (
        <>
          <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
      <Select value={type} onChange={(e) => setType(e.target.value)}>
         <MenuItem value="restaurants">Restaurants</MenuItem>
         <MenuItem value="hotels">Hotels</MenuItem>
         <MenuItem value="attractions">Attractions</MenuItem>
        </Select>  
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
          {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <PlaceDetails 
                place={place}  
                 selected={childClicked === i}
                 refProp={refs[i]}
                 />   
              </Grid>  
          ))}
      </Grid>
      </>
    )}

    </div>
  )
}

export default List;
