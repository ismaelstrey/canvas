import React, { useEffect, useRef } from 'react';

const CanvasComponent: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            // Limpar o canvas
            ctx?.clearRect(0, 0, canvas.width, canvas.height);

            // Criar um retângulo vermelho
            if (ctx) {
                ctx.fillStyle = 'red';
                ctx.fillRect(50, 50, 100, 100);

                // Criar um círculo azul
                ctx.beginPath();
                ctx.arc(200, 200, 50, 0, 2 * Math.PI);
                ctx.fillStyle = 'blue';
                ctx.fill();
            }
        }
    }, []);

    return <canvas ref={canvasRef} width={400} height={400} />;
};

export default CanvasComponent;
