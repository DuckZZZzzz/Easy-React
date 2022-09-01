
import React, { Component } from './lib/react.js';
import ReactDOM from './lib/react-dom.js';


// class Menu extends React.Component {
//   render() {
//     return <h1> menu  {this.props.title} </h1>;
//   }
// }


function Menu(props) {
  return  <h1> Hello {props.title} </h1>;
}


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'app'
    }
  }

  handleClick() {
    this.setState({
      title: 'you'
    })
  }

  render() {
    return (
      <div>
        <Menu title={this.state.title}/>
        <h1>{ this.props.id } { this.state.title } </h1>
        <span onClick={this.handleClick.bind(this)}>点我</span>
      </div>
    );
  }
}


ReactDOM.render((
  <App id="Hello"/>
), document.body);


// let vdom = React.createElement(App, null)
// console.log('------')
// console.log(vdom)
// ReactDOM.render( vdom, document.body);