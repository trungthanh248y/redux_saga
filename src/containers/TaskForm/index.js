import { Box, Grid, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropsTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalAction from '../../actions/modal';

class TaskForm extends Component {
    render() {
        const { classes, modalActionCreators } = this.props;
        const { hideModal } = modalActionCreators;
        return (
            <form>
                <Grid container>
                    <Grid item md={12}>
                        <TextField
                        id="standard-name"
                        label="Name"
                        className={classes.textField}
                        margin="normal"
                        />
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                        id="outlined-multiline-flexible"
                        label="Multiline"
                        multiline
                        className={classes.textField}
                        margin="normal"
                        // variant="outlined"
                        />
                    </Grid>
                    <Grid item md={12}>
                        <Box display="flex" flexDirection="row-reverse" mt={2}>
                            <Box ml={1}>
                                <Button variant="contained" color="primary">
                                    Luu Lai
                                </Button>
                            </Box>
                            <Button variant="contained" onClick={hideModal}>
                                    Huy Bo
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        );
    }
}
TaskForm.protoTypes = {
    classes: PropsTypes.object,
    modalActionCreators: PropsTypes.shape({
        hideModal: PropsTypes.func,
    }),
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    modalActionCreators: bindActionCreators(modalAction, dispatch),
});

const withConnect = connect(
    mapStateToProps, 
    mapDispatchToProps,
);

export default compose(
    withStyles(styles),
    withConnect,
)
(TaskForm);