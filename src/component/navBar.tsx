import React, { useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { AccountCircle } from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { supabaseClient } from '../api/supabaseClient';
import { useAuth } from '../contexts/authContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export type NavBarProps = {
}

export const NavBar = ({}) => {
  const classes = useStyles();

//   const [data, setData] = React.useState<any>(null);

//   const getSessionData = async () =>{
//     try{
//   const response : any = await supabaseClient.auth.getSession();
  
//   setData(response.data);
  
//        }catch(err){
//   }
//   }
  
//   useEffect(()=>{getSessionData();},[]);

    const  { sessionData } = useAuth()
    {console.log("test", sessionData)}
    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <img src="bb_logo.png" alt="BlockBook Logo" height="60" />
            <Typography variant="h6" className={classes.title}>
                    <Link underline="none" color="inherit">
                BlockBook
                </Link>
            </Typography>
            {
                sessionData?.session ? 
                    <Link underline="none" component={RouterLink} to="/signout" color="inherit">
                        <Button color="inherit">
                            Sign out
                        </Button>
                    </Link>
                :
                <Link underline="none" to="/signin" component={RouterLink} color="inherit">
                        <Button color="inherit">
                            Sign In
                        </Button>
                </Link>

            }
                
                <Link underline="none" component={RouterLink} to="/feed" color="inherit">
                        <Button color="inherit">
                            Feed
                        </Button>
                </Link>
                <Link underline="none" component={RouterLink} to="/post" color="inherit">
                        <Button color="inherit">
                            +
                        </Button>
                </Link>
                
                <IconButton color="inherit">
                  <Badge color="secondary">
                      <NotificationsIcon />
                  </Badge>
                </IconButton>
                <Link underline="none" to="/profile" component={RouterLink} color="inherit">
                  <IconButton color="inherit">
                  <Badge color="secondary">
                      <AccountCircle />
                  </Badge>
                  </IconButton>
                </Link>
                
            </Toolbar>
        </AppBar>
        </div>
  );
}