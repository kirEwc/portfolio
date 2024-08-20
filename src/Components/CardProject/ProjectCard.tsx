import React from "react";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl: string;
}

export const ProjectCard: React.FC<CardProps> = ({ imageUrl, title, description, linkUrl }) => {
  return (
    <div className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <img className="w-full h-48 object-cover opacity-80" src={imageUrl} alt={title} />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
      <div className="relative p-6">
        <h3 className="text-2xl font-extrabold text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        <a href={linkUrl} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-pink-500 hover:to-purple-500 text-white transition duration-300 transform hover:scale-110">
          →
        </a>
      </div>
    </div>
  );
};
