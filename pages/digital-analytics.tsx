import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Accordion from '../components/Accordion/Accordion';
import Card from '../components/Card/Card';
import { Typography } from '@material-tailwind/react';
import Testimonial from '../components/Testimonial/Testimonial';

type Props = {};

const DigitalAnalytics: NextPage<Props> = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Email: ${email}`);
    router.push('/thankyou');
  };

  return (
    <div className="text-secondary bg-primary">
      <section className="flex text-secondary bg-cover bg-center items-center justify-center bg-no-repeat" style={{ 
        backgroundImage: `url(${'analytics-hero.png'})`,
        height: '92vh'
      }} >
        <div className="flex flex-col justify-center items-center p-10 bg-black opacity-80 rounded-lg w-1/2">
          <h1 className="text-4xl font-bold text-center text-opacity-100">Unlock Your Business's Growth Potential with Data-Driven Insights</h1>
          <h2 className="text-xl font-semibold text-center pt-5">Identify Target Customer Habits and Increase Sales with our Analytics Strategy & Implementation Services</h2>
          <button onClick={() => router.push('/ga')} className="bg-secondary rounded-lg text-black px-10 py-3 mt-10">Learn more</button>
        </div>
      </section>

      <section className="problem p-10 bg-white flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 flex items-center justify-center p-10">
          <img src="mind-map.png" />
        </div>
        <div className="w-full md:w-2/3 p-10 flex md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-center mb-6 text-black">Running Blind: Failure to Track Customer Interactions</h2>
            <Typography className="text-center text-black">
              Every business owner is looking to increase sales conversions, but understanding how potential customers use your website and other marketing channels leading up to that target event is essential for growing your online sales. The cues visitors give you about their demographics, geographical region, timing and frequency, page views, mouse clicks, and other actions are valuable metrics that can be leveraged to persuade more prospective customers to take your offer. Over time this data can minimize your cost to acquire their business through highly-targeted marketing efforts.
            </Typography>
          </div>
        </div>
      </section>

      <section className="agitate bg-white flex items-center flex-col">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">Are you dealing with these issues?</h2>
        <div className="flex justify-center">
          <Card 
            imageUrl="spray.png"
            title="Spray & Pray"
            description="Do you know your marketing efforts will work or are you always wingin' it?"/>
          <Card 
            imageUrl="inaccuracy.png"
            title="Inaccurate Assumptions"
            description="You thought your strategy to get new clients was going to be a bullseye, but it didn't land well. What happened?"/>
          <Card 
            imageUrl="migraine.png"
            title="Frustration with Wasted Efforts"
            description="You feel like digital marketing is fancy way to throw good money after bad. Everything you've done has gone bust."/>
        </div>
      </section>

      <section className="p-10 w-3/4 mx-auto">
        <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-6">Measuring Analytics Helps Online business Owners:</h2>
            <Accordion />
        </div>
      </section>

      <section className="bg-white flex justify-center">
        <div className="w-5/6">
          <Testimonial />
        </div>
      </section>

      <section className="bg-white p-10 mx-auto">
        <form onSubmit={handleSubmit} className="bg-cultured w-full p-10 rounded-lg shadow-lg">
          <div className="mb-5">
            <h2 className="text-gray-700 text-xl pb-5 font-bold text-center">Not ready to collaborate? Our newsletter offers the ideal solution for those eager to expand their knowledge. Subscribe now!</h2>
            <hr className="border-accent border-2 border-dotted w-1/2 mx-auto mb-10" />
            <label className="block text-gray-700 font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-400 p-2 w-full focus:outline-none focus:border-accent focus:shadow-outline"
            />
          </div>
          <button type="submit" className="bg-accent text-primary py-2 px-4 rounded-full w-full transition duration-200 ease-in-out hover:bg-accent-lighter hover:text-primary-dark">Sign up</button>
        </form>
      </section>

    </div>
  );
};

export default DigitalAnalytics;
