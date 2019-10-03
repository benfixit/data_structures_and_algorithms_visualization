import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const NavUl = styled.ul`
  flex: 1;
  border: thin solid red;
  margin: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ContentDiv = styled.div`
  flex: 5;
  border: thin solid red;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 5px 0;
`;

const Layout = props => {
  const { children } = props;
  return (
    <Container>
      <NavUl>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/arrays">Arrays</StyledLink>
        <StyledLink to="/lists">Lists</StyledLink>
      </NavUl>
      <ContentDiv>{children}</ContentDiv>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
