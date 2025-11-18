'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    tech: string[]
    period: string
    highlights: string[]
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg">
      <div className="relative h-48 bg-muted overflow-hidden">
        <img 
          src={project.image || "/placeholder.svg"} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6 space-y-4">
        <div>
          <p className="text-sm text-primary font-semibold mb-2">{project.period}</p>
          <h3 className="text-xl font-bold text-foreground mb-2">
            {project.title}
          </h3>
          <p className="text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-foreground">기능 및 특징:</h4>
          <ul className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((tech) => (
            <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>

        <Link 
          href={`/project/${project.id}`}
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold mt-4 group"
        >
          자세히 보기
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
