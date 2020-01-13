import React, { Component } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import Page from '../../components/Page';
import SimpleListRow from '../../components/SimpleListRow';
import Loading from '../../components/Loading';
import { formatAmount, statusColor, createNavBar } from '../../utils';
import { setCurrentTransaction } from '../../actions';

class Transactions extends Component {
  static navigationOptions = createNavBar('Transactions');

  onSelectTransaction = transaction => {
    this.props.setCurrentTransaction(transaction);
    this.props.navigation.navigate('Info');
  };

  render() {
    const { transactions, isLoading, error } = this.props;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <Page paddingTop="20" paddingLeft="20" paddingRight="20">
        {error ? (
          <Text>{error}</Text>
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

const mapDispatchToProps = dispatch => ({
  setCurrentTransaction: transaction =>
    dispatch(setCurrentTransaction(transaction)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Transactions);
