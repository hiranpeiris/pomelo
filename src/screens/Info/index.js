import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import Page from '../../components/Page';
import { formatAmount, statusColor, createNavBar } from '../../utils';

class Info extends Component {
  static navigationOptions = createNavBar('Info');

  render() {
    const { transactions, isLoading, error } = this.props;

    if (isLoading) {
      return <View />;
    }

    return (
      <Page paddingTop="20" paddingLeft="20" paddingRight="20">
        <View />
      </Page>
    );
  }
}

const mapStateToProps = ({ transactions, isLoading, error }) => ({
  transactions,
  isLoading,
  error,
});

export default connect(
  mapStateToProps,
  null,
)(Info);
