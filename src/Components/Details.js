import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common/CardSection';

class Details extends Component {

  render() {
    const { body } = this.props.data;

    return (
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {body}
            </Text>
          </CardSection>
        </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default Details;
