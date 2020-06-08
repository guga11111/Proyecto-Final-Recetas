import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function App() {
  const logo = {
    height:100
  };
  

  
  return (
    
    <div >
    <AppBar color="secondary" position="static">
    
      <Toolbar>
      <Button href="principal"  ><img  style={logo} src="https://lh3.googleusercontent.com/KTR0ppVy_ka7ZlYCWeCykXeKuUECGYMy1a1XoTDwfYfJ-Yenrhz2c4USQkbebSiTPbT2dk3oa2DiopdiddxJ=w1360-h657-rw" alt=""/></Button>
        <Typography variant="h6" >
          
        </Typography>
        <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
        <Button href="ropa"  color="inherit">Ropa</Button>
        <Button href="tenis"  color="inherit">Tenis</Button>
        <Button href="accesorios"  color="inherit">Accesorios</Button>
        <Button href="videos"  color="inherit">Videos</Button>

        </ButtonGroup>

      
  
      </Toolbar>
    </AppBar>


    


  </div>  );
          }
          export default App;
