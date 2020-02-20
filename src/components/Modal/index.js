import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import PropsTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Clear';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalAction from '../../actions/modal';
import { Modal } from '@material-ui/core';

class CommonModal extends Component {
    render() {
        const { open, classes, component, modalActionCreators, title } = this.props;
        const { hideModal } = modalActionCreators;
        return (
            <Modal open={open} onClose={hideModal}>
                <div className={classes.modal}>
                    <div className={classes.header}>
                        <span className={classes.title}>
                            {title}
                        </span>
                        <CloseIcon className={classes.icon}  onClick={hideModal}/>
                    </div>
                    <div className={classes.content}>
                        {component}
                    </div>
                </div>
            </Modal>
        );
    }
}

CommonModal.propTypes = {
    classes: PropsTypes.object,
    open: PropsTypes.bool,
    title: PropsTypes.string,
    component: PropsTypes.object,
    modalActionCreators: PropsTypes.shape({
        hideModal: PropsTypes.func,
    }),
};

const mapStateToProps = (state) =>({
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title,
});

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
(CommonModal);
