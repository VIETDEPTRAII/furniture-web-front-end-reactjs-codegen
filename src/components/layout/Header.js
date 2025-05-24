import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  
  span {
    color: #e67e22;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #e67e22;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled(Link)`
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &.primary {
    background-color: #e67e22;
    color: white;
    
    &:hover {
      background-color: #d35400;
    }
  }
  
  &.secondary {
    border: 1px solid #e67e22;
    color: #e67e22;
    
    &:hover {
      background-color: #e67e22;
      color: white;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        Comfort<span>Zone</span>
      </Logo>
      
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
      
      <ButtonGroup>
        <Button to="/login" className="secondary">Login</Button>
        <Button to="/cart" className="primary">Cart (0)</Button>
      </ButtonGroup>
    </HeaderContainer>
  );
};

export default Header;

