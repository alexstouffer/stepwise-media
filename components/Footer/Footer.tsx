import { Typography, Button, IconButton } from "@material-tailwind/react";

const links = [
  { name: "Pricing", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Help", href: "#" },
  { name: "Privacy", href: "/privacy" },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography variant="h4" color="white" className="mb-6">
              StepWise Media
            </Typography>
            <Typography color="white" className="mb-12">
              We help business owners expand their online reach across markets
              <br />and use content marketing to drive consistent passive inbound traffic monthly.
            </Typography>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
            {links.map((link) => (
              <li key={link.name}>
                <Typography
                  as="a"
                  href={link.href}
                  color="white"
                  className={`py-1 font-normal transition-colors ${
                    link.name === links[0].name ? "pr-3" : "px-3"
                  }`}
                >
                  {link.name}
                </Typography>
              </li>
            ))}
            </ul>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <Typography variant="h6" color="white" className="mb-3">
              Follow Us:
            </Typography>
            <div className="flex flex-col gap-2">
              <Button
                variant="outlined"
                color="white"
                size="lg"
                className="flex items-center"
                value="#" 
                nonce={undefined} 
                onResize={undefined} 
                onResizeCapture={undefined}              
                >
                <img
                  src="/logo-apple.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                App Store
              </Button>
              <Button
                variant="outlined"
                color="white"
                size="lg"
                className="flex items-center"
                value="#" 
                nonce={undefined} 
                onResize={undefined} 
                onResizeCapture={undefined}  
              >
                <img
                  src="/logo-google.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                Google Play
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
            color="white"
            className="text-center font-normal opacity-60"
          >
            &copy; {currentYear} StepWise Media, All rights reserved.
          </Typography>

          <div className="flex gap-2">
            <IconButton variant="text" color="white" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
              <i className="fa-brands fa-twitter text-2xl not-italic opacity-60"></i>
            </IconButton>
            <IconButton variant="text" color="white"  nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
              <i className="fa-brands fa-linkedin text-2xl not-italic opacity-60"></i>
            </IconButton>
            <IconButton variant="text" color="white"  nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
              <i className="fa-brands fa-facebook text-2xl not-italic opacity-60"></i>
            </IconButton>
            <IconButton variant="text" color="white"  nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
              <i className="fa-brands fa-github text-2xl not-italic opacity-60"></i>
            </IconButton>
            <IconButton variant="text" color="white"  nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
              <i className="fa-brands fa-dribbble text-2xl not-italic opacity-60"></i>
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;