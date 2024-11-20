import React from 'react';
import Image from 'next/image';
import '../styles/card.css'; // CSSファイルのインポート

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="card">
            <Image 
                src={imageUrl} 
                alt={title} 
                width={400} // 適切な幅を指定
                height={200} // 適切な高さを指定
                layout="responsive"
            />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};

export default Card;
