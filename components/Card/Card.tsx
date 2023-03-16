import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface CardThreeProps {
  imageUrl: string;
  title: string;
  description: string;
  className?: string;
}

const CardThree: React.FC<CardThreeProps> = ({ imageUrl, title, description }) => {
  return (
    <section className="flex flex-col w-full max-w-[28rem]">
      <Card
        color="transparent"
        shadow={false}
        className="w-full h-full"
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <CardHeader
          className="relative h-64"
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          <img
            src={imageUrl}
            alt="img-blur-shadow"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody
          className="flex flex-col justify-between px-4 h-full"
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          <div className="mb-4">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mt-1 mb-2 font-medium"
            >
              {title}
            </Typography>
            <Typography color="gray" className="mb-2">
              {description}
            </Typography>
          </div>
          <Button
            variant="text"
            size="sm"
            className="flex items-center mb-4"
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            read more
            <ArrowRightIcon
              className="ml-2 h-3.5 w-3.5"
              strokeWidth={3}
            />
          </Button>
        </CardBody>
      </Card>
    </section>
  );
};

export default CardThree;
