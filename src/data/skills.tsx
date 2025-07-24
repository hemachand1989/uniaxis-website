import { Code, Database, Cloud, Shield, Users } from 'lucide-react';
import { Skill } from '@/types';

export const skills: Skill[] = [
  {
    icon: <Code className="w-8 h-8" />,
    title: ".NET & C#",
    description: "Enterprise-grade backend development with modern .NET technologies"
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "React & TypeScript",
    description: "Modern frontend applications with type-safe development"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "OAuth & Security",
    description: "Robust authentication and authorization implementations"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Database Design",
    description: "PostgreSQL, SQL Server and optimized database architectures"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Microservices",
    description: "Containerization, Kubernetes and cloud-native solutions"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "LTI Integration",
    description: "Canvas, Blackboard and Learning Management System integrations"
  }
];
