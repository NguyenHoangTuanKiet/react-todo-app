import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import store from './store'

import * as serviceWorker from './serviceWorker';


class ListItem extends React.Component {
  render() {
    return(
      <li>
        { this.props.value.title }
        <button onClick={()=>{this.props.onClick()}}>Remove</button>
      </li>
    );
  }

}


class TodoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      listItems: [ {title: "Todo#1", completed: false}, {title: "Todo#2", completed: false}, {title: "Todo#3", completed: false}, {title: "Todo#4", completed: false}, {title: "Todo#5", completed: false} ]
    }
  }

  handleRemoveClick(index) {
    const listItems = this.state.listItems.slice();
    listItems.splice(index, 1);
    this.setState({listItems: listItems});
  }

  render() {

    let listItems = this.state.listItems

    return  (
      <ul>
        {
          listItems.map((item, index) => {
            return(
              <ListItem value={item} onClick={ () => this.handleRemoveClick(index) } />
            )
          })
        }
      </ul>
    );

  }

}


ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
