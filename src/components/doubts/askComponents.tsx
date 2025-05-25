import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ui/accordion";

  interface askcomponents{
    title:string,
    contant:string
  }

const AskComponents = (props:askcomponents) => {
    return(
        <>
            <Accordion type="single" collapsible>
                <AccordionItem className="bg-slate-800 px-5 my-5 w-full" value="item-1">
                    <AccordionTrigger className="text-lg cursor-pointer">{props.title}</AccordionTrigger>
                    <AccordionContent className="text-sm">
                        {props.contant}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    )
}
export default AskComponents;