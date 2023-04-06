import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Accordion from '../components/Accordion/Accordion';
import Card from '../components/Card/Card';
import { Typography } from '@material-tailwind/react';
import Testimonial from '../components/Testimonial/Testimonial';
import PriceCard from '../components/PriceCard/PriceCard';
import AnimatedHeartBeat from '../components/AnimatedHeartBeat/AnimatedHeartBeat';
import NewsletterForm from '../components/NewsletterSignup/NewsletterSignup';

type Props = {};

const WebDevelopment: NextPage<Props> = () => {
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
      headerText: 'Attract Your Target Audience',
      bodyText: "Content marketing starts with understanding how your target audience uses search. People developing buying intent ask different questions throughout their customer journey. That tells us where they are at in a potential sales funnel, and the earlier you join them in their journey the better your chances of accelerating their passage through your funnel. Better yet, great content can develop a relationship where audience members view you as a trusted advisor and trading partner. That means our goal is to write well developed highly-targeted and sought after information where your product or service fits naturally.",
    },
    {
      id: 2,
      headerText: 'Build Domain & Brand Authority',
      bodyText: 'Dominating the ranking of Search Engine Results Pages (SERPS) is crucial for creating passive monthly traffic for your website. The top 3 positions pull the lions share of pass through traffic, and there are ',
    },
    {
      id: 3,
      headerText: 'Gain Income From Passive Traffic',
      bodyText: 'Content marketing can also help you generate leads and sales by creating content that addresses the pain points and challenges of your target audience, and that demonstrates how your product or service can help solve those problems. By creating content that speaks directly to your target audience, you can attract qualified leads and move them through the sales funnel.',
    },
  ];
  
  const faqs = [
    {
      id: 1,
      headerText: "How does keyword research help my content marketing efforts?",
      bodyText:
        "Keyword research helps identify the most relevant and high-volume keywords in your industry, enabling you to create content that targets those keywords and attracts more qualified traffic to your website. By using the right keywords in your content, you can improve your search engine rankings and drive more traffic to your website, which can ultimately lead to more leads and sales.",
    },
    {
      id: 2,
      headerText: "Can a blog be used as a monetary tool?",
      bodyText:
        "Yes, a blog can be used as a monetary tool by creating high-quality, engaging content that attracts a loyal audience. Once you have built a following, you can monetize your blog through various means such as sponsored posts, affiliate marketing, or selling your own products or services.",
    },
    {
      id: 3,
      headerText: "How can content marketing help me build an audience?",
      bodyText:
        "Content marketing can help you build an audience by providing valuable, relevant content that your target audience is searching for. By creating high-quality content that answers their questions and addresses their pain points, you can establish yourself as a thought leader in your industry and attract a loyal following.",
    },
    {
      id: 4,
      headerText: "How is success gauged in content marketing?",
      bodyText:
        "Success in content marketing can be gauged by various metrics such as website traffic, social media engagement, email open and click-through rates, leads generated, and sales. By tracking these metrics and analyzing the data, you can make data-driven decisions to optimize your content marketing strategy and achieve better results over time.",
    },
    {
      id: 5,
      headerText: "What results can I expect to see from monthly content marketing services?",
      bodyText:
        "Results from monthly content marketing services vary depending on the complexity of the project and the specific goals of the client, but typically clients see improvement in website traffic, search engine rankings, social media engagement, and lead generation. Our team of experts will work with you to set specific goals and create a content marketing strategy tailored to your unique needs and objectives.",
    },
    {
      id: 6,
      headerText: "What is included in the monthly content marketing service?",
      bodyText:
        "The monthly content marketing service includes ongoing keyword research and analysis, content strategy development, blog post creation and optimization, social media management, and performance reporting. Our team of experts will work closely with you to ensure that your content marketing strategy is aligned with your business goals and tailored to your unique needs.",
    }
  ];
    

    const basicFeatures = [
    "Keyword Research & Analysis",
    "Blog Topic Research & Planning",
    "On-Page SEO Optimization",
    "Basic Content Creation & Publishing",
    "$100 Built-In Advertising Budget"
    ];
    
    const standardFeatures = [
    "Everything in Basic Tier",
    "Google Web Vitals Audit",
    ]
    
    const businessFeatures = [
    "Everything in Standard Tier",
    "Custom Branded Visual Content Creation",
    "Instant Access to our Process Automation Pilot Program",
    "$500 Advertising Budget",
    "Additional Budgeting Without Management Fees",
    ]

  return (
    <div className="text-secondary bg-primary">
      <section className="flex text-secondary bg-cover bg-center items-center justify-center bg-no-repeat" style={{ 
        backgroundImage: `url(${'money-printer.png'})`,
        height: '92vh'
      }} >
        <div className="flex flex-col justify-center items-center p-10 bg-black opacity-80 rounded-lg w-1/2">
            <h1 className="text-4xl font-bold text-center text-opacity-100">Create Content That Draws Traffic Passively</h1>
            <h2 className="text-xl font-semibold text-center pt-5">Businesses who can't attract an audience are stuck paying for one.</h2>          
            <button onClick={() => router.push('/ga')} className="bg-secondary rounded-lg text-black px-10 py-3 mt-10">Learn more</button>
        </div>
      </section>

      <section className="problem p-10 bg-white flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 flex items-center justify-center p-10 bg-[url('/money-printer.png')] bg-right bg-auto rounded-xl">
        </div>
        <div className="w-full md:w-2/3 p-10 flex md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-center mb-6 text-black">Printing Relevant High-Quality Content is Like Printing Money</h2>
            <Typography className="text-center text-black">
                When it comes to content marketing, creating high-quality content that resonates with your audience is essential. However, it's not enough to simply produce great content and hope for the best. To truly maximize the impact of your content, you need to ensure that it's optimized for search engines and targeted towards the right keywords. This is where keyword research comes in. By identifying the keywords that your target audience is searching for, you can tailor your content to meet their needs and improve your chances of ranking highly in search results. This, in turn, can drive more traffic to your website and ultimately result in more leads and sales. In essence, printing relevant high-quality content that is optimized for the right keywords is like printing money for your business.            </Typography>
          </div>
        </div>
      </section>

      <section className="agitate bg-white flex flex-col p-10">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">Are you dealing with these issues?</h2>
        <div className="flex flex-col md:flex-row items-center md:items-stretch"> {/* added items-center for mobile, items-stretch for desktop */}
          <Card
            imageUrl="speaking-publicly.png"
            title="Discomfort Speaking Publicly"
            description="You like people but you're not keen on addressing a whole crowd of them. Instead of considering what value you can demonstrate to people, you dwell on thinking 'What if I make a fool of myself? Then nobody will want to buy from me!'"
            className="mb-6 md:mb-0 md:mr-6 h-full"
            dialogueHeader="Focus your efforts for maximum impact"
            dialogueBody="We'll help you identify the tactics that are most likely to work for your business, and provide guidance on how to optimize them for better results. By focusing your efforts on the right strategies and tactics, you can improve your ROI and get the results you're looking for."
            />
          <Card
            imageUrl="hourglass.png"
            title="Advertising Dollars Burned"
            description="It seems like the only way to get people to view your pages are to pay for ads, but as soon as you pull them traffic stops entirely. The cycle must be rigged."
            className="mb-6 md:mb-0 md:mx-6 h-full"
            dialogueHeader="There's a better way to take aim"
            dialogueBody="We can help you use data to better understand your customers and improve your targeting strategy. Our team of experts will work with you to identify the key metrics that matter to your business and provide insights that can help you optimize your campaigns and increase conversions."
          />
          <Card
            imageUrl="uneducated-viewership.png"
            title="Uneducated Viewership"
            description="You know your craft and perform it skillfully. However, the people who view your offers don't know the valuable that you're offering. They don't seem to be very engaged."
            className="mb-6 md:mb-0 md:ml-6 h-full"
            dialogueHeader="Don't waste another minute on ineffective marketing"
            dialogueBody="Our team of experts will work with you to develop a comprehensive digital marketing strategy that's tailored to your business. By using data to inform our decisions, we'll help you make the most of your marketing budget and get the results you're looking for. Say goodbye to wasted time and money and hello to a smarter, more effective marketing approach."
          />
        </div>
      </section>

      <section className="solution p-10 w-full mx-auto bg-white text-black lg:text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Say Hello to the Crowd: Become a Leading Voice in Your Industry</h2>
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
              <div className="space-y-4">
                <Accordion items={accordionItems} />
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-4">
              <div className="bg-[url('/crowd-gathering.png')] bg-center bg-cover rounded-xl">
                <div className="bg-green-900 p-10 rounded-xl text-center md:text-right bg-opacity-80">
                  <AnimatedHeartBeat />
                  <h2 className="text-4xl font-bold mb-6 mt-10 text-white">Grow a loyal audience that'll become your greatest advocates</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tools p-10 w-full mx-auto bg-white text-black lg:text-center">
        <div>
            <h2 className="text-4xl font-bold mb-6"></h2>
        </div>
      </section>

      <section className="pricing bg-white">
        <h2 className="text-3xl font-bold text-center mb-2 text-black">Choose Your Plan</h2>
        <h4 className="text-md font-italic text-center text-black">No long term contracts. Cancel at any time.</h4>
        <div className="flex flex-wrap justify-center p-10 space-x-4">
          <PriceCard title="Basic" monthlyFee={1000} features={basicFeatures} className="min-h-full w-80 flex-shrink-0 mb-3 " />
          <PriceCard title="Standard" monthlyFee={2000} features={standardFeatures} className="min-h-full w-80 flex-shrink-0 mb-3 " />
          <PriceCard title="Business" monthlyFee={4000} features={businessFeatures} className="min-h-full w-80 flex-shrink-0 mb-3 " />
        </div>
        <h4 className="text-md font-italic text-center text-black text-bold">Act now to secure your spot - client availability is limited!</h4>
      </section>

      <section className="bg-white flex justify-center">
        <div className="w-5/6">
        <Testimonial 
            imgSrc="leo.png"
            rating={5}
            testimonialText="StepWise Media helped me learn more about modern marketing tools and techniques than I ever knew. They did all the work for me, so I had all the answers I needed without dedicating my time and labor. Highly recommend!"
            authorName="Leo Martinez"
            authorPosition="Head of Marketing, TurboHeatWeldingTools.com"
          />
        </div>
      </section>

      <section className="faqs p-10 w-full mx-auto bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="border-t border-b border-gray-200 py-8">
            <div className="space-y-4">
              <Accordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white p-10 mx-auto flex justify-center">
        <NewsletterForm />
      </section>

    </div>
  );
};

export default WebDevelopment;
