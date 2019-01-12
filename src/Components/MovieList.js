import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { movieFetch } from '../actions';
import Movie from './Movie';

class MovieList extends Component {

  componentWillMount() {
    this.props.movieFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ Movies }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(Movies);
  }

  renderRow(movie) {
    return <Movie movie={movie} />;
  }

  render() {
    return (
      <ListView
      enableEmptySections
      dataSource={this.dataSource}
      renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
const movies = _.map(state.data.reddit.subreddit.newListings, (val, title) => {
  return { ...val, title };
});
return { movies };
};


export default connect(mapStateToProps, { movieFetch })(MovieList);
