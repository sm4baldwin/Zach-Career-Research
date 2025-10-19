import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

// This would typically come from a database
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design and extensible architecture.",
    date: "2024",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    link: "https://github.com/zachavila/portfolio",
    status: "Active"
  },
  {
    id: 2,
    title: "Data Analysis Tool",
    description: "A comprehensive tool for data visualization and analysis, designed to streamline research workflows and generate insights.",
    date: "2023",
    technologies: ["Python", "Pandas", "Matplotlib", "Jupyter"],
    link: "https://github.com/zachavila/data-tool",
    status: "Completed"
  },
  {
    id: 3,
    title: "Research Management System",
    description: "A web application for managing research projects, tracking progress, and organizing academic resources.",
    date: "2023",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    status: "In Development"
  }
];

export async function GET() {
  try {
    // In a real application, you would:
    // 1. Fetch from database
    // 2. Apply filtering/sorting
    // 3. Handle pagination
    // 4. Add authentication if needed

    return NextResponse.json({
      projects,
      total: projects.length
    });
  } catch (error) {
    console.error('Projects API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}