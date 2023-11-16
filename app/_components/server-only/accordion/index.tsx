import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionProps,
  AccordionItemProps,
} from '@nextui-org/accordion'

interface CmAccordionProps {
  accordionList: [
    {
      id: string
      ariaLabel: string
      title: AccordionItemProps['title']
      subtitle?: AccordionItemProps['subtitle']
      indicator?: AccordionItemProps['indicator']
      contents: AccordionItemProps['content']
      disabled?: AccordionItemProps['disabled']
      startContent?: AccordionItemProps['startContent']
      disableIndicatorAnimation?: AccordionProps['disableIndicatorAnimation']
    },
  ]
  variant?: AccordionProps['variant']
  selectionMode?: AccordionProps['selectionMode']
  selectionBehavior?: AccordionProps['selectionBehavior']
  isCompact?: AccordionProps['isCompact']
  showDivider?: AccordionProps['showDivider']
  hideIndicator?: AccordionProps['hideIndicator']
  fullWidth?: AccordionProps['fullWidth']
}

export default function CmAccordion({
  accordionList,
  variant = 'light',
  selectionMode = 'single',
  selectionBehavior = 'toggle',
  isCompact,
  showDivider,
  hideIndicator,
  fullWidth,
}: CmAccordionProps) {
  return (
    <Accordion
      variant={variant}
      selectionMode={selectionMode}
      selectionBehavior={selectionBehavior}
      isCompact={isCompact}
      showDivider={showDivider}
      hideIndicator={hideIndicator}
      fullWidth={fullWidth}
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
  )
}
