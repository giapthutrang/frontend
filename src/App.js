import React, { useState } from 'react';
import {
  TextField,
  Typography,
  Button,
  Paper,
} from '@material-ui/core'

function App(props) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  

  function handleChangeUsername(event) {
    setUsername(event.target.value)
  }
  
  function handleChangePassword(event) {
    setPassword(event.target.value)
  }

  const handleSignIn = () => {
    console.log(username, password)
    if(password.length<6) alert('password yếu');

  }

  const handleSignUp = () => {

  }

  //npm install @material-ui/core
  const buttonStyle = {
    color: 'lightcyan',
    width: 200,
    height: 50,
    backroundColor: '#d32f2f',
    margin: 10
  }
  function handleKeyPress (event) {
    if (event.key=== 'enter') handleSignIn();
  }
  return <Paper style={{
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    height: 400,
    alignItems: 'center',
    flex: 1
  }}>

    <TextField 
    label='Tài Khoản' 
    type="text" 
    onChange={handleChangeUsername}></TextField>

    <TextField 
    label='Mật Khẩu' 
    type="password" 
    onKeyPress={handleKeyPress}
    onChange={handleChangePassword} />

    <Button onClick={handleSignIn} variant="contained" style={buttonStyle}><Typography>dang nhap</Typography></Button>

    <Button onClick={handleSignUp} variant="text" style={buttonStyle}><Typography>dang ki</Typography></Button>

    <br></br>

    <Typography>{username}</Typography>
    <Typography>{password}</Typography>

  </Paper>
}

export default App;
//module.exports=app;
