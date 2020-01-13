import React from 'react';
import PropTypes from 'prop-types';
import { PageView } from './Page.style';

const Page = ({
  bgColor,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  children,
}) => {
  return (
    <PageView
      bgColor={bgColor}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}>
      {children}
    </PageView>
  );
};

Page.defaultProps = {
  bgColor: undefined,
  paddingTop: undefined,
  paddingBottom: undefined,
  paddingLeft: undefined,
  paddingRight: undefined,
};

Page.propTypes = {
  bgColor: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Page;
