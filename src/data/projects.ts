import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: "OzStudent.com.au",
    subtitle: "Student & Small Business Platform",
    description: "A comprehensive platform designed to support students and small businesses in Australia. This project showcases my ability to create user-friendly, scalable solutions that serve real-world needs while demonstrating modern development practices and clean architecture.",
    technologies: [".NET", "React", "TypeScript", "PostgreSQL", "OAuth", "Responsive Design"],
    url: "https://ozstudent.com.au",
    features: [
      {
        title: "Student Resources",
        description: "Comprehensive tools and resources for academic success"
      },
      {
        title: "Business Tools",
        description: "Small business management and growth solutions"
      },
      {
        title: "Secure Authentication",
        description: "OAuth-based secure user authentication system"
      },
      {
        title: "Responsive Design",
        description: "Optimized experience across all devices and platforms"
      }
    ]
  }
];
