import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';




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
      <React.Fragment>
      <CssBaseline />
      <Grid item  >
      <Container maxWidth="sm" >
        <img className={classes.img} alt="complex" src="https://previews.123rf.com/images/vaskinamat/vaskinamat1702/vaskinamat170200022/72494424-sport-banner-portada-de-facebook-conjunto-de-bolas-de-deporte-y-art%C3%ADculos-de-juego-en-un-fondo-azul-fo.jpg" />
      </Container>
      </Grid>
    </React.Fragment>
      <br/><br/>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://hazejercicio.com/wp-content/uploads/2018/07/Bolsa-impermeable-deportiva.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Mochila impermeable
                </Typography>
                <Typography variant="body2" gutterBottom>
                  ChibaoMouse
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Negra
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$899.00</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={1}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://www.tuexperto.com/wp-content/uploads/2015/04/tucano_wristband_01.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Porta Celular Deportivo
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Tucano
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Amarillo/Negro
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$391.00</Typography>
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
              <img className={classes.img} alt="complex" src="https://resources.sears.com.mx/medios-plazavip/fotos/productos_sears1/original/2983835.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Gorra
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Adidas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Azul
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$550.00</Typography>
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
              <img className={classes.img} alt="complex" src="https://blog.linio.com.mx/wp-content/uploads/2019/06/4.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Reloj Deportivo
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Android
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Morado
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$1890.00</Typography>
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
              <img className={classes.img} alt="complex" src="https://http2.mlstatic.com/guantes-de-arquero-adidas-ace-training-original-talla-9-D_NQ_NP_830494-MPE31255369516_062019-F.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Guantes Portero
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Adidas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Amarillos
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$499.00</Typography>
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
              <img className={classes.img} alt="complex" src="https://i.linio.com/p/d4b9a77cd59e885ab87b15ce4c72befa-catalog.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Cuerdas para saltar
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Adidas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Rosa
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$200.00</Typography>
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
              <img className={classes.img} alt="complex" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTF5e569HFMQFM5ZBiXR2aWBDya_4R3viPSZoafKQsUEZLRw-w_&usqp=CAU" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Tapete Yoga
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Adidas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Rosa
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$600.00</Typography>
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
              <img className={classes.img} alt="complex" src="https://m.media-amazon.com/images/I/51poQPe5u6L.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Toalla Deportiva
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Proworks
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Varios
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$470.00</Typography>
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
              <img className={classes.img} alt="complex" src="https://www.promocionalesexpertos.mx/408-large_default/Cilindro-o-anfora-con-tapa-rosca-de-un-giro-valvula-de-seguridad-Bismark-ANF046.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Bote para Agua
                </Typography>
                <Typography variant="body2" gutterBottom>
                  TupperWare
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Azul
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$119.00</Typography>
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

