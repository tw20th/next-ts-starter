import React from 'react';

interface CardProps {
  title: string;
  description: string;
  color: string;
}

const Card: React.FC<CardProps> = ({ title, description, color }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md text-white`}
      style={{ backgroundColor: color }}
    >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-md">{description}</p>
    </div>
  );
};

export default Card;
