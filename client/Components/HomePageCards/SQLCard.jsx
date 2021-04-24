import { Button, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
    },
    subHeader: {
        padding: '10px 0px',
    },
    cardBG: {
        padding: 50
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
    secondBtn: {
        backgroundColor: '#212121',
        '&:hover': {
            backgroundColor: 'black',
            color: 'white'
        },
        color: 'white'
    }
  });

const SQLCard = () => {
    const classes = useStyles();
    return (
        <Grid container >
            <Grid className={classes.cardBG} md={6} justify="center" align="center">
                <Grid item md={12}>
                    <Typography  className={classes.topicHeader}>
                        SQL
                    </Typography>
                    <Typography className={classes.subHeader} variant="h6" >
                    A language for accessing databases
                    </Typography>
                </Grid>
                <Grid container  direction="column" justify="space-between" md={5} className={classes.cardBtnSection}>
                    <Button className={classes.cardBtn+" "+classes.green} variant="contained" >
                        <Typography className={classes.white}><b>Learn SQL</b></Typography>
                    </Button>
                    <Button className={classes.cardBtn+" "+classes.secondBtn} variant="contained" >
                        <Typography className={classes.white}><b>SQL Reference</b></Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
  }
  
export {SQLCard}