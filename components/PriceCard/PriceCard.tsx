import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { CheckIcon } from "@heroicons/react/24/outline";
  
  interface PriceCardProps {
    title: string;
    monthlyFee: number;
    features: string[];
    className?: string;
  }
  
  export default function PriceCard({
    title,
    monthlyFee,
    features,
    className,
  }: PriceCardProps) {
    return (
      <Card
        color="green"
        variant="gradient"
        className={`w-full max-w-[20rem] p-8 ${className}`}
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase"
          >
            {title}
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">$</span>
            {monthlyFee}{" "}
            <span className="self-end text-4xl">/mo</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0 pb-5" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
          <ul className="flex flex-col gap-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon strokeWidth={2} className="h-3 w-3" />
                </span>
                <Typography className="font-normal">{feature}</Typography>
              </li>
            ))}
          </ul>
        </CardBody>
        <CardFooter
          className="mt-auto p-0"
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          <Button
            size="lg"
            color="white"
            className="text-blue-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            Buy Now
          </Button>
        </CardFooter>
      </Card>
    );
  }
  