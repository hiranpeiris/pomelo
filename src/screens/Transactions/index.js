import React, { Component } from 'react';
import { Text } from 'react-native';
import Page from '../../components/Page';
import Button from '../../components/Button';

class Transactions extends Component {
  render() {
    return (
      <Page paddingTop="40" paddingLeft="20" paddingRight="20">
        <Text>Transactions Screen</Text>
        <Button>Ok</Button>
      </Page>
    );
  }
}

export default Transactions;
