import React, { ReactNode } from 'react';
import {Accordion, AccordionItem} from "@nextui-org/accordion";

interface AccordionProps {
  accordionList: [
    {
      id: string;
      ariaLabel: string;
      title: string;
      subtitle?: string;
      indicator?: ReactNode
      contents: ReactNode | string
      disabled?: boolean
      startContent?: ReactNode;
      disableIndicatorAnimation?: boolean
    }
  ];
  variant?: 'light' | 'shadow' | 'bordered' | 'splitted';
  selectionMode?: 'none' | 'single' | 'multiple';
  selectionBehavior?: 'toggle' | 'replace';
  isCompact?: boolean;
  showDivider?: boolean;
  hideIndicator	?: boolean;
  fullWidth	?: boolean;
}

export const CmAccordion = ({
  accordionList,
  variant = 'light',
  selectionMode = 'single',
  selectionBehavior = 'toggle',
  isCompact,
  showDivider,
  hideIndicator,
  fullWidth,
  ...props
}: AccordionProps) => {

  return (
    <Accordion
      variant = {variant}
      selectionMode = {selectionMode}
      selectionBehavior = {selectionBehavior}
      isCompact = {isCompact}
      showDivider = {showDivider}
      hideIndicator = {hideIndicator}
      fullWidth = {fullWidth}
    >
      {accordionList.map((accordion) => (
        <AccordionItem 
          key={`accordion-key-${accordion.id}`}
          aria-label={accordion.ariaLabel}
          title={accordion.title}
          subtitle={accordion.subtitle}
          indicator={accordion.indicator}
          isDisabled={accordion.disabled}
          startContent={accordion.startContent}
          disableIndicatorAnimation={accordion.disableIndicatorAnimation}
        >
          {accordion.contents}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
