'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('space-y-2', className)} {...props} />
));
Accordion.displayName = 'Accordion';

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: string }
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('border border-slate-200 rounded-lg', className)} {...props} />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { isOpen?: boolean }
>(({ className, children, isOpen, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      'flex w-full items-center justify-between px-4 py-3 font-medium transition-all hover:bg-slate-50',
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown
      className={cn('h-4 w-4 shrink-0 transition-transform duration-200', {
        'rotate-180': isOpen,
      })}
    />
  </button>
));
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { isOpen?: boolean }
>(({ className, children, isOpen, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'overflow-hidden transition-all duration-200',
      isOpen ? 'max-h-[1000px]' : 'max-h-0'
    )}
    {...props}
  >
    <div className={cn('px-4 pb-3 text-sm text-slate-600', className)}>{children}</div>
  </div>
));
AccordionContent.displayName = 'AccordionContent';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };