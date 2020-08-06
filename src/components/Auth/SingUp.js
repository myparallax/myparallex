// import React from 'react';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import clsx from 'clsx'; 
// // import icons
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import EmailIcon from '@material-ui/icons/Email';
// import YouTubeIcon from '@material-ui/icons/YouTube';



// const useStyles = makeStyles((theme) => ({
//   paper: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
  
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     fontFamily : 'iran-sans'
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     fontFamily:'iran-sans',
//   },
//   img:{
//     height: '0',
//   },
// }));

// export default function Login() {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs"  className="sign-up">
//       <div className={classes.img} >
//       <img src={require('./../../Assests/auth/Rocket@2x.png')} className="login-img"  alt="img"/>
//       </div>
      
//       <CssBaseline />
//       <div className={classes.paper} >
        
//         <Typography component="h1" variant="h5">
//       ساخت حساب کاربری جدید
//         </Typography>
//         <form className={classes.form} noValidate style={{fontFamily:'iran-sans'}}>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="پست الکترونیک"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             inputProps={{
//               style: {fontFamily:"iran-sans !important"} 
//             }}
//           />

//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="نام کاربری"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             inputProps={{
//               style: {fontFamily:"iran-sans !important"} 
//             }}
//           />

//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="کلمه عبور"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             style={{fontFamily:'iran-sans !important'}}
            
//           />

//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="تکرار کلمه عبور"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             style={{fontFamily:'iran-sans !important'}}
            
//           />
         
//           <Grid container>
//             <Grid item>
//               <FormControlLabel
//               control={<Checkbox value="remember" color="primary" dir="rtl"/>}
//               label="اخبار و به روزرسانی ها را از طریق ایمیل برای من ارسال کنید"
//               style={{fontFamily:'iran-sans'}}
//               className="sign-up-checkbox"
//               dir="rtl"
//             />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={clsx(classes.submit , "form-button-sign-up")}
//           >
//          اکنون ثبت نام کنید
//           </Button>
//           <div className="contact-us">
//           برای فعال کردن حساب خود یک ایمیل تائید در صندوق ورودی خود با پیوند دریافت خواهید کرد
//           <br/> اگر مشکلی دارید
//           <Link href="#" variant="body2" style={{fontFamily:'iran-sans' ,fontSize:'10px'}}>
            
//           با ما تماس  
//           </Link> بگیرید.
//           </div>
//           <div className="social-accounts">
//             <div className="base-line"></div>
//             <span className="login-text-social">Sign up with your Social Account</span>
//             <div className="social-icons">
//               <div className="icons" style={{backgroundColor:'#3763D2'}}>
//                 <FacebookIcon />
//               </div>
//               <div className="icons" style={{backgroundColor:'#1ABCFF'}}>
//                 <TwitterIcon />
//               </div>
//               <div className="icons" style={{backgroundColor:'#7B5DFA'}}>
//                 <EmailIcon />
//               </div>
//               <div className="icons" style={{backgroundColor:'#FD434F'}}>
//                 <YouTubeIcon />
//               </div>
//             </div>
//           </div>
          
//         </form>
//       </div>
      
//     </Container>
//   );
// }