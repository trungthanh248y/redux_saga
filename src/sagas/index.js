//root saga là một generator function
import { fork, take, call, put, delay, takeLatest, select } from 'redux-saga/effects';
import * as taskTypes from '../constants/task';
import { getList } from '../apis/task';
import { STATUS_CODE } from './../constants';
import { fetchListTaskSuccess, fetchListTaskFailed, filterTaskSuccess } from '../actions/task';
import { showLoading, hideLoading} from '../actions/ui';

// B1: Thực thi action fetch task
// B2: gọi api
// B2.1: Hiển thị tiến trình ( loading )
// B3: Kiểm tra status code
// B3.1: Xử lý nếu thành công or thất bại
// B4: tắt loading
// B5: Thực thi các công việc tiếp theo
function* watchFetchListTaskAction() {
    while(true) {//phải sd vòng lặp vô tận để fix lỗi take chỉ thực thi lần đâu khi chạy(sau khi sd thì action luôn dc lăng nghe và theo dõi)
        yield take(taskTypes.FETCH_TASK);//task
        //Nếu action FETCH_TASK chưa đưc dispath thì các đoạn code sau này k được thực thi
        yield put(showLoading());
        const resp = yield call(getList);
        //nó sẽ blog cho đến khi call xong
        const { status, data } = resp;
        if(status === STATUS_CODE.SUCCESS)
        {
            yield put(fetchListTaskSuccess(data));
        } else {
            yield put(fetchListTaskFailed(data));
        }
        yield delay(1000);//thời gian gọi api + delay = thời gian load data
        yield put(hideLoading());
    }

}

function* watchCreateTaskAction() {
    console.log('watch Create TaskAction');
}

function* filterTaskSaga({ payload }) {
    yield delay(500);// Sử dụng delay để khi nhập đến từ khóa cuối cùng 0.5s ms thực hiện gọi api
    const { keyword } = payload;
    const list = yield select(state => state.task.listTask);//Sử dụng select để gọi từ store vào saga
    const filteredTask = list.filter(task => 
        task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase())
    );
    yield put(filterTaskSuccess(filteredTask));
}

function* rootSaga() {//tương tự rootReducers rootSaga dùng để chia nhỏ các file xử lý saga
    yield fork(watchFetchListTaskAction);//fork là non-blocking(k có thứ tự)
    yield fork(watchCreateTaskAction);
    yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);//Chức năng search
}

export default rootSaga;