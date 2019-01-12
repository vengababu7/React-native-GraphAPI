import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Details from './Details';

class MovieDetails extends Component {

  renderDetails() {
    return this.state.movie.comments.map(comment =>
      <Details key={comment.body} data={comment} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderDetails()}
      </ScrollView>
    );
  }
}

export default MovieDetails;
