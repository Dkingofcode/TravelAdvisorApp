import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core";


const PlaceDetails = ( {place}) => {
  return (
    <div>
      {place.name}
    </div>
  )
}

export default PlaceDetails;
