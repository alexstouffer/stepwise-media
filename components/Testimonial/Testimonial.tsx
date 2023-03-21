import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  import { StarIcon } from "@heroicons/react/24/solid";
  
  export function Testimonial() {
    return (
      <section className="py-8 px-8 lg:py-20">
        <div className="container mx-auto">
          <Card
            color="transparent"
            shadow={false}
            className="grid grid-cols-5 items-center"
            nonce={undefined} onResize={undefined} onResizeCapture={undefined}
          >
            <CardHeader
              floated={false}
              shadow={false}
              className="col-span-full mr-8 mb-8 h-[24rem] lg:col-span-2 lg:mr-16 lg:mb-0 xl:mr-28"
              nonce={undefined} onResize={undefined} onResizeCapture={undefined}
            >
              <img
                src="leo.png"
                alt="testimonial image"
                className="object-cover h-auto w-full"
              />
            </CardHeader>
            <CardBody className="col-span-full lg:col-span-3" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
              <div className="mb-6 flex items-center">
                {[...Array(5).keys()].map((el, key) => (
                  <StarIcon
                    className="h-6 w-6 text-yellow-600"
                    key={key}
                  />
                ))}
              </div>
              <Typography
                variant="h2"
                color="blue-gray"
                className="mb-10 font-medium"
              >
                "StepWise Media helped me learn more about modern marketing tools and techniques than I ever knew. They did all the work for me, so I had all the answers I needed without dedicating my time and labor. Highly recommend!"
              </Typography>
              <Typography
                variant="lead"
                color="blue-gray"
                className="font-medium"
              >
                &#8212; Leo Martinez
              </Typography>
              <Typography color="gray" className="font-normal">
                Head of Marketing, TurboHeatWeldingTools.com
              </Typography>
            </CardBody>
          </Card>
        </div>
      </section>
    );
  }
  
  export default Testimonial;
  