import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../js/actions/index';

export class ConnectedPost extends React.Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.getData();
  }

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

const mapStateToProps = state => {
  return { articles: state.remoteArticles.slice(0, 10) };
};

export const Post = connect(mapStateToProps, { getData })(ConnectedPost);