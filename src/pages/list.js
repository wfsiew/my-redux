import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { articles: state.articles };
};

class ConnectedList extends React.Component {

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.articles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    )
  }
}

export const List = connect(mapStateToProps)(ConnectedList);