
import React from 'react';

export const PepsiLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <circle cx="128" cy="128" r="128" fill="#c3002f"/>
    <path fill="#005cb9" d="M128 0a128 128 0 000 256c38.5 0 73.5-17.1 97.4-44.7A128 128 0 01128 0z"/>
    <path fill="#fff" d="M189.9 66.1C169.3 43.1 143.8 29.5 128 29.5c-27.1 0-58.8 22.2-76.4 53.7-1.5 2.7-.1 6.1 2.6 7.6 2.7 1.5 6.1-.1 7.6-2.7 14.9-26.6 42.1-45.7 66.2-45.7 12.8 0 35.1 10.8 52.3 29.9 2.1 2.3 5.6 2.5 7.9.4 2.3-2.1 2.5-5.6.4-7.9zm-4.7 123.8c-2.3 2.1-5.6 1.9-7.9-.4-17.2-19-39.5-29.9-52.3-29.9-24.1 0-51.3 19-66.2 45.7-1.5 2.7-4.9 4.2-7.6 2.7-2.7-1.5-4.1-4.9-2.6-7.6C68.1 176.7 99.8 154.5 128 154.5c15.8 0 41.3 13.6 61.9 36.6 2.1 2.3 1.9 5.8-.4 7.9z"/>
  </svg>
);

export const UploadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
  </svg>
);

export const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

export const RedoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.664 0l3.18-3.185m-3.181-4.991-3.182-3.182a8.25 8.25 0 0 0-11.664 0l-3.18 3.185" />
  </svg>
);
