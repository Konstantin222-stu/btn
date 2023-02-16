import logo from './logo.svg';
import './App.css';
import Button from './button/Button';
import { Component } from 'react';

class App extends Component {
  render(){
  return (
    <div>
    <Button variant="outline"/>
    <Button/>
    <Button variant="not_box_shadow"/>
    <Button variant="not_button"/>
    <Button variant="big"/>
    <Button variant="littel"/>
    <Button variant="red"/>
    <Button variant="blue"/>
    <Button variant="blue" img="settings"/>
    </div>
  );
  }
}

export default App;
