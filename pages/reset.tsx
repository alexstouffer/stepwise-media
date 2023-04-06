// Reset.tsx
import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
} from "@material-tailwind/react";

const Reset: React.FC = () => {
  return (
    <section className="h-screen w-full p-4 bg-[url('/analytics-hero.png')] roundex-xl bg-cover bg-center flex items-center">
      <div className="container justify-center flex p-20">
        <Card className="" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
          <CardHeader
            variant="gradient"
            color="green"
            className="mb-4 grid place-items-center py-8 px-4 text-center"
            nonce={undefined} onResize={undefined} onResizeCapture={undefined}
          >
            <Typography variant="h3" color="white" className="mb-2">
              Reset Password
            </Typography>
            <Typography variant="small" color="white">
              You will receive an e-mail in maximum 60 seconds
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
            <Input
              variant="static"
              label="Email"
              size="lg"
              placeholder="john@example.com"
              nonce={undefined} onResize={undefined} onResizeCapture={undefined}
            />
            <Button className="mt-4 bg-green-800" fullWidth nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
              Reset
            </Button>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Reset;
