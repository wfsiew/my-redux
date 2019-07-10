import React from 'react';
import { store } from '../js/store/index';
import { addArticle } from '../js/actions/index';

export class Home extends React.Component {

  constructor(props) {
    super(props);
    store.subscribe(() => console.log('Look ma, Redux!!'));
  }

  onSubmit = () => {
    store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );
  }

  onGetState = () => {
    let o = store.getState();
    console.log(o);
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={this.onSubmit} className="btn btn-primary">Submit</button>&emsp;
        <button onClick={this.onGetState} className="btn btn-primary">Get State</button>
      </div>
    )
  }
}