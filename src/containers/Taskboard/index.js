import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import style from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants';
import TaskList from './../../components/TaskList/index';
import TaskForm from '../TaskForm';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskAction from './../../actions/task';
import * as modalAction from './../../actions/modal';
import SearchBox from './../../components/SearchBox/index';
import { Box } from '@material-ui/core';


class TaskBoard extends Component {

    state = {
        open: false,
    };

    componentDidMount() {
        const { taskActionCreators } = this.props;
        const { fetchListTask } = taskActionCreators;
        fetchListTask();
    }

    renderBoard() {
        const { listTask } = this.props;
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status) => {
                        const taskFilltered = listTask.filter(task => task.status === status.value);
                        return <TaskList tasks={taskFilltered} status={status} key={status.value} />;
                    })
                }
                {/* xs={12} Khi co màn hình nhỏ lại nó sẽ là 12 */}
            </Grid>
        );
        return xhtml;
    }

    handleClose = () => {
        this.setState({
            open: false,
        });
    }

    openForm = () => {
        const { modalActionCreators } = this.props;
        const { showModal, changeModalTitle, changeModalContent } = modalActionCreators;
        showModal();
        changeModalTitle('Them moi');
        changeModalContent(<TaskForm />);
    }

    // renderForm() {
    //     const { open } = this.state;
    //     let xhtml = null;
    //     xhtml = (
    //         <TaskForm open={open} onClose={this.handleClose} />
    //     );
    //     return xhtml;
    // }

    loadData = () => {
        const { taskActionCreators } = this.props;
        const { fetchListTask } = taskActionCreators;
        fetchListTask();
    }

    handleFilter = (e) => {
        const { value } = e.target;
        const { taskActionCreators } = this.props;
        const { filterTask } = taskActionCreators;
        filterTask(value);
    }

    renderSearchBox = () => {
        let xhtml = null;
        xhtml = (
            <SearchBox handleChange={this.handleFilter}/>
        );
        return xhtml;
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskBoard}>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.loadData}>
                    Load Data
                </Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.openForm}>
                        <AddIcon /> Thêm mới công việc
                </Button>
                {this.renderSearchBox()}
                {this.renderBoard()}
                {/* {this.renderForm()} */}
            </div>
        );
    }
}
TaskBoard.propsTypes = {
    classes: PropsTypes.object,
    taskActionCreators: PropsTypes.shape({
        fetchListTask: PropsTypes.func,
        filterTask: PropsTypes.func,
    }),
    modalActionCreators: PropsTypes.shape({
        showModal: PropsTypes.func,
        hideModal: PropsTypes.func,
        changeModalTitle: PropsTypes.func,
        changeModalContent: PropsTypes.func,
    }),
    listTask: PropsTypes.array,
};

const mapStateToProps = (state) => {
    return {
        listTask: state.task.listTask,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        taskActionCreators: bindActionCreators(taskAction, dispatch),// Vẫn là dispath một action nhưng khi dùng bindActionCreators sẽ viết thuật tiện hơn 
        modalActionCreators: bindActionCreators(modalAction, dispatch),
    };
};


export default withStyles(style)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));
