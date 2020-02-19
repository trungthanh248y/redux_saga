//File này dùng để chứ file cấu hình store và tích hợp các middleware, và chứa một số middleware cần thiết
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';

const composeEnhancers = 
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
    })
    : compose;// tool check store trong redux

//tạo ra một saga
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const middleware = [
        //List middleware
        thunk,//Nhúng thunk vào project
        sagaMiddleware//Nhúng saga vào project
    ];
    const enhancers = [
        //Chạy các List middleware
        applyMiddleware(...middleware)
    ];//...middleware dùng es6 để truyền lần lượt vào đối với array
    const store = createStore(rootReducer, composeEnhancers(...enhancers));
    
    sagaMiddleware.run(rootSaga);//rootSaga là một root saga tương tự như 1 root reducers vậy 

    return store;
};
//run: Để chương trình con bắt đầu theo dõi các action(saga: tương tụ 1 ctrinh con, 1 projoset con, 1 ứng dụng chạy lền dùng để theo dõi action)

export default configureStore;