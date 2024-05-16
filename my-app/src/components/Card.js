import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function MuiCard({ card, onToggleFavorite }) {
  const [isFavorite, setIsFavorite] = useState(card.isFavorite);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite(card.id);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="340"
        image={card.image}
        alt={card.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {card.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.species}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={toggleFavorite}>
          {isFavorite ? 'Remove from favorite' : 'Add to favorite'}
        </Button>
      </CardActions>
    </Card>
  );
}

export default MuiCard;
