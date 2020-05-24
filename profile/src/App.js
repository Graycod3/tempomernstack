import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Admin/login.js';
import Profile from './Admin/profile';
import CreatProfile from './Admin/creatProfile';
import Info from './Admin/info';
import DisplayInfo from './Admin/dislayInfo';

class App  extends React.Component{
render(){
  return (
    <div>
      <CreatProfile/>
      <Info/>
    </div>
  );
}
}
export default App;
