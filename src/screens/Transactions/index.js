import React, { Component } from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import Page from '../../components/Page';
import SimpleListRow from '../../components/SimpleListRow';
import { formatAmount, statusColor, createNavBar } from '../../utils';

class Transactions extends Component {
  static navigationOptions = createNavBar('Transactions');

  onSelectTransaction = transaction => {
    this.props.navigation.navigate('Info', { transaction });
  };

  render() {
    const { transactions, isLoading, error } = this.props;

    if (isLoading) {
      return <View />;
    }

    return (
      <Page paddingTop="20" paddingLeft="20" paddingRight="20">
        {error ? (
          <View />
        ) : (
          <FlatList
            data={transactions}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => this.onSelectTransaction(item)}>
                <SimpleListRow
                  title={item.merchant}
                  desc={formatAmount(item.amount)}
                  bottomLeftText={item.status}
                  bottomLeftTextColor={statusColor(item.status)}
                  bottomRightText={moment(item.date).format('lll')}
                />
              </TouchableOpacity>
            )}
          />
        )}
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
)(Transactions);
