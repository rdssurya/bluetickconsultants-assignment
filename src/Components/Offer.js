import React from 'react';
import "../Styles/Offer.css";
import Header from './Header';
import Footer from './Footer';
import Card from './Card';

const data = [
    ["Explore AI Opportunities for Your Enterprise", "Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation."],
    ["Design AI Trust Layer", "Prioritize data security and build trust in generative AI applications with a dedicated trust layer, emphasizing privacy-focused solutions that safeguard both organizational and customer data."],
    ["Scalability-Focused Solutions", "Streamline and optimize business processes with comprehensive workflow automation, ensuring seamless integration of AI technologies from inception to execution for increased efficiency and productivity."],
    ["End to end Workflow automation", "Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise, providing a future-proof approach to AI integration."]
];

const Offer = () => {
  return (
    <>
    <Header />
        <div className='offers'>
        {data.map((item) => (
            <Card heading={item[0]} content={item[1]} key={item[0]}/>
        ))}
        </div>
    <Footer />
    </>
  );
};

export default Offer;