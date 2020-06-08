import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  const useStyles = makeStyles ((theme) => ({
    root: {
      flexGrow: 1,
    
    },
    media: {
      height: 160,
      width: 350,
      padding: theme.spacing(2),
    },
    blanco: {
      height: 20,
      width: 20,
    },
    espacio: {
    }
  }));
  
  //const useStyles = makeStyles((theme) => ({
   // root: {
    //  flexGrow: 1,
    //},
    //paper: {
     // padding: theme.spacing(2),
      //textAlign: 'center',
      //color: theme.palette.text.secondary,
    //},
  //}));

  
  const classes = useStyles();

  return (
    
  /*  <div className={classes.root}>
      <center>
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <br/>
      <a href={url} target="_blank" rel="noopener noreferrer">
        URL
      </a>
      <br/>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
      </center>

*/

<div>
&nbsp;
    <div className={classes.root}>
      
      <Grid container spacing={5}>
        <Grid item xs={12}>
        <Card  className={classes.espacio}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={label}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {label}
          </Typography>
       
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  href={url} size="small" color="primary">
        Url
        </Button>
        <Button onClick={() => setShow(!show)} size="small" color="primary">
          Ingredientes
        </Button>
        {show && <RecipeDetails ingredients={ingredients} />}
      </CardActions>
        </Card>
        </Grid>
        &nbsp;
      </Grid>
    </div>
    &nbsp;
   </div>
   
  );
  
};

export default Recipe;