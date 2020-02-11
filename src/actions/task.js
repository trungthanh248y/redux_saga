import * as taskApis from './../apis/task';
import * as taskConstants from './../constants/task';

export const fetchListTask = () => {
    return {
        type: taskConstants.FETCH_TASK,
    };
};

export const fetchListTaskSuccess = (data) => {
    return {
        type: taskConstants.FETCH_TASK_SUCCESS,
        payload: {
            data,
        }
    };
};

export const fetchListTaskFailed = (error) => {
    return {
        type: taskConstants.FETCH_TASK_FAILED,
        payload: {
            error,
        }
    };
};
// B1: Gọi fetchListTaskRequest()
// B2: Reset: state tasks => []
// B3: Gọi fetchListTaskSuccess ( với data truyền vào là responce)
export const fetchListTaskRequest = () => {
    return dispatch => {
        dispatch(fetchListTask());
        taskApis.getList().then(resp => {
            //Khi gọi các api thành công => gọi đến các dispatch tương ứng
            const { data } = resp;
            dispatch(fetchListTaskSuccess(data));
        }).catch(error => {
            dispatch(fetchListTaskFailed(error));
        });
    };
};