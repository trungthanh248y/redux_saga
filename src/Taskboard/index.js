import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import style from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../constants';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const listTask = [
    {//Tương đương dữ liệu mà server trả về
        id: 1,
        title: "Read book",
        description: "Read material ui book",
        status: 0
    },
    {
        id: 2,
        title: "Play football",
        description: "With my friend",
        status: 2
    },
    {
        id: 3,
        title: "Play game",
        description: "",
        status: 1
    }
]

class TaskBoard extends Component {

    rebderBoard() {
        const { classes } = this.props;
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status, index) => {
                        const taskFilltered = listTask.filter(task => task.status === status.value);
                        return (
                            <Grid item md={4} xs={12} key={status.value}>
                                <Box mt={2} mb={2}>
                                    <div className={classes.status}>{status.label}</div>
                                </Box>
                                <div className={classes.wrapperListTask}>
                                    {
                                        taskFilltered.map(task => {
                                            const { title } = task;
                                            return (
                                                <Card key={task.id} className={classes.card}>
                                                    <CardContent>
                                                        <Grid container justify="space-between">
                                                            <Grid item md={8}>
                                                                <Typography component="h2">
                                                                    {title}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item md={4}>
                                                                {status.label}
                                                            </Grid>
                                                        </Grid>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Button size="small"></Button>
                                                    </CardActions>
                                                </Card>
                                            )
                                        })
                                    }
                                </div>
                            </Grid>
                        )
                    })
                }
                {/* xs={12} Khi co màn hình nhỏ lại nó sẽ là 12 */}
            </Grid>
        );
        return xhtml;
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskBoard}>
                <Button variant="contained" color="primary" className={classes.button}>
                    <AddIcon /> Add CV
                </Button>
                {this.rebderBoard()}
            </div>
        );
    }
}

export default withStyles(style)(TaskBoard);
