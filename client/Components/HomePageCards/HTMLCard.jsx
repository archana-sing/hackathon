import React from 'react';
import { useRouter } from 'next/router'
import SocketContext from '../../context/socketContext'
import AuthContext from '../../context/authContext'
import { Button, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'

const useStyles = makeStyles({
    cardBtn: {
        border: 0,
        borderRadius: 30,
        padding: '10px 20px',
        margin: 15,
        color: 'white'
    },
    topicHeader: {
        fontWeight: 'bolder',
        fontSize: '80px',
        color: 'white'
    },
    subHeader: {
        padding: '10px 0px',
        color: 'white'
    },
    cardBG: {
        backgroundColor: '#282A35',
        padding: 35
    },
    green: {
        backgroundColor: '#04AA6D',
        '&:hover': {
            backgroundColor: '#008f5a'
        }
    },
    black: {
        color: 'black'
    },
    white: {
        color: 'white'
    },
    classImg: {
        width: "100%",
        height: "100%"
    },
    quizBG: {
        backgroundColor: 'white',
        padding: 35,
        borderRadius: 20
    }
  });

const HTMLCard = () => {
    const classes = useStyles();
    const router = useRouter();
    const socket = React.useContext(SocketContext)
    const [token , setToken ] = React.useContext(AuthContext)
    const [username , setUserName] = React.useContext(AuthContext)
    const room = "HTML"
    // React.useEffect(() => {
    //     if (!token) {
    //       router.push('/login')
    //     }
    //   }, [token])
    const handleClick = (e) => {
        e.preventDefault()
        socket.emit("joinRoom" , {username , room})
        socket.on("message" , message => {
            console.log(message)
        })
        router.push({
            pathname : "/chat",
            state : {username , room}
        })
       
      }
    const learnHandler = ()=>{
        
            router.push({
                pathname : "/htmlstudy",
            })
        
        
    }
    const quizHandler = ()=>{
      router.push({
        pathname : "/quiz",
        })
        
        
        
      }
    return (
        <Grid container className={classes.cardBG}>
            <Grid className={classes.cardBG} md={6} justify="center" align="center">
                <Grid item md={12}>
                    <Typography  className={classes.topicHeader}>
                        HTML
                    </Typography>
                    <Typography className={classes.subHeader} variant="h6" >
                        The language for building web pages
                    </Typography>
                </Grid>
                    {!token ?  <Link href="/login">login</Link> :  
                    <Grid container  direction="column" justify="space-between" md={5} className={classes.cardBtnSection}>
                    <Button className={classes.cardBtn+" "+classes.green} variant="contained" onClick = {learnHandler}>
                        <Typography className={classes.white}><b>Learn HTML</b></Typography>
                    </Button>
                    <Button className={classes.cardBtn} variant="contained" onClick = {quizHandler}>
                        <Typography className={classes.black}><b>Take Quiz</b></Typography>
                    </Button>
                    <Button className={classes.cardBtn+" "+classes.green} variant="contained" onClick = {handleClick}>
                        <Typography className={classes.white}><b>Discussion</b></Typography>
                    </Button>
                </Grid>
}
                
            </Grid>
        </Grid>
    )
  }
  
export {HTMLCard}