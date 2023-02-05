import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router'

type Props = {};

const GoogleAnalytics: NextPage<Props> = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Email: ${email}`);
    router.push('/thankyou');
  };

  const testimonials = [
    {
      name: 'John Doe',
      title: 'CEO',
      company: 'XYZ Corp',
      text: 'Google Analytics has helped me to understand my audience better and make data-driven decisions. I highly recommend it.'
    },
    {
      name: 'Jane Smith',
      title: 'CEO',
      company: 'XYZ Corp',
      text: 'I was able to increase my website conversion rate by 30% thanks to the insights provided by Google Analytics.'
    },
    {
      name: 'Bob Johnson',
      title: 'CEO',
      company: 'XYZ Corp',
      text: "I never knew how much data my website was collecting until I started using Google Analytics. It's a game changer."
    }
  ];

  return (
    <div>
      <h1>This 9 Step Framework Will Help Your Website Achieve Peak Performance</h1>
      <div className="story-section">
        <img src="analytics-mountain4.png" alt="Google Analytics" width="700"/>
        <h2>Unlock the power of your data with Google Analytics</h2>
        <p>Are you tired of guessing how visitors interact with your website? Want to turn data into insights and turn insights into action? Look no further than Google Analytics. Our powerful and easy-to-use platform gives you the information you need to make data-driven decisions and improve your online presence. From understanding your audience to tracking your ROI, Google Analytics has you covered.</p>
        <button onClick={() => router.push('/ga')}>Learn more</button>
      </div>

      <div className="testimonials-section">
        <h3>What our customers are saying</h3>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>&quot;{testimonial.text}&quot;</p>
            <p className="testimonial-author">- {testimonial.name}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default GoogleAnalytics;
