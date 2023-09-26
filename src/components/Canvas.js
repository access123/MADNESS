import React from 'react'
import { useEffect, useRef } from 'react'
export default function Canvas() {
    const canvasRef = useRef();
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')
        context.beginPath(); // Start a new path
        context.moveTo(30, 50); // Move the pen to (30, 50)
        context.lineTo(150, 100); // Draw a line to (150, 100)
        context.stroke(); // Render the path
    }, [])
    return (
        <>
            <canvas ref={canvasRef}></canvas>
        </>
    );
}