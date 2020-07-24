import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';

// import icons
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import YouTubeIcon from '@material-ui/icons/YouTube';



const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    fontFamily : 'iran-sans'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontFamily:'iran-sans',
  },
  img:{
    height: '0',
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.img}>
      <img src={require('./../../Assests/auth/Rocket@2x.png')} className="login-img" alt="img"/>
      </div>
      
      <CssBaseline />
      <div className={classes.paper} >
        
        <Typography component="h1" variant="h5">
          ورود به حساب کاربری
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="پست الکترونیک"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="کلمه عبور"
            type="password"
            id="password"
            autoComplete="current-password"
            
          />
         
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" style={{fontFamily:'iran-sans' ,fontSize:'10px'}}>
                رمز عبور خود را فراموش کرده اید؟
              </Link>
            </Grid>
            <Grid item>
              <FormControlLabel
              control={<Checkbox value="remember" color="primary" dir="rtl"/>}
              label="من را به خاطر بسپار"
              style={{fontFamily:'iran-sans'}}
            />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={clsx(classes.submit , "form-button-login")}
            
          >
            وارد حساب کاربری خود شوید
          </Button>
          <div className="social-accounts">
            <div className="base-line"></div>
            <span className="login-text-social">Login with your Social Account</span>
            <div className="social-icons">
              <div className="icons" style={{backgroundColor:'#3763D2'}}>
                <FacebookIcon />
              </div>
              <div className="icons" style={{backgroundColor:'#1ABCFF'}}>
                <TwitterIcon />
              </div>
              <div className="icons" style={{backgroundColor:'#7B5DFA'}}>
                <EmailIcon />
              </div>
              <div className="icons" style={{backgroundColor:'#FD434F'}}>
                <YouTubeIcon />
              </div>
            </div>
          </div>
          
        </form>
      </div>
      
    </Container>
  );
}