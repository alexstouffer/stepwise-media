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
    <div className="text-secondary">
      <div className="text-secondary bg-cover bg-center bg-no-repeat" style={{ 
        backgroundImage: `url(${'analytics-hero.png'})`,
        height: '120vh'
      }} >
        <div className="flex flex-col h-full justify-center items-center p-10 bg-black opacity-50 rounded-lg">
          <h1 className="text-4xl font-bold text-center">This 9 Step Framework Will Help Your Website Achieve Peak Performance</h1>
          <h2 className="text-xl font-semibold text-center">Unlock the power of your data with Google Analytics</h2>
          <p className="text-lg text-center mt-5">Are you tired of guessing how visitors interact with your website? Want to turn data into insights and turn insights into action? Look no further than Google Analytics. Our powerful and easy-to-use platform gives you the information you need to make data-driven decisions and improve your online presence. From understanding your audience to tracking your ROI, Google Analytics has you covered.</p>
          <button onClick={() => router.push('/ga')} className="bg-secondary text-black px-10 py-3 mt-10">Learn more</button>
        </div>
      </div>

      <div className="testimonials-section bg-primary p-10">
        <h3 className="text-center text-2xl p-2">What our customers are saying</h3>
        <div className="grid grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 bg-accent rounded-lg shadow">
              <p className="font-medium">"{testimonial.text}"</p>
              <p className="text-sm text-gray-600">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-cultured p-10 rounded-lg shadow-lg">
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-accent text-primary py-2 px-4 rounded-full">Sign up</button>
      </form>
    </div>
  );
};

export default GoogleAnalytics;
