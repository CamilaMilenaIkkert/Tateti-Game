import React from "react";

interface SquareProps {
    value: string | null;
    onClick: () => void; 
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
    return (
        <button
            className="w-20 h-20 bg-foreground border-2 border-primary text-xl flex items-center justify-center hover:bg-opacity-50"
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default Square;
