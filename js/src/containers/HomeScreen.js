import { connect } from 'react-redux';

import HomeComponent from '../components/Home';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeScreen;
