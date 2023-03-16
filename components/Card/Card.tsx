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
}

const CardThree: React.FC<CardThreeProps> = ({ imageUrl, title, description }) => {
  return (
    <section className="grid place-items-center">
      <Card
        color="transparent"
        shadow={false}
        className="w-auto max-w-[28rem]"
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
          className="px-4"
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          <Typography
            variant="h4"
            color="blue-gray"
            className="mt-1 mb-2 font-medium"
          >
            {title}
          </Typography>
          <Typography color="gray" className="mb-8">
            {description}
          </Typography>
          <Button
            variant="text"
            size="sm"
            className="flex items-center"
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
