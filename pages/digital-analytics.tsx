import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Accordion from '../components/Accordion/Accordion';
import Card from '../components/Card/Card';
import { Typography } from '@material-tailwind/react';
import Testimonial from '../components/Testimonial/Testimonial';
import PriceCard from '../components/PriceCard/PriceCard';
import PriceCarousel from '../components/PriceCarousel/PriceCarousel';

type Props = {};

const DigitalAnalytics: NextPage<Props> = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Email: ${email}`);
    router.push('/thankyou');
  };

  const accordionItems = [
    {
      id: 1,
      headerText: 'Make Informed Decisions',
      bodyText: 'Measuring analytics provides online business owners with quantitative data on key metrics such as website traffic, user behavior, and conversion rates. Without this data, business owners may rely on assumptions or gut feelings when making important decisions about how to invest limited time and money toward their website, marketing campaigns, or business strategy. This can lead to suboptimal decisions that don\'t accurately reflect the reality of their business.',
    },
    {
      id: 2,
      headerText: 'Craft Better Offers',
      bodyText: 'Measuring analytics allows online business owners to identify areas of their sales funnels that are underperforming and optimize them to improve conversions. For example, analytics data can reveal which stages of the sales funnel are causing the most drop-offs, which website pages are most effective at converting leads into customers, and which marketing channels are driving the most qualified leads.',
    },
    {
      id: 3,
      headerText: 'Refine Customer Experience',
      bodyText: 'A/B tests enable incremental changes to website or application design, allowing business owners to test variations of a webpage or feature to determine which version performs better with users. Personalized user experiences can also be created using analytics data, which can reveal which products or services a user is interested in, which emails they\'re opening and clicking on, and which website pages they\'re spending the most time on. This data can be used to create personalized product recommendations, email campaigns, and website content, all optimized for different devices and potential marketing touchpoints.',
    },
  ];

  const standardFeatures = [
    "Analytics & Tag Manager Audit",
    "Datalayer Configurations",
    "UTM Link Tracking Audit",
    "Custom Events Reports",
    "Strategy Development & Implementation",
  ];

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
          <img className="rounded-xl" src="mind-map.png" />
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

      <section className="agitate bg-white flex flex-col p-10">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">Are you dealing with these issues?</h2>
        <div className="flex flex-col md:flex-row items-center md:items-stretch"> {/* added items-center for mobile, items-stretch for desktop */}
          <Card
            imageUrl="inaccuracy.png"
            title="Flawed Forecasting"
            description="You thought your strategy to get new clients was going to be a bullseye, but let's just say it didn't land well. What happened?"
            className="mb-6 md:mb-0 md:mx-6 h-full"
            dialogueHeader="There's a better way to take aim"
            dialogueBody="We can help you use data to better understand your customers and improve your targeting strategy. Our team of experts will work with you to identify the key metrics that matter to your business and provide insights that can help you optimize your campaigns and increase conversions."
          />
          <Card
            imageUrl="spray.png"
            title="Spraying & Praying"
            description="You've spent months on end using different methods and strategies without hitting the sales mark, but you're hoping the next thing works."
            className="mb-6 md:mb-0 md:mr-6 h-full"
            dialogueHeader="Focus your efforts for maximum impact"
            dialogueBody="We'll help you identify the tactics that are most likely to work for your business, and provide guidance on how to optimize them for better results. By focusing your efforts on the right strategies and tactics, you can improve your ROI and get the results you're looking for."
          />
          <Card
            imageUrl="migraine.png"
            title="Work Hours Wasted"
            description="You feel like digital marketing is a fancy way to throw good money after bad. Everything you've done has gone bust. You're done dedicating your time."
            className="mb-6 md:mb-0 md:ml-6 h-full"
            dialogueHeader="Don't waste another minute on ineffective marketing"
            dialogueBody="Our team of experts will work with you to develop a comprehensive digital marketing strategy that's tailored to your business. By using data to inform our decisions, we'll help you make the most of your marketing budget and get the results you're looking for. Say goodbye to wasted time and money and hello to a smarter, more effective marketing approach."
          />
        </div>
      </section>

      <section className="solution p-10 w-full mx-auto bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Say Goodbye to Guesswork: Let Us Help You Use Existing Customer Data to Raise Transaction Volume</h2>
          <div className="border-t border-b border-gray-200 py-8">
            <div className="space-y-4">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      <section className="pricing bg-white" >
        <div className="flex p-10 justify-center h-full space-x-4">
          <PriceCard title="Basic" monthlyFee={800} features={standardFeatures} className="h-full w-80 flex-shrink-0" />
          <PriceCard title="Standard" monthlyFee={1000} features={standardFeatures} className="h-full w-80 flex-shrink-0" />
          <PriceCard title="Business" monthlyFee={2000} features={standardFeatures} className="h-full w-80 flex-shrink-0" />
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
            <h2 className="text-gray-700 text-xl pb-5 font-bold text-center">Our newsletter is the ideal solution for those eager to expand their knowledge. Subscribe now!</h2>
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
