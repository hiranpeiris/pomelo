import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Page from '../../components/Page';
import Button from '../../components/Button';
import { BoldText, GrayText, ColorText, VSpacer, RowView } from './Info.style';
import { formatAmount, statusColor, createNavBar } from '../../utils';
import { TRANSACTIONS_STATUS } from '../../constants';

class Info extends Component {
  static navigationOptions = createNavBar('Info');

  render() {
    const { currentTransaction } = this.props;

    return (
      <Page paddingTop="30" paddingLeft="20" paddingRight="20">
        <GrayText fontSize={12}>MERCHANT</GrayText>
        <VSpacer />
        <BoldText fontSize={40}>{currentTransaction.merchant}</BoldText>
        <VSpacer space={20} />
        <GrayText fontSize={12}>PAYMENT</GrayText>
        <VSpacer />
        <ColorText fontSize={30} color="purple" bold>
          {formatAmount(currentTransaction.amount)}
        </ColorText>
        <VSpacer space={20} />
        <GrayText fontSize={12}>TRANSACTION STATUS</GrayText>
        <VSpacer />
        <ColorText
          fontSize={20}
          color={statusColor(currentTransaction.status)}
          bold>
          {currentTransaction.status}
        </ColorText>
        <VSpacer space={20} />
        <GrayText fontSize={12}>DATE</GrayText>
        <VSpacer />
        <GrayText fontSize={15}>
          {moment(currentTransaction.date).format('lll')}
        </GrayText>
        <VSpacer space={60} />
        <RowView>
          {currentTransaction.status === TRANSACTIONS_STATUS.COMPLETED ? (
            <Button color="#FF9966" width="140">
              REFUND THIS
            </Button>
          ) : null}
          <Button width="140">REFUND ALL</Button>
        </RowView>
      </Page>
    );
  }
}

const mapStateToProps = ({ currentTransaction }) => ({
  currentTransaction,
});

export default connect(
  mapStateToProps,
  null,
)(Info);
