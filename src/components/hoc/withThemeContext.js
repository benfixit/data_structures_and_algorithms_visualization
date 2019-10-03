import React, { useContext } from 'react';
import hoistStatics from 'hoist-non-react-statics';
import ThemeContext from '../contexts/ThemeContext';

const withThemeContext = WrappedComponent => {
  const WithThemeContext = props => {
    const theme = useContext(ThemeContext);
    return <WrappedComponent {...props} theme={theme} />;
  };
  hoistStatics(WrappedComponent, WithThemeContext);
  return WithThemeContext;
};

export default withThemeContext;
