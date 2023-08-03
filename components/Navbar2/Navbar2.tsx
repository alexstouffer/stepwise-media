import React, { useState, useEffect } from "react";
import {
Navbar,
MobileNav,
Typography,
Button,
IconButton,
Tooltip,
} from "@material-tailwind/react";
import {
Square3Stack3DIcon,
PuzzlePieceIcon,
CodeBracketSquareIcon,
RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemProps {
icon: JSX.Element;
label: string;
url?: string;
}

function NavItem({ icon, label, url }: NavItemProps) {
return (
<a href={url}>
<Typography
     as="li"
     variant="small"
     color="white"
     className="flex items-center gap-1.5 p-1 font-normal"
   >
{icon}
{label}
</Typography>
</a>
);
}

function NavList() {
return (
<ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
{/* <NavItem
icon={<PuzzlePieceIcon className="h-5 w-5" />}
label="Analytics Measurement"
url="/analytics-measurement"

/> 
<NavItem
icon={<RocketLaunchIcon className="h-5 w-5" />}
label="SEO Management"
url="/content-management"
/>
<NavItem
icon={<CodeBracketSquareIcon className="h-5 w-5" />}
label="Web Development"
url="/web-development"
/> */}
<NavItem
icon={<Square3Stack3DIcon className="h-5 w-5" />}
label="Blog"
url="/blog"
/>
</ul>
);
}

export function Navbar2() {
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen((cur) => !cur);

useEffect(() => {
window.addEventListener(
"resize",
() => window.innerWidth >= 960 && setOpen(false)
);
return () => {
window.removeEventListener(
"resize",
() => window.innerWidth >= 960 && setOpen(false)
);
};
}, []);

return (
<Navbar className="bg-black border-none bg-opacity-100" fullWidth nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
<div className="container mx-auto flex items-center justify-between">
<Typography
       as="a"
       href="/"
       variant="small"
       color="white"
       className="cursor-pointer py-1.5 font-bold p-0"
       >
    <div className="flex items-center">
        <img src="/logo-stepwise-media.png" alt="logo" width="200" />
    </div>
</Typography>
<div className="flex justify-between">
        <div className="hidden lg:block pr-10">
        <NavList />
        </div>
        <a href="/register">
        <Button
        color="white"
        size="sm"
        className="hidden lg:inline-block mr-2"
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        >
        Register
        </Button>
        </a>
    <IconButton
        size="sm"
        variant="text"
        color="white"
        onClick={handleOpen}
        className="ml-auto inline-block lg:hidden"
        nonce={undefined} 
        onResize={undefined} 
        onResizeCapture={undefined}
        >
        {open ? (
        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
        ) : (
        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
        )}
    </IconButton>
        <a href="/sign-in">
        <Button
            color="white"
            size="sm"
            className="hidden lg:inline-block"
            nonce={undefined} 
            onResize={undefined} 
            onResizeCapture={undefined}
            >
        Sign In
        </Button>
        </a>
</div>
</div>
<MobileNav open={open}>
<NavList />
<Tooltip content="Under Development, check back soon" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
    <Button color="white" size="sm" fullWidth className="mb-2" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
    Sign Up
    </Button>
</Tooltip>
<Tooltip content="Under Development, check back soon" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
    <Button color="white" size="sm" fullWidth className="mb-2" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
    Log In
    </Button>
</Tooltip>
</MobileNav>
</Navbar>
);
}

export default Navbar2;