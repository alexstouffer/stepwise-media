import { Typography, Input, Button } from "@material-tailwind/react";

function SignUp(): JSX.Element {
  return (
    <section className="grid h-screen items-center p-8">
      <div className="text-center">
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Create an account
        </Typography>
        <form action="#" className="mx-auto max-w-[24rem] text-left">
          <Input 
            size="lg" 
            label="Email" 
            type="email" 
            name="email"             
            nonce={undefined} 
            onResize={undefined} 
            onResizeCapture={undefined}
        />
          <Button 
            size="lg" 
            className="mt-4" 
            fullWidth            
            nonce={undefined} 
            onResize={undefined} 
            onResizeCapture={undefined}          
        >
            get started
          </Button>
          <div className="my-6 flex w-full items-center gap-2">
            <hr className="w-full bg-blue-gray-50" />
            <Typography
              variant="small"
              color="blue-gray"
              className="font-medium opacity-50"
            >
              OR
            </Typography>
            <hr className="w-full bg-blue-gray-50" />
          </div>
          <Button
            variant="outlined"
            color="blue-gray"
            size="lg"
            className="mt-4 flex h-12 items-center justify-center gap-2"
            fullWidth
            nonce={undefined} 
            onResize={undefined} 
            onResizeCapture={undefined}          

          >
            <img
              src="/logo-google.png"
              alt="google"
              className="h-6 w-6"
            />{" "}
            sign in with google
          </Button>
          <Button
            variant="outlined"
            color="blue-gray"
            size="lg"
            className="mt-4 flex h-12 items-center justify-center gap-2"
            fullWidth
            nonce={undefined} 
            onResize={undefined} 
            onResizeCapture={undefined}          

          >
            <img
              src="/logo-facebook.png"
              alt="facebook"
              className="-mt-0.5 h-7 w-7"
            />
            sign in with facebook
          </Button>
          <Button
            variant="outlined"
            color="blue-gray"
            size="lg"
            className="mt-4 flex h-12 items-center justify-center gap-2"
            fullWidth  
            nonce={undefined} 
            onResize={undefined} 
            onResizeCapture={undefined}          >
            <img
              src="/logo-apple.png"
              alt="apple"
              className="-mt-1 h-7 w-7"
            />
            sign in with apple
          </Button>
          <Typography
            color="gray"
            className="mt-6 text-center font-normal"
          >
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Log in
            </a>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
