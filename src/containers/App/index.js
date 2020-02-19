import React, { Component } from 'react';
import style from './styles.js';
import { ThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';//Để chạy file style trên file index này
import Taskboard from './../Taskboard';
import theme from "./../../commons/Theme";//Nhúng file Theme để sd trong cả project
import { Provider } from 'react-redux';
import configureStore from './../../reudx/configureStore';
// import toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GloballLoading from '../../components/GloballLoading/index.js';

const store = configureStore();

class App extends Component {
  render() {
    console.log('prop: ', this.props);
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <GloballLoading />
          <Taskboard />
        </ThemeProvider>
      </Provider>
      // <div className="App">
      //   <h1>Redux saga</h1>
      //   <Button variant="contained" color="primary">Material UI Button</Button>
      //   <div className={classes.box}>
      //     <div className={classes.shape}>Reactjs</div>
      //     <div className={classes.shape}>AngularJS</div>
      //     <div className={classes.shape}>VueJS</div>
      //   </div>
      // </div>
    );
  }
}

export default withStyles(style)(App);//sd tổ hợp rcc để tạo nhanh 1 component

//themes lơi khai báo mầu xắc kích thước cố định
