// Added React import to fix the 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  business: string;
  quote: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix: string;
}