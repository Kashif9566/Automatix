'use client';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

type TypewriterEffectProps = {
  text: string;
  className?: string;
};

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  className = '',
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  // Parse HTML and create array of text segments and HTML elements
  const parseHTML = (html: string) => {
    const segments: Array<{ type: 'text' | 'html', content: string, className?: string }> = [];
    const regex = /<span[^>]*class="([^"]*)"[^>]*>(.*?)<\/span>|<br\s*\/?>/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(html)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        const textBefore = html.slice(lastIndex, match.index);
        if (textBefore) {
          segments.push({ type: 'text', content: textBefore });
        }
      }

      // Add the match
      if (match[0].includes('<br')) {
        segments.push({ type: 'html', content: '<br />' });
      } else {
        segments.push({ 
          type: 'html', 
          content: match[2], 
          className: match[1] 
        });
      }

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < html.length) {
      const remainingText = html.slice(lastIndex);
      if (remainingText) {
        segments.push({ type: 'text', content: remainingText });
      }
    }

    return segments;
  };

  const segments = parseHTML(text);

  return (
    <motion.h2
      ref={ref}
      className={className}
    >
      {segments.map((segment, segmentIndex) => {
        if (segment.type === 'html') {
          if (segment.content === '<br />') {
            return <br key={segmentIndex} />;
          }
          return (
            <span key={segmentIndex} className={segment.className}>
              {segment.content.split('').map((letter, letterIndex) => (
                <motion.span
                  key={`${segmentIndex}-${letterIndex}`}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.2, delay: (segmentIndex * 10 + letterIndex) * 0.05 }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          );
        }
        
        return segment.content.split('').map((letter, letterIndex) => (
          <motion.span
            key={`${segmentIndex}-${letterIndex}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.2, delay: (segmentIndex * 10 + letterIndex) * 0.05 }}
          >
            {letter}
          </motion.span>
        ));
      })}
    </motion.h2>
  );
}; 