import React from 'react';
import { Fragment, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface CardThreeProps {
  imageUrl: string;
  title: string;
  description: string;
  className?: string;
  dialogueHeader: string;
  dialogueBody: string;
}



const CardThree: React.FC<CardThreeProps> = ({ imageUrl, title, description, dialogueHeader, dialogueBody }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

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
          className="relative lg:h-full md:h-64"
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
          <div className="mb-4 mx-2">
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
            onClick={handleOpen}
          >
            read more
            <ArrowRightIcon
              className="ml-2 h-3.5 w-3.5"
              strokeWidth={3}
            />
          </Button>
          <Dialog open={open} handler={handleOpen} nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
            <DialogHeader nonce={undefined} onResize={undefined} onResizeCapture={undefined}>{dialogueHeader}</DialogHeader>
            <DialogBody  nonce={undefined} onResize={undefined} onResizeCapture={undefined} divider>
              {dialogueBody}
            </DialogBody>
            <DialogFooter  nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
              {/* <Button
                onClick={handleOpen}
                variant="text"
                color="red"
                className="mr-1"
                nonce={undefined} 
                onResize={undefined} 
                onResizeCapture={undefined}             
              >
                <span>Cancel</span>
              </Button> */}
              <Button onClick={handleOpen} variant="gradient" color="green" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
                <span>Done</span>
              </Button>
            </DialogFooter>
          </Dialog>
        </CardBody>
      </Card>
    </section>
  );
};

export default CardThree;
