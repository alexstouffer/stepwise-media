import { Fragment, SetStateAction, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function Example() {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value: SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1} nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
        <AccordionHeader onClick={() => handleOpen(1)} className="text-secondary hover:text-accent" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
            Make Informed Decisions
        </AccordionHeader>
        <AccordionBody className="text-secondary text-md">
            Measuring analytics provides online business owners with quantitative data on key metrics such as website traffic, 
            user behavior, and conversion rates. Without this data, business owners may rely on assumptions or gut feelings 
            when making important decisions about how to invest limited time and money toward their website, marketing campaigns, 
            or business strategy. This can lead to suboptimal decisions that don't accurately reflect the reality of their business.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
        <AccordionHeader onClick={() => handleOpen(2)} className="text-secondary hover:text-accent" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
            Craft Better Offers
        </AccordionHeader>
        <AccordionBody className="text-secondary text-md">
            Measuring analytics allows online business owners to identify areas of their sales funnels that are underperforming 
            and optimize them to improve conversions. For example, analytics data can reveal which stages of the sales funnel 
            are causing the most drop-offs, which website pages are most effective at converting leads into customers, and which 
            marketing channels are driving the most qualified leads.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
        <AccordionHeader onClick={() => handleOpen(3)} className="text-secondary hover:text-accent" nonce={undefined} onResize={undefined} onResizeCapture={undefined} >
            Refine Customer Experience
        </AccordionHeader>
        <AccordionBody className="text-secondary text-md">
            A/B tests enable incremental changes to website or application design, allowing business owners to test variations of 
            a webpage or feature to determine which version performs better with users. Personalized user experiences can also be 
            created using analytics data, which can reveal which products or services a user is interested in, which emails they're 
            opening and clicking on, and which website pages they're spending the most time on. This data can be used to create 
            personalized product recommendations, email campaigns, and website content, all optimized for different devices and 
            potential marketing touchpoints.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}