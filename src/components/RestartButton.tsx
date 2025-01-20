import React from "react";

interface RestartButtonProps {
    onRestart: () => void; // Función para reiniciar el juego
}

const RestartButton: React.FC<RestartButtonProps> = ({ onRestart }) => {
    return (
        <button
            className="w-36 self-center mt-16 px-4 py-2 bg-foreground border-2 border-primary text-white font-title rounded hover:bg-opacity-80 transition"
            onClick={onRestart}
        >
            Reiniciar Juego
        </button>
    );
};

export default RestartButton;
