import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

class SearchBox extends Component {
    render() {
        const { classes, handleChange } = this.props;
        return (
            <div>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            autoCapitalize="off"
                            className={classes.textField}
                            onChange={handleChange}
                            margin="normal"
                            placeholder="Nhap key"
                        />
                    </form>
            </div>
        );
    }
}

SearchBox.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(SearchBox);
