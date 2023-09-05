import { useEffect, useRef, useState } from "react"


const Draw = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [position, setPosition] = useState({ x: 50, y: 50 })
    const [display, setDisplay] = useState({ x: 1080, y: 920 })






    const desenha = (ctx: any) => {
        let imagemLogo = new Image();
        imagemLogo.src = "/vercel.svg"
        imagemLogo.addEventListener("load", () => {
            ctx.clearRect(0, 0, display.x, display.y)
            ctx.drawImage(imagemLogo, position.x, position.y, 100, 50)
        })
    }


    useEffect(() => {
        const canvasEl = canvasRef.current;
        if (!canvasEl) return;
        const ctx = canvasEl.getContext("2d");
        desenha(ctx)
        canvasEl.addEventListener('mousemove', (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
            console.log(position, e.clientX)
        })
    }, [position]);

    return <canvas
        ref={canvasRef}
        id="meucanvas"
        width={display.x}
        height={display.y}
        className="block w-screen h-screen border border-solid ml-auto mr-auto bg-red-700 m-0 p-0"
    ></canvas>
}

const MyCanvas = () => {
    return <Draw />
}
export default MyCanvas