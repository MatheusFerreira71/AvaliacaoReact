import { ReactNode } from 'react';
import "./card.css"
interface CardProps {
  children: ReactNode;
  title?: string;
  color: string;
  titleColor?: string;
}

function Card({ children, color, title, titleColor }: CardProps) {
  return (
    <div className={`card-container card-${color}`}>
      {title ? (<div className="card-header">
        <span className={`card-title title-${titleColor ? titleColor : color}`}>{title}</span>
      </div>) : ''}
      <div className="card-content">{children}</div>
    </div>
  );
}

export default Card;
