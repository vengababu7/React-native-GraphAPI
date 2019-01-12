import React from 'react';
import { Image } from 'react-native';
import { Scene, Router, Stack, Tabs } from 'react-native-router-flux';
import MovieDetails from './Components/MovieDetails';
import MovieList from './Components/MovieList';

//const backImage = require('./Images/GroupAssets/Path6178.png');

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="auth">
      <Scene key="MovieList" component={MovieList} hideNavBar />
      <Scene
      key="MovieDetails"
      direction="vertical"
      modal
      component={MovieDetails}
      hideNavBar={false}
      navigationBarStyle={styles.navBar}
    //  backButtonImage={backImage}
      leftButtonIconStyle={styles.leftButtonStyle}
      />
      </Stack>

    </Router>
  );
};

const styles = {
  navBar: {
    backgroundColor: '#1A103A', // changing navbar color
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0
  },
  leftButtonStyle: {
    width: 20,
    height: 20,
    paddingLeft: 30,
  },
  container: {
  width: 48,
  height: 42,
  padding: 5,
  justifyContent: 'center',
  alignItems: 'center',
   },
   tabBar: {
    backgroundColor: '#fff',
   },
   navigationBarStyle: {
     backgroundColor: 'red',
   },
   navigationBarTitleStyle: {
     color: 'white',
   }
};


export default RouterComponent;
