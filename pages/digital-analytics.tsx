import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router'
import Tabcordion from '../components/Tabcordion/Tabcordion';

type Props = {};

const DigitalAnalytics: NextPage<Props> = () => {
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
  const stages = [
    {
      title: "Plan"
    },
    {
      title: "Build"
    },
    {
      title: "Report"
    }
  ]
  const steps = [  
    {    
      title: "Step 1: Installation",    
      description: "The first step in using digital analytics is installing the tracking code on your website. This can be done by copying and pasting a small snippet of code into the HTML of your website, or by using a plugin or tag manager. Once installed, the tracking code will begin collecting data about how visitors interact with your site."
    },
    {    
      title: "Step 2: Data Collection",    
      description: "With the tracking code installed, the platform begins collecting data about your website visitors, including page views, time on site, location, and more. This data is stored in the platform's database and can be used to generate reports and create custom segments."  
    },  
    {    
      title: "Step 3: Report Generation",    
      description: "The platform uses the data collected to generate reports that provide insights into how visitors interact with your website. These reports can be customized to show the data that is most important to you, and can be viewed on demand or scheduled for automatic delivery."  
    },  
    {    
      title: "Step 4: Installation",    
      description: "The first step in using digital analytics is installing the tracking code on your website. This can be done by copying and pasting a small snippet of code into the HTML of your website, or by using a plugin or tag manager. Once installed, the tracking code will begin collecting data about how visitors interact with your site."  
    },  
    {    
      title: "Step 5: Data Collection",    
      description: "With the tracking code installed, the platform begins collecting data about your website visitors, including page views, time on site, location, and more. This data is stored in the platform's database and can be used to generate reports and create custom segments."  
    },  
    {    
      title: "Step 6: Report Generation",    
      description: "The platform uses the data collected to generate reports that provide insights into how visitors interact with your website. These reports can be customized to show the data that is most important to you, and can be viewed on demand or scheduled for automatic delivery."  
    },  
    {    
      title: "Step 7: Installation",    
      description: "The first step in using digital analytics is installing the tracking code on your website. This can be done by copying and pasting a small snippet of code into the HTML of your website, or by using a plugin or tag manager. Once installed, the tracking code will begin collecting data about how visitors interact with your site."  
    },  
    {    
      title: "Step 8: Data Collection",    
      description: "With the tracking code installed, the platform begins collecting data about your website visitors, including page views, time on site, location, and more. This data is stored in the platform's database and can be used to generate reports and create custom segments."  
    },  
    {    
      title: "Step 9: Report Generation",    
      description: "The platform uses the data collected to generate reports that provide insights into how visitors interact with your website. These reports can be customized to show the data that is most important to you, and can be viewed on demand or scheduled for automatic delivery."  
    }
  ];


  return (
    <div className="text-secondary bg-primary">
      <section className="text-secondary bg-cover bg-center bg-no-repeat" style={{ 
        backgroundImage: `url(${'analytics-hero.png'})`,
        height: '120vh'
      }} >
        <div className="flex flex-col h-full justify-center items-center p-10 bg-black opacity-50 rounded-lg">
          <h1 className="text-4xl font-bold text-center">This 3 Stage Cycle Will Guide Your Online Business to Peak Performance</h1>
          <h2 className="text-xl font-semibold text-center">Unlock the power of your data with Digital Analytics</h2>
          <p className="text-lg text-center mt-5">Are you tired of guessing how visitors interact with your website? Want to turn data into insights and turn insights into action? Look no further than StepWise Media. Our powerful and easy-to-use platform gives you the information you need to make data-driven decisions and improve your online presence. From understanding your audience to tracking your ROI, our digital analytics team has you covered.</p>
          <button onClick={() => router.push('/ga')} className="bg-secondary text-black px-10 py-3 mt-10">Learn more</button>
        </div>
      </section>

      <section className="key-features bg-primary p-10">
        <h2 className="text-2xl font-bold text-center mb-5">Key Features</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-accent rounded-lg shadow">
            <h3 className="font-medium">Accelerated Load Times</h3>
            <p className="text-sm text-gray-600">Load your pages faster, for a better user experience and improved search engine rankings.</p>
          </div>
          <div className="p-4 bg-accent rounded-lg shadow">
            <h3 className="font-medium">Customizable Themes</h3>
            <p className="text-sm text-gray-600">Choose from a variety of pre-made themes or create your own to give your website a unique look and feel.</p>
          </div>
          <div className="p-4 bg-accent rounded-lg shadow">
            <h3 className="font-medium">Easy Content Management</h3>
            <p className="text-sm text-gray-600">Our intuitive content management system makes it easy for you to create and manage your website's content.</p>
          </div>
          <div className="p-4 bg-accent rounded-lg shadow">
            <h3 className="font-medium">24/7 Support</h3>
            <p className="text-sm text-gray-600">Our friendly support team is available 24/7 to help you with any questions or issues you may have.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works py-10">
        <h2 className="text-center text-2xl font-bold">A Step-by-Step Guide to Measuring Analytics</h2>
        <div className="container mx-auto px-10">
          {stages.map((stage, index) => {
            const startIndex = index * 3;
            const endIndex = startIndex + 3;
            return (
              <section className={`rounded-lg p-10 my-10 ${startIndex % 2 === 0 ? 'bg-blue-700' : 'bg-red-700'} p-10`}>
                <h2 className="text-4xl font-medium mt-5 text-center">{stage.title}</h2>
                <div className="grid grid-cols-3 gap-4 mt-10">
                  {steps.slice(startIndex, endIndex).map((substep, subIndex) => (
                    <div className="flex flex-col items-center">
                      <img src={'keys.svg'} alt={`Step ${subIndex + startIndex + 1}`} />
                      <h3 className="text-xl font-medium mt-5">{`${substep.title}`}</h3>
                      <p className="text-lg text-center flex-1">{substep.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="testimonials-section bg-primary p-10">
        <h3 className="text-center text-2xl p-2">What our customers are saying</h3>
        <div className="grid grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 bg-accent rounded-lg shadow">
              <p className="font-medium">"{testimonial.text}"</p>
              <p className="text-sm text-gray-600">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

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

export default DigitalAnalytics;
