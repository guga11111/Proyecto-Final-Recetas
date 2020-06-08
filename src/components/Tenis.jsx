import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    color: theme.palette.text.secondary,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const logo = {
  height:100
};

const avatar = {
  height:50,
  width:50
};

const abajo = {
  height:90
}



export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <br/><br/>
      <Grid container spacing={1}>
      <Grid item xs={12} >
          <Paper className={classes.paper}>
          <img className={classes.img} alt="complex" src="https://www.crecenegocios.com/wp-content/uploads/2016/03/la-promocion-de-ventas.jpg" />
          </Paper>
        </Grid>
        </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://www.innovasport.com/medias/812655-503-1.jpg?context=bWFzdGVyfGltYWdlc3wzNjgzN3xpbWFnZS9qcGVnfGltYWdlcy9oOWYvaDU4Lzg4ODIyMjUzMTU4NzAuanBnfGVkNWNlYzk1OGQ0ZTU2MGQ0OGJlOWNmNjk5MjI0ZWNlOWU3YjcyOTliYzJjNzNjOGMxYTcwNjI2NzliMTMwNGM" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Rosas Tanjun
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Nike
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Mujer
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$1300</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/449c838942da409f8ba9a97f00d3cffe_9366/Tenis_Runfalcon_Negro_F36199_01_standard.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Negro Runfalcon
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Adidas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Unisex
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$1400</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://static.netshoes.com.mx/produtos/tenis-puma-retaliate/11/003-6112-111/003-6112-111_zoom1.jpg?" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                 Negros Retaliate
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Puma
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Hombre
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$1600</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://ss203.liverpool.com.mx/xl/1068086176.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Negros Viale
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Nike
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Mujer
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$1000</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://www.innvictus.com/medias/IN-AR9293-102-1.jpg?context=bWFzdGVyfGltYWdlc3wzMzc4NHxpbWFnZS9qcGVnfGltYWdlcy9oYjQvaGRmLzkwNDEwMDM0MTM1MzQuanBnfDdhYTQ1OGQwMjk3OWJlN2U2YWM1ZmQ5OWQ5MTg2YmZiMjlhODJkYzhmMjhjOTYyYzI2NzQ5MjViMGQxMTkxZWU" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Rosas Air max 360
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Nike
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Mujer
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$3599</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://static.netshoes.com.mx/produtos/tenis-puma-jaab-xt/53/003-6115-253/003-6115-253_zoom1.jpg?" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                Negro y Turquesa Jaab
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Puma
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Unisex
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$2199</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://www.innovasport.com/medias/AW4287-1.jpg?context=bWFzdGVyfGltYWdlc3wzNzE5NnxpbWFnZS9qcGVnfGltYWdlcy9oNjcvaDY1Lzg4Nzg0NDIxODQ3MzQuanBnfGExNjBiYTFjYWEyYzNmZGE3OTBiOGFlMWE5YjgzYmMzYjc1ZTFkMzIxZTY0NzhmMDA5ODZkYWU1MTA3MWE2ZDg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Blancos CloudFoam
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Adidas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Unisex
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$1119</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://www.innovasport.com/medias/IS-EG3667-1.png?context=bWFzdGVyfGltYWdlc3wxMjU1OTV8aW1hZ2UvcG5nfGltYWdlcy9oZWMvaGRmLzkyNTE3NjI3MDAzMTgucG5nfGJjYTkwMWFjNzgyMmFkNjAyMjQ4OGM2YTEzM2EwZmIzZWYxOWI3NTE4MDBkN2ZlOTBmN2NiMTJiOGZlYWQyZTM" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Gris Fluidflow
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Adidas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                 Hombre
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$1799</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://www.innovasport.com/medias/3021225-401-1.jpg?context=bWFzdGVyfGltYWdlc3w0MTIwNnxpbWFnZS9qcGVnfGltYWdlcy9oNDUvaDcyLzg5NzI0MjM0NjI5NDIuanBnfGQ4NDdlMTVjZjBmZmJiODlmNWE1MDUyNTUwOThiMDY2ZGRkY2U5N2Q5MjY2YjAyM2I4YjFlY2NmMWRkZjQ1ODM" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Azul Charged Rogue
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Under Armour
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Unisex
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$1999</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://www.innovasport.com/medias/IS-DV9501-1.jpg?context=bWFzdGVyfGltYWdlc3wzMDkyMnxpbWFnZS9qcGVnfGltYWdlcy9oYTUvaGYyLzkwNTUzMDczMDA4OTQuanBnfGI4NjUyNTNjZmI1NjhjZjcwY2IwZTUyY2IzNWNmMWUzNzZkZTU1ZTBjYjI3MmUzZjdhZDZlMzJhMThlMzc3Y2I" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Negro y verde Interrupted
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Reebok
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Unisex
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$2334</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://www.innovasport.com/medias/IS-CK6357-700-1.png?context=bWFzdGVyfGltYWdlc3wxNDM0Mjl8aW1hZ2UvcG5nfGltYWdlcy9oZjAvaDQ1LzkyMDA0NjE3NDIxMTAucG5nfGY2ZTk1NTc1YTU4NWY3ZWM4N2FiZGJmMjNlNDE5ZjBjMzMyYjk3NmM3YWI0MWQyM2YzYzc3OWJiOTIwOGE3NjU" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Rosa y verde Renew
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Nike
                </Typography>
                <Typography variant="body2" color="textSecondary">
                 Mujer
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$1545</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://www.innovasport.com/medias/IS-EG3670-1.png?context=bWFzdGVyfGltYWdlc3wxMjAzNTl8aW1hZ2UvcG5nfGltYWdlcy9oYTkvaDNjLzkyNTMzNDc2NTU3MTAucG5nfDE0MDY4NDg1MzFjZmY4MmMwZTM0MmZkYzRlY2ZhNzExZDQ1ZDFhYmQ5YTAxMjU4NzQzZWIyZWI0NjZmZmRkNDE" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Rosa FluidFlow
                </Typography>
                <Typography variant="body2" gutterBottom>
                 Adidas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Mujer
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$1799</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        
        </Grid>



        
        <AppBar color="secondary"  position="static">
  <Toolbar>
  <img  style={logo} src="https://scontent.fcvj1-1.fna.fbcdn.net/v/t1.15752-9/92830141_446428632833448_8294136053976006656_n.png?_nc_cat=102&_nc_sid=b96e70&_nc_ohc=tDgy9ZRSagMAX-hRBbX&_nc_ht=scontent.fcvj1-1.fna&oh=e7a9e3cc014de1a481aa7201b555eb75&oe=5EBFF458" alt=""/>
  <h1>Integrantes: </h1>
  <img style={abajo} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c64cfe3-bb3b-4ae8-b5a6-d2f39d21ff87/d3jme6i-8c702ad4-4b7a-4763-9901-99f8b4f038b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljNjRjZmUzLWJiM2ItNGFlOC1iNWE2LWQyZjM5ZDIxZmY4N1wvZDNqbWU2aS04YzcwMmFkNC00YjdhLTQ3NjMtOTkwMS05OWY4YjRmMDM4YjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oQC1FIUxsmeyLHm6qNdoRb8wzoMdKI1p49kNBstoU-w" alt=""/>



  <List dense className={classes.root}>{
      
      
          <ListItem  >
            <ListItemAvatar>
              <Avatar
                alt="Guga"
                style={avatar}
                src="https://scontent.fcvj1-1.fna.fbcdn.net/v/t1.0-9/s960x960/69365165_2598924916839240_3961075735250075648_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_eui2=AeGQvyNhumZyCwtJvkyiVACHYjzRy4HFqphiPNHLgcWqmEOhUbx_muta7tm7MfBCZ4ZUHIhvMPLySEFv14jVCHNY&_nc_ohc=9TbfF2_-gcYAX85kSLe&_nc_ht=scontent.fcvj1-1.fna&_nc_tp=7&oh=49921b50cfcf7fb420fa81a429c3b197&oe=5EC32F55"
              />
            </ListItemAvatar>
            <ListItemText i primary={`Gustavo Núñez  68643 `} />

            <img style={abajo} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c64cfe3-bb3b-4ae8-b5a6-d2f39d21ff87/d3jme6i-8c702ad4-4b7a-4763-9901-99f8b4f038b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljNjRjZmUzLWJiM2ItNGFlOC1iNWE2LWQyZjM5ZDIxZmY4N1wvZDNqbWU2aS04YzcwMmFkNC00YjdhLTQ3NjMtOTkwMS05OWY4YjRmMDM4YjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oQC1FIUxsmeyLHm6qNdoRb8wzoMdKI1p49kNBstoU-w" alt=""/>

            <ListItemAvatar>
              <Avatar
                alt="Yosse"
                style={avatar}
                src="https://scontent.fcvj1-1.fna.fbcdn.net/v/t1.0-9/s960x960/92339598_2876036915766502_4305684180001357824_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeFsQ5nuz6I8pw8g-5fZr0AKuI-36g4CIry4j7fqDgIivO_qab3JyIe4GX8O4shBHbpSSoIThZ_sd8E1aA5FKsl1&_nc_ohc=GZ-eDyqodiEAX8aiwBG&_nc_ht=scontent.fcvj1-1.fna&_nc_tp=7&oh=9d3cd653bbecf1ac39359dd9a879782e&oe=5EC294C2"
              />
            </ListItemAvatar>
            <ListItemText i primary={`Yoseline Pérez 69167`} />


            <img style={abajo} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c64cfe3-bb3b-4ae8-b5a6-d2f39d21ff87/d3jme6i-8c702ad4-4b7a-4763-9901-99f8b4f038b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljNjRjZmUzLWJiM2ItNGFlOC1iNWE2LWQyZjM5ZDIxZmY4N1wvZDNqbWU2aS04YzcwMmFkNC00YjdhLTQ3NjMtOTkwMS05OWY4YjRmMDM4YjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oQC1FIUxsmeyLHm6qNdoRb8wzoMdKI1p49kNBstoU-w" alt=""/>


            <ListItemAvatar>
              <Avatar
                alt="Felix"
                style={avatar}
                src="https://scontent.fcvj1-1.fna.fbcdn.net/v/t1.0-9/89297915_2802758753136248_7326627862335717376_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeE56bIBOLiMcxjUtayzjLJhKdTCSgELLLcp1MJKAQsstydiJclVbl_6emkZxN3ltx2wMhL2jtBhVTwWaxrZkRjL&_nc_ohc=cHa8l6vrTrgAX8VgUwe&_nc_ht=scontent.fcvj1-1.fna&oh=5c2f6b4d732efdd241a09b969d143002&oe=5EC3FD23"
              />
            </ListItemAvatar>
            <ListItemText i primary={`Félix Cárdenas 68247`} />

            <img style={abajo} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c64cfe3-bb3b-4ae8-b5a6-d2f39d21ff87/d3jme6i-8c702ad4-4b7a-4763-9901-99f8b4f038b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljNjRjZmUzLWJiM2ItNGFlOC1iNWE2LWQyZjM5ZDIxZmY4N1wvZDNqbWU2aS04YzcwMmFkNC00YjdhLTQ3NjMtOTkwMS05OWY4YjRmMDM4YjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oQC1FIUxsmeyLHm6qNdoRb8wzoMdKI1p49kNBstoU-w" alt=""/>


            <ListItemAvatar>
              <Avatar
                alt="Cacho"
                style={avatar}
                src="https://scontent.fcvj1-1.fna.fbcdn.net/v/t1.0-9/44778780_387215638775836_2251339771148238848_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_eui2=AeEnDAUnRetTWRc3BHeKjtmNa9ASWclncWBr0BJZyWdxYNPpPM3x8y27spD5wLSauZK6brRYtuwv77UM8Hyj0A7d&_nc_ohc=oFkYr4nWIhkAX9Mv57P&_nc_ht=scontent.fcvj1-1.fna&oh=60b67382b412ce8ffa8791f26f8c0a60&oe=5EC3CDF3"
              />
            </ListItemAvatar>
            <ListItemText i primary={`Diego Cacho 69553`} />
            <img style={abajo} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c64cfe3-bb3b-4ae8-b5a6-d2f39d21ff87/d3jme6i-8c702ad4-4b7a-4763-9901-99f8b4f038b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljNjRjZmUzLWJiM2ItNGFlOC1iNWE2LWQyZjM5ZDIxZmY4N1wvZDNqbWU2aS04YzcwMmFkNC00YjdhLTQ3NjMtOTkwMS05OWY4YjRmMDM4YjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oQC1FIUxsmeyLHm6qNdoRb8wzoMdKI1p49kNBstoU-w" alt=""/>


            <ListItemAvatar>
              <Avatar
                alt="Andrea"
                style={avatar}
                src="https://scontent.fcvj1-1.fna.fbcdn.net/v/t1.0-9/p720x720/83197193_1460563444100375_2963617834711646208_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_eui2=AeGMULGe8Qhxdk2MslEcqL5MSlH_wJnhSs1KUf_AmeFKzXm-TXVwzU7-m_F8ypBdVlpTaIfDNz-O1XcmthoBBg3T&_nc_ohc=gxisckoUzFcAX8n6Vl_&_nc_ht=scontent.fcvj1-1.fna&_nc_tp=6&oh=11a4055190dbea302deb4d7c79b8a06c&oe=5EC2CB5C"
              />
            </ListItemAvatar>
            <ListItemText i primary={`Andrea Pérez 67901`} />
          </ListItem>
          

      
      }
    </List>
 
  </Toolbar>
</AppBar>

    </div>



  );

  
}