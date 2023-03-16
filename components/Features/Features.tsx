import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import {
  PlayCircleIcon,
  BoltIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import { ReactNode } from 'react';


function Icon({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-blue-100/80 p-2.5 text-blue-500 ring-8 ring-blue-100/40">
      {children}
    </div>
  );
}

export function FeatureSectionThree() {
  return (
    <section className="px-4 py-12">
      <div className="container mx-auto">
        <div className="mb-20 grid lg:grid-cols-2">
          <div className="lg:pr-10">
            <img
              src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2996&q=80"
              alt="background image"
              className="h-full min-h-[20rem] w-full rounded-xl object-cover"
            />
          </div>
          <div className="grid items-center py-12 px-2 lg:ml-8 lg:py-20">
            <Icon>
              <BoltIcon className="h-6 w-6" strokeWidth={2} />
            </Icon>
            <Typography variant="h3" color="blue-gray" className="mb-2">
              See our projects
            </Typography>
            <Typography
              color="blue-gray"
              variant="lead"
              className="mb-10 font-normal text-gray-700"
            >
              People are so scared to lose that they don&apos;t even try. Like,
              one thing people can&apos;t say is that I&apos;m not trying, and
              I&apos;m not trying my hardest.
            </Typography>
            <div className="flex gap-2">
              <Button
                variant="outlined"
                size="lg"
                color="blue-gray"
                className="flex items-center"
                nonce={undefined} 
                onResize={undefined} 
                onResizeCapture={undefined}
              >
                <PlayCircleIcon
                  className="-mt-0.5 mr-1.5 h-6 w-6"
                  strokeWidth={2}
                />
                demo
              </Button>
              <Button size="lg"  nonce={undefined} onResize={undefined} onResizeCapture={undefined}>learn more</Button>
            </div>
          </div>
        </div>
        <div className="mb-20 grid lg:grid-cols-2">
          <div className="grid items-center py-12 px-2 lg:mr-16 lg:py-20">
            <Icon>
              <ArrowsPointingOutIcon className="h-6 w-6" strokeWidth={2} />
            </Icon>
            <Typography variant="h3" color="blue-gray" className="mb-2">
              Read More About Us
            </Typography>
            <Typography
              color="blue-gray"
              variant="lead"
              className="mb-10 font-normal text-gray-700"
            >
              Pain is what we go through as we become older. We get insulted by
              others, lose trust for those others. We get back stabbed by
              friends. It becomes harder for us to give others a hand.
            </Typography>
            <div className="flex gap-2">
              <Button
                variant="outlined"
                size="lg"
                color="blue-gray"
                className="flex items-center"
                nonce={undefined} 
                onResize={undefined} 
                onResizeCapture={undefined}
              >
                <PlayCircleIcon
                  className="-mt-0.5 mr-1.5 h-6 w-6"
                  strokeWidth={2}
                />
                demo
              </Button>
              <Button size="lg" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>learn more</Button>
            </div>
          </div>
          <div className="row-start-1 lg:row-auto lg:pl-10">
            <img
              src="https://images.unsplash.com/photo-1601933513793-1252ce25d644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="background image"
              className="h-full min-h-[20rem] w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSectionThree;
