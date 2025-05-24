import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  height: 80vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const Button = styled(Link)`
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &.primary {
    background-color: #e67e22;
    color: white;
    
    &:hover {
      background-color: #d35400;
    }
  }
  
  &.secondary {
    border: 2px solid white;
    color: white;
    
    &:hover {
      background-color: white;
      color: #333;
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Transform Your Space with Elegant Furniture</HeroTitle>
        <HeroSubtitle>
          Discover our collection of handcrafted furniture designed to bring comfort and style to your home.
          From modern to classic designs, we have something for every taste.
        </HeroSubtitle>
        <ButtonGroup>
          <Button to="/products" className="primary">Shop Now</Button>
          <Button to="/about" className="secondary">Learn More</Button>
        </ButtonGroup>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;

