import React from 'react';

interface TabProps {
  label: string;
}

const Tab: React.FunctionComponent<TabProps> = ({ children }) => {
  return <>{children}</>;
};

export default Tab;
