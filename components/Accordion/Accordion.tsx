import { Fragment, SetStateAction, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
type AccordionItem = {
  id: number,
  headerText: string,
  bodyText: string,
};

type Props = {
  items: Array<AccordionItem>,
};

export default function Example({ items }: Props) {
  const [open, setOpen] = useState(items[0].id);
 
  const handleOpen = (value: SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      {items.map(item => (
        <Accordion key={item.id} open={open === item.id} nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
          <AccordionHeader onClick={() => handleOpen(item.id)} className="text-black hover:text-accent" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
            {item.headerText}
          </AccordionHeader>
          <AccordionBody className="text-black text-md">
            {item.bodyText}
          </AccordionBody>
        </Accordion>
      ))}
    </Fragment>
  );
}
