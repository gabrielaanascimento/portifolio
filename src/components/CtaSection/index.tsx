// src/components/CtaSection/index.tsx
import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CtaSectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  const isMailto = primaryButtonLink.startsWith('mailto:');
  const primaryButtonProps = isMailto ? { href: primaryButtonLink } : { href: primaryButtonLink, as: Link };

  return (
    <section className="border-2 border-dashed border-zinc-600 rounded-lg p-8 text-center">
      <h3 className="text-xl md:text-2xl font-semibold mb-2 text-black">{title}</h3>
      <p className="text-sm text-zinc-700 mb-4">{description}</p>
      
      <div className="flex justify-center gap-3 flex-wrap">
        <a 
          {...primaryButtonProps}
          className="px-5 py-2.5 rounded-full bg-zinc-500 text-white no-underline hover:bg-zinc-600 transition-colors"
        >
          {primaryButtonText}
        </a>
        <Link 
          href={secondaryButtonLink}
          className="px-5 py-2.5 rounded-full border border-zinc-500 text-black no-underline hover:bg-zinc-600 transition-colors"
        >
          {secondaryButtonText}
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;