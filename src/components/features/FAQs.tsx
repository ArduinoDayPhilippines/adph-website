'use client';

import { useState } from 'react';
import Accordion from '../ui/accordion';
import { faqs }  from '@/data/index';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showSecondColumn, setShowSecondColumn] = useState(false);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const half = Math.ceil(faqs.length / 2);
  const column1 = faqs.slice(0, half);
  const column2 = faqs.slice(half);

  return (
    <div className="relative container w-full">
      <h2 className="mb-8 h2 text-white">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Accordion faqs={column1} startIndex={0} openIndex={openIndex} toggleAccordion={toggleAccordion} />
        <div className={`md:block ${showSecondColumn ? 'block' : 'hidden'}`}>
          {/* Fix: Ensure the second column starts indexing correctly */}
          <Accordion faqs={column2} startIndex={column1.length} openIndex={openIndex} toggleAccordion={toggleAccordion} />
        </div>
      </div>
      <button onClick={() => setShowSecondColumn(!showSecondColumn)} className="text-white rounded-md md:hidden">
        {showSecondColumn ? 'See Less' : 'See More'}
      </button>
    </div>
  );
}
