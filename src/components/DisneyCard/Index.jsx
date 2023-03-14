import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function DisneyCard({name, image, id}) {
  return (
  
    <Link to={`/information/${id}`} style={{textDecoration:'none'}}>
      <Card
        sx={{ maxWidth: 345, backgroundColor:'#F5F5F5'}}>
        <CardMedia
          sx={{ height: 350}}
        > <img src={image} width="250" height="205"/>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
    
  );
}
