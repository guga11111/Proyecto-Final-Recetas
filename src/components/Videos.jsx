import React from 'react';
import ReactPlayer from 'react-player'
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';

const imagen = {
  height:150
};

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


export default function Dashboard() {
  
    return (
      <div>
        <br/>
        <br/>
        <center>
        <h1>Bienvenido/a a nuestra área de videos</h1>
        <h3>Aqui te mostraremos los vídeos mas entretenidos de ejercicio de la semana</h3>
        <br/>
        <br/>
        </center>


        <Toolbar>
          <img style={imagen} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c64cfe3-bb3b-4ae8-b5a6-d2f39d21ff87/d3jme6i-8c702ad4-4b7a-4763-9901-99f8b4f038b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljNjRjZmUzLWJiM2ItNGFlOC1iNWE2LWQyZjM5ZDIxZmY4N1wvZDNqbWU2aS04YzcwMmFkNC00YjdhLTQ3NjMtOTkwMS05OWY4YjRmMDM4YjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oQC1FIUxsmeyLHm6qNdoRb8wzoMdKI1p49kNBstoU-w" alt=""/>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=r2bte8rvEXc'
          className='react-player'
          
          width='70%'
          height='800px'
        />
        </Toolbar>
        <br/>
        <br/>
        <Toolbar>
          <img style={imagen} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c64cfe3-bb3b-4ae8-b5a6-d2f39d21ff87/d3jme6i-8c702ad4-4b7a-4763-9901-99f8b4f038b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljNjRjZmUzLWJiM2ItNGFlOC1iNWE2LWQyZjM5ZDIxZmY4N1wvZDNqbWU2aS04YzcwMmFkNC00YjdhLTQ3NjMtOTkwMS05OWY4YjRmMDM4YjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oQC1FIUxsmeyLHm6qNdoRb8wzoMdKI1p49kNBstoU-w" alt=""/>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=BzXESqTIAiI'
          className='react-player'
          
          width='70%'
          height='800px'
        />
        </Toolbar>
      
        <AppBar color="secondary"  position="static">
  <Toolbar>
  <img  style={logo} src="https://scontent.fcvj1-1.fna.fbcdn.net/v/t1.15752-9/92830141_446428632833448_8294136053976006656_n.png?_nc_cat=102&_nc_sid=b96e70&_nc_ohc=tDgy9ZRSagMAX-hRBbX&_nc_ht=scontent.fcvj1-1.fna&oh=e7a9e3cc014de1a481aa7201b555eb75&oe=5EBFF458" alt=""/>
  <h1>Integrantes: </h1>
  <img style={abajo} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c64cfe3-bb3b-4ae8-b5a6-d2f39d21ff87/d3jme6i-8c702ad4-4b7a-4763-9901-99f8b4f038b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljNjRjZmUzLWJiM2ItNGFlOC1iNWE2LWQyZjM5ZDIxZmY4N1wvZDNqbWU2aS04YzcwMmFkNC00YjdhLTQ3NjMtOTkwMS05OWY4YjRmMDM4YjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oQC1FIUxsmeyLHm6qNdoRb8wzoMdKI1p49kNBstoU-w" alt=""/>



  <List >{
      
      
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