import type { Project } from './types'

export const projects: readonly Project[] = [
  {
    slug: 'shopeazy',
    title: 'ShopEazy',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS'],
    problem: 'Support online purchases and give administrators a way to maintain the product catalog.',
    solution: 'Built a full-stack e-commerce platform with PayPal checkout and tools for updating product details, inventory, and descriptions.',
    detail: {
      summary: 'A full-stack e-commerce platform with PayPal checkout and product catalog management.',
      scope: 'Full-stack development',
      solution: 'Integrated PayPal for customer purchases and implemented administrator workflows to edit product details, inventory, and descriptions.',
    },
  },
]
