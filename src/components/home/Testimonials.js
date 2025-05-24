import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 5rem 5%;
  background-color: #2c3e50;
  color: white;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: white;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 2rem;
  position: relative;
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -15px;
  left: 20px;
  font-size: 4rem;
  color: rgba(230, 126, 34, 0.3);
  font-family: Georgia, serif;
`;

const TestimonialText = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-style: italic;
  position: relative;
  z-index: 1;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  margin-right: 1rem;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  margin: 0;
  color: #e67e22;
`;

const AuthorTitle = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    text: "I'm absolutely in love with my new sofa! The quality is exceptional, and it fits perfectly in my living room. The customer service was also top-notch from start to finish.",
    author: "Sarah Johnson",
    title: "Interior Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    text: "ComfortZone has the best selection of office furniture I've found. My new desk and chair have made working from home so much more comfortable and productive.",
    author: "Michael Chen",
    title: "Software Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    text: "The dining set we purchased exceeded our expectations. The craftsmanship is beautiful, and the delivery team was professional and efficient. Highly recommend!",
    author: "Emily Rodriguez",
    title: "Restaurant Owner",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  return (
    <Section>
      <SectionTitle>What Our Customers Say</SectionTitle>
      <SectionSubtitle>
        Don't just take our word for it. Here's what our satisfied customers have to say about their experience with ComfortZone.
      </SectionSubtitle>
      
      <TestimonialGrid>
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id}>
            <QuoteIcon>"</QuoteIcon>
            <TestimonialText>{testimonial.text}</TestimonialText>
            <TestimonialAuthor>
              <AuthorImage style={{ backgroundImage: `url(${testimonial.image})` }} />
              <AuthorInfo>
                <AuthorName>{testimonial.author}</AuthorName>
                <AuthorTitle>{testimonial.title}</AuthorTitle>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </Section>
  );
};

export default Testimonials;

