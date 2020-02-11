import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';
import styles from './styles';

class TaskForm extends Component {
    render() {
        const { open, onClose } = this.props;
        return (
            <div>
                <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Thêm mới công việc</DialogTitle>
                    <DialogContent>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Name"
                        rowsMax="4"
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Multiline"
                        multiline
                        rowsMax="4"
                        // variant="outlined"
                    />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onClose} color="primary">
                            Cancel
                    </Button>
                        <Button onClick={onClose} color="primary">
                            Ok
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(TaskForm);
