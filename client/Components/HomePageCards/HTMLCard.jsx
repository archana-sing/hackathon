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
    }
  });

const HTMLCard = () => {
    const classes = useStyles();
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
                <Grid container  direction="column" justify="space-between" md={5} className={classes.cardBtnSection}>
                    <Button className={classes.cardBtn+" "+classes.green} variant="contained" >
                        <Typography className={classes.white}><b>Learn HTML</b></Typography>
                    </Button>
                    <Button className={classes.cardBtn} variant="contained" >
                        <Typography className={classes.black}><b>HTML Reference</b></Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
  }
  
export {HTMLCard}