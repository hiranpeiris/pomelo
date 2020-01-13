import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import Page from '../../components/Page';
import SimpleListRow from '../../components/SimpleListRow';
import { formatAmount, statusColor } from '../../utils';

class Transactions extends Component {
  render() {
    const { transactions, isLoading, error } = this.props;

    if (isLoading) {
      return <View />;
    }

    return (
      <Page paddingTop="40" paddingLeft="20" paddingRight="20">
        {error ? (
          <View />
        ) : (
          <FlatList
            data={transactions}
            renderItem={({ item }) => (
              <SimpleListRow
                key={item.id}
                title={item.merchant}
                desc={formatAmount(item.amount)}
                bottomLeftText={item.status}
                bottomLeftTextColor={statusColor(item.status)}
                bottomRightText={moment(item.date).format('lll')}
              />
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
