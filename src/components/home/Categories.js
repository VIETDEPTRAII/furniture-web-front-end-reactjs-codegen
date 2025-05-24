import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.section`
  padding: 5rem 5%;
  background-color: #f9f9f9;
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

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const CategoryCard = styled(Link)`
  position: relative;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7));
    z-index: 1;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const CategoryInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  z-index: 2;
`;

const CategoryName = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const CategoryCount = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
`;

// Sample category data
const categories = [
  {
    id: 1,
    name: 'Living Room',
    count: 24,
    image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    name: 'Bedroom',
    count: 18,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 3,
    name: 'Dining',
    count: 12,
    image: 'https://images.unsplash.com/photo-1594077244438-1a29a1f77a53?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 4,
    name: 'Office',
    count: 15,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 5,
    name: 'Outdoor',
    count: 9,
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

const Categories = () => {
  return (
    <Section>
      <SectionTitle>Browse by Category</SectionTitle>
      <SectionSubtitle>
        Explore our wide range of furniture categories to find the perfect pieces for every room in your home.
      </SectionSubtitle>
      
      <CategoryGrid>
        {categories.map(category => (
          <CategoryCard key={category.id} to={`/category/${category.name.toLowerCase().replace(' ', '-')}`}>
            <CategoryImage src={category.image} alt={category.name} />
            <CategoryInfo>
              <CategoryName>{category.name}</CategoryName>
              <CategoryCount>{category.count} Products</CategoryCount>
            </CategoryInfo>
          </CategoryCard>
        ))}
      </CategoryGrid>
    </Section>
  );
};

export default Categories;

