import React, { Component } from 'react';
import loadingIcon from '../../assets/images/loading.gif';
import styles from '../GloballLoading/styles';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as uiActions from './../../actions/ui';

class GlobalLoading extends Component {
    render() {
        const { classes, showLoading } = this.props;
        let xhtml = null;
        if(showLoading) {
            xhtml = (
                <div className={classes.globalloading}>
                    <img src={loadingIcon} alt="loading" className={classes.icon} />
                </div>
            );
        }
        return xhtml;
    }
}

GlobalLoading.propTypes = {
    classes: PropTypes.object,
    showLoading: PropTypes.bool,
};

const mapStateToProps = state => {
    return {
        showLoading: state.ui.showLoading,
    };
};

const withConnect = connect(mapStateToProps, null);

export default compose(
    withStyles(styles),
    withConnect,
)(GlobalLoading);
