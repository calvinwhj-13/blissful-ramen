import React, {Component} from 'react'
import { Text, View, Button } from 'react-native';

class RedButton extends Component {
  displayAlert=()=> {
    alert("red button")
  }
  render() {
    return (
      < Button color={this.props.color} title="sound 1" onPress={this.displayAlert}/>
    )
  }
}

class BlueButton extends Component {
  displayAlert=()=> {
    alert("blue button")
  }
  render() {
    return (
      < Button color={this.props.color} title="sound2" onPress={this.displayAlert}/>
    )
  }
}

class PurpleButton extends Component {
  displayAlert=()=> {
    alert("purple button")
  }
  render() {
    return (
      < Button color={this.props.color} title="sound4" onPress={this.displayAlert}/>
    )
  }
}

class GreenButton extends Component {
  displayAlert=()=> {
    alert("green button")
  }
  render() {
    return (
      < Button color={this.props.color} title="sound3" onPress={this.displayAlert}/>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <RedButton color="red"/>
        <BlueButton color="blue"/>
        <PurpleButton color="purple"/>
        <GreenButton color="green"/>
      </View>
    );
  }
}