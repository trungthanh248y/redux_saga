import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import style from './styles.js';
import { ThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';//Để chạy file style trên file index này
import Taskboard from '../../Taskboard/index.js';
import theme from "./../../commons/Theme";//Nhúng file Theme để sd trong cả project

class App extends Component {
  render() {
    console.log('prop: ', this.props);
    return (
      <ThemeProvider theme={theme}>
        <Taskboard />
      </ThemeProvider>
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
