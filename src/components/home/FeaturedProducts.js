import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.section`
  padding: 5rem 5%;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  color: #777;
  line-height: 1.6;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.div`
  height: 250px;
  background-size: cover;
  background-position: center;
`;

const ProductInfo = styled.div`
  padding: 1.5rem;
`;

const ProductCategory = styled.span`
  font-size: 0.8rem;
  color: #e67e22;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ProductName = styled.h3`
  margin: 0.5rem 0;
  font-size: 1.2rem;
  color: #333;
`;

const ProductPrice = styled.p`
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const ProductButton = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #e67e22;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #d35400;
  }
`;

// Sample product data
const products = [
  {
    id: 1,
    name: 'Modern Sofa',
    category: 'Living Room',
    price: '$899',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    name: 'Wooden Dining Table',
    category: 'Dining',
    price: '$649',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 3,
    name: 'Ergonomic Office Chair',
    category: 'Office',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 4,
    name: 'King Size Bed',
    category: 'Bedroom',
    price: '$1,299',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

const FeaturedProducts = () => {
  return (
    <Section>
      <SectionTitle>Featured Products</SectionTitle>
      <SectionSubtitle>
        Discover our handpicked selection of premium furniture pieces that combine style, comfort, and durability.
      </SectionSubtitle>
      
      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            <ProductImage style={{ backgroundImage: `url(${product.image})` }} />
            <ProductInfo>
              <ProductCategory>{product.category}</ProductCategory>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductButton to={`/product/${product.id}`}>View Details</ProductButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </Section>
  );
};

export default FeaturedProducts;

