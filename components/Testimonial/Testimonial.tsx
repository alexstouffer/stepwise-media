import React from 'react';
import { Card, CardHeader, CardBody, Typography } from '@material-tailwind/react';
import { StarIcon } from '@heroicons/react/24/solid';

interface TestimonialCardProps {
  imgSrc: string;
  rating: number;
  testimonialText: string;
  authorName: string;
  authorPosition: string;
}

const Testimonial: React.FC<TestimonialCardProps> = ({
  imgSrc,
  rating,
  testimonialText,
  authorName,
  authorPosition,
}) => (
  <Card color="transparent" shadow={false} className="grid grid-cols-5 items-center" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
    <CardHeader floated={false} shadow={false} className="col-span-full mr-8 mb-8 h-[24rem] lg:col-span-2 lg:mr-16 lg:mb-0 xl:mr-28"  nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
      <img src={imgSrc} alt="testimonial image" className="object-cover h-auto w-full" />
    </CardHeader>
    <CardBody className="col-span-full lg:col-span-3"  nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
      <div className="mb-6 flex items-center">
        {[...Array(rating).keys()].map((_, key) => (
          <StarIcon className="h-6 w-6 text-yellow-600" key={key} />
        ))}
      </div>
      <Typography variant="h2" color="blue-gray" className="mb-10 font-medium">
        {testimonialText}
      </Typography>
      <Typography variant="lead" color="blue-gray" className="font-medium">
        &mdash; {authorName}
      </Typography>
      <Typography color="gray" className="font-normal">
        {authorPosition}
      </Typography>
    </CardBody>
  </Card>
);

export default Testimonial;
