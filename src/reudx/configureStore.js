//File này dùng để chứ file cấu hình store và tích hợp các middleware, và chứa một số middleware cần thiết
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/index';

const composeEnhancers = 
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
    })
    : compose;// tool check store trong redux

const configureStore = () => {
    const middleware = [
        //List middleware
        thunk
    ];
    const enhancers = [
        //Chạy các List middleware
        applyMiddleware(...middleware)
    ];//...middleware dùng es6 để truyền lần lượt vào đối với array
    const store = createStore(rootReducer, composeEnhancers(...enhancers));
    return store;
};

export default configureStore;