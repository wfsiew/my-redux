import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { addArticle } from '../js/actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class ConnectedForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const id = uuid();
    this.props.addArticle({ title: this.state.title, id });
    this.setState({ title: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    )
  }
}

export const Form = connect(null, mapDispatchToProps)(ConnectedForm);