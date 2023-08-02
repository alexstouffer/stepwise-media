import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Accordion from '../components/Accordion/Accordion';
import Card from '../components/Card/Card';
import { Typography } from '@material-tailwind/react';
import Testimonial from '../components/Testimonial/Testimonial';
import PriceCard from '../components/PriceCard/PriceCard';
import NewsletterForm from '../components/NewsletterSignup/NewsletterSignup';
import AnimatedThreeRoundBurst from '../components/AnimatedThreeRoundBurst/AnimatedThreeRoundBurst';

type Props = {};

const Home: NextPage = () => {
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
      headerText: "Content On Topics with Search Traffic",
      bodyText: "Content marketing starts with understanding how your target audience uses search. People developing buying intent ask different questions throughout their customer journey. That tells us where they are at in a potential sales funnel, and the earlier you join them in their journey the better your chances of accelerating their passage through your funnel. Better yet, great content can develop a relationship where audience members view you as a trusted advisor and trading partner. They become promoters of your products creating exponential awareness of your brand via word of mouth. To achieve this outcome, our goal is to write well developed highly-targeted and sought after information where your product or service fits naturally.",
    },
    {
      id: 2,
      headerText: "Backlinks Boosting Domain Authority",
      bodyText: "we use premium tools like Ahrefs to identify the best opportunities for content backlinks and help our clients acquire them. By analyzing the backlink profiles of competitors and industry leaders, we can identify high-authority websites and publications that are most likely to link to our clients' content. Our team then creates high-quality, informative, and shareable content that is tailored to the interests and needs of the target audience, and pitches it to these high-authority websites for inclusion in their content. Through strategic outreach and relationship-building, we can secure backlinks that not only improve our clients' domain authority and search engine rankings, but also drive traffic and engagement from a wider audience.",
    },
    {
      id: 3,
      headerText: 'Measured Ways to Make Visitors Into Leads',
      bodyText: 'Once you start getting feedback that you have great content in any given medium, that can be repurposed across different media types like infographics, memes, blogs, podcasts and video. We start with the content that has lower production costs like blogs, and scale to higher production formats like video by prioritizing what is provably your most popular content. If keyword research is done correctly and you develop a decent audience to initially promote your content, you will have created a collection of middle-man pages that can be updated and reposted in perpetuity to drive traffic toward your money pages. Those visitors can convert into paying customers passively every month. This creates a multiplier effect that can become amplified when you achieve top ranking search positions for your niche.',
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
        "Content marketing can help you build an audience by providing valuable, relevant content that your target audience is searching for. By creating high-quality content that answers their questions and addresses their pain points, you can establish credibility with readers and effectively suggest your products as the recomended solution.",
    },
    {
      id: 4,
      headerText: "How is success gauged in content marketing?",
      bodyText:
        "Ultimately, sales are the only metric that truly measures the success of content marketing. However, it's not often that people will go to an online shop, see something they want to buy and then share that product page online for everyone else to see. There's no word of mouth. That's why every business needs a decent blog to help create word of mouth. By writing about highly-searched topics relevant to our business, we can create content worth sharing or linking to. That content gives us page authority and drives engaged viewers back to our sales pages informed and ready to buy.",
    },
    {
      id: 5,
      headerText: "What results can I expect to see from monthly content marketing services?",
      bodyText:
        "Results from monthly content marketing services vary depending on the complexity of the project and the specific goals of the client, but typically clients see improvement in website traffic, search engine rankings, social media engagement, lead generation, and sales. Pair this service along with our analytics services to get insights into how well your posts are converting visitors into prospects and eventually paying customers.",
    },
    {
      id: 6,
      headerText: "What is included in the monthly content marketing service?",
      bodyText:
        "The monthly content marketing service includes ongoing keyword research and analysis, content strategy development, and ghostwriting services. Higher tiers will have additional perks listed.",
    },
  ];


  const basicFeatures = [
    "Optimize Pages for Search Results",
    "Tag Inbound Traffic with UTM Links",
    "Track User Behaviors with Analytics",
    "Compile Keywords with Search Traffic",
  ];

  const standardFeatures = [
    "Everything in Basic Tier",
    "Create Results-Oriented Lead Magnets",
    "Guide Customer Journeys with Content Mapping",
    "Experiment with Updates Safely via A/B Testing",
  ]

  const businessFeatures = [
    "Everything in Standard Tier",
    "Early Access to Pilot Programs",
    "Fast & Easy Reports via Looker Studio",
    "Persuade Viewers with Well Researched Copy",
    "Grow Authority via Backlink Building Strategies",
  ]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>StepWise Media</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col justify-center">
        <section className="flex text-secondary items-center bg-center bg-cover justify-end bg-no-repeat pr-10" style={{
          backgroundImage: `url(${'analytics-hero2.png'})`,
          height: '84vh'
        }} >
          <div className="flex flex-col p-10 bg-black bg-opacity-40 rounded-lg w-1/3">
            <h1 className="text-5xl font-bold text-right text-opacity-100 text-uppercase">Become the Peak Authority in Your Domain</h1>
            <h2 className="text-xl text-right font-semibold pt-5">Rank #1 in Search Results and Grow Passive Inbound Leads with our SEO Service Packages</h2>
            {/* <button onClick={() => router.push('/ga')} className="bg-secondary rounded-lg text-black px-10 py-3 mt-10 max-width-50">Start with our Free Guide</button> */}
          </div>
        </section>

        <section className="problem p-10 bg-white flex flex-col lg:flex-row-reverse lg:justify-center">
          <div className="w-full md:w-1/3 flex items-center justify-center p-10 bg-[url('/abandoned-storefront.png')] bg-contain bg-center bg-no-repeat rounded-xl">
          </div>
          <div className="w-full md:w-2/3 p-10 flex md:items-center">
            <div>
              <h2 className="text-3xl font-bold text-right mb-6 text-black">Jack Worth Couldn't Rank For Jack Worth</h2>
              <Typography className="text-right text-black">
                Mr. Worth was a victim of his own success. He had a website but never relied on it to make money. The sales team was the main driver of his industry, and has been since its inception in the 1970's. That's when Jack began his career, and his methods were battle tested. His time in the business and his track record grew to a point where he had ample appearances on cable finance channels, but Jack partly felt betrayed by the publicity. Those posts burried him in the search results! Social platform pages and even SEC filings ranked higher than Jack's firm. When the clients began complaining about finding his site to view their reports, he knew he had to fix it.
              </Typography>
            </div>
          </div>
        </section>

        <section className="agitate bg-white flex flex-col p-10">
          <h2 className="text-3xl font-bold text-center mb-10 text-black">Some Challenges Cut Jack No Slack</h2>
          <div className="flex flex-col md:flex-row items-center md:items-stretch"> {/* added items-center for mobile, items-stretch for desktop */}
            <Card
              imageUrl="speaking-publicly.png"
              title="Low Inbound Traffic"
              description="You like people but you're not keen on addressing a whole crowd of them. Instead of considering what value you can demonstrate to people, you dwell on thinking 'What if I make a fool of myself? Then nobody will want to buy from me!'"
              className="mb-6 md:mb-0 md:mr-6 h-full"
              dialogueHeader="Focus your efforts for maximum impact"
              dialogueBody="We'll help you identify the tactics that are most likely to work for your business, and provide guidance on how to optimize them for better results. By focusing your efforts on the right strategies and tactics, you can improve your ROI and get the results you're looking for."
            />
            <Card
              imageUrl="hourglass.png"
              title="No Outside References"
              description="It seems like the only way to get people to view your pages are to pay for ads, but as soon as you pull them traffic stops entirely. The cycle must be rigged."
              className="mb-6 md:mb-0 md:mx-6 h-full"
              dialogueHeader="There's a better way to take aim"
              dialogueBody="We can help you use data to better understand your customers and improve your targeting strategy. Our team of experts will work with you to identify the key metrics that matter to your business and provide insights that can help you optimize your campaigns and increase conversions."
            />
            <Card
              imageUrl="uneducated-viewership.png"
              title="People Came Just to Leave"
              description="You know your craft and perform it skillfully. However, the people who view your offers don't know the valuable that you're offering. They don't seem to be very engaged."
              className="mb-6 md:mb-0 md:ml-6 h-full"
              dialogueHeader="Don't waste another minute on ineffective marketing"
              dialogueBody="Our team of experts will work with you to develop a comprehensive digital marketing strategy that's tailored to your business. By using data to inform our decisions, we'll help you make the most of your marketing budget and get the results you're looking for. Say goodbye to wasted time and money and hello to a smarter, more effective marketing approach."
            />
          </div>
        </section>

        <section className="solution p-10 w-full mx-auto bg-white text-black lg:text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6"></h2>
            <div className="flex flex-wrap justify-center items-center">
              <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
                <div className="space-y-4">
                  <Accordion items={accordionItems} />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-4">
                <div className="bg-[url('/crowd-gathering.png')] bg-center bg-cover rounded-xl">
                  <div className="bg-green-900 p-10 rounded-xl text-center md:text-right bg-opacity-80">
                    <div className="flex w-full justify-center mt-6 ml-8">
                      <AnimatedThreeRoundBurst
                        size={100}
                        fillColor="none"
                        strokeColor="white"
                        strokeWidth={3}
                        animationDuration={2000}
                        delayBetweenBursts={300}
                        viewBox="55 50 100 100"
                        className="flex justify-center"
                      />
                    </div>
                    <h2 className="text-4xl font-bold mx-4 text-white">Jack gained trust with audience members that became his best promoters. <br /><br />So can you!</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white flex justify-center">
          <div className="w-5/6">
            <Testimonial
              imgSrc="leo.png"
              rating={5}
              testimonialText="It never occured to me that I can search for the topics my customers care about most. StepWise Media helped me find out what those topics were and how my products fit for natural referrals that convert to paying clients."
              authorName="Leo Martinez"
              authorPosition="Head of Marketing, TurboHeatWeldingTools.com"
            />
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
            <PriceCard title="Basic" monthlyFee={2000} features={basicFeatures} className="min-h-full w-80 flex-shrink-0 mb-3 " />
            <PriceCard title="Standard" monthlyFee={4000} features={standardFeatures} className="min-h-full w-80 flex-shrink-0 mb-3 " />
            <PriceCard title="Business" monthlyFee={6000} features={businessFeatures} className="min-h-full w-80 flex-shrink-0 mb-3 " />
          </div>
          <h4 className="text-md font-italic text-center text-black text-bold">Act now to secure your spot - client availability is limited!</h4>
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

      </main>
    </div>
  )
}

export default Home
