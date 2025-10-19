import { ReactNode } from 'react';

interface CardProps {
  title: string;
  description?: string;
  link?: string;
  date?: string;
  children?: ReactNode;
  className?: string;
}

export default function Card({ title, description, link, date, children, className = '' }: CardProps) {
  const CardContent = () => (
    <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${className}`}>
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        {date && <span className="text-sm text-gray-500">{date}</span>}
      </div>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
}