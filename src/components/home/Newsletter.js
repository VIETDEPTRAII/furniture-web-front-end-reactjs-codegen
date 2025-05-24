import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 5rem 5%;
  background-color: #f5f5f5;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const SectionSubtitle = styled.p`
  max-width: 600px;
  margin: 0 auto 2rem;
  color: #777;
  line-height: 1.6;
`;

const NewsletterForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const EmailInput = styled.input`
  flex: 1;
  min-width: 200px;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #e67e22;
  }
`;

const SubmitButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: #e67e22;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #d35400;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  margin-top: 1rem;
  color: #27ae60;
  font-weight: 500;
`;

const ErrorMessage = styled.div`
  margin-top: 1rem;
  color: #e74c3c;
  font-weight: 500;
`;

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (email.includes('@') && email.includes('.')) {
        setStatus('success');
      } else {
        setStatus('error');
      }
      setLoading(false);
    }, 1500);
  };
  
  return (
    <Section>
      <SectionTitle>Stay Updated</SectionTitle>
      <SectionSubtitle>
        Subscribe to our newsletter to receive updates on new arrivals, special offers, and design tips.
      </SectionSubtitle>
      
      <NewsletterForm onSubmit={handleSubmit}>
        <EmailInput
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Subscribing...' : 'Subscribe'}
        </SubmitButton>
      </NewsletterForm>
      
      {status === 'success' && (
        <SuccessMessage>
          Thank you for subscribing! Check your email for a confirmation.
        </SuccessMessage>
      )}
      
      {status === 'error' && (
        <ErrorMessage>
          Please enter a valid email address.
        </ErrorMessage>
      )}
    </Section>
  );
};

export default Newsletter;

