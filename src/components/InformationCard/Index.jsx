import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function InformationCard({name, image, films, shortFilms, tvShows, videoGames, parkAttractions, allies, enemies}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <Card sx={{ maxWidth: 345, top:'50%', left:'50%'}}>
      <Link to={'/'} style={{color:'black', fontSize:'2em'}}>Return</Link>
      <CardHeader
        
        title={name}
      
      />
      <CardMedia
        component="img"
        height="100%"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography fontSize={25} fontFamily={'fantasy'}>
        Informações Sobre o Personagem:
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent >
          <Typography paragraph>films: {films}</Typography>
          <Typography paragraph>shortFilms: {shortFilms}</Typography>
          <Typography paragraph>tvShows: {tvShows}</Typography>
          <Typography paragraph>videoGames: {videoGames}</Typography>
          <Typography paragraph>parkAttractions: {parkAttractions}</Typography>
          <Typography paragraph>allies: {allies}</Typography>
          <Typography paragraph>enemies: {enemies}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
