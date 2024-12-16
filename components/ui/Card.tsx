import { FC } from "react";

interface CardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  className?: string;
}

const Card: FC<CardProps> = ({ icon: Icon, title, description, className }) => (
  <div
    className={`bg-white p-8 py-4 h-full rounded-3xl shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 ${className}`}
  >
    <div className="text-center mb-6">
      <Icon className="h-12 w-12 text-primary mb-4 mx-auto" />
    </div>
    <h3 className="text-2xl font-semibold font-ubuntuBold text-center text-primary mb-3">
      {title}
    </h3>
    <p className="text-gray-500 text-center">{description}</p>
  </div>
);

export default Card;
