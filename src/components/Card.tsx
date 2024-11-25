import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="card bg-cardBg rounded-lg shadow-card hover:shadow-cardHover transition-all duration-300 p-4">
      <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
