import { useEffect, useRef } from "react"


const Draw = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);


    useEffect(() => {
        const canvasEl = canvasRef.current;
        if (!canvasEl) return;

        const ctx = canvasEl.getContext("2d");

        if (ctx) {
            // Definir a cor de preenchimento antes de desenhar
            ctx.fillStyle = "black";

            // Preencher um retângulo
            ctx.fillRect(0, 0, 100, 100);
            ctx.fillRect(400, 400, 100, 100);
            ctx.save();
            ctx.strokeStyle = "green"
            ctx.beginPath();
            ctx.moveTo(0, 100)
            ctx.lineTo(400, 400)
            ctx.closePath();
            ctx.stroke()
            ctx.save()

            ctx.fillStyle = "red"
            ctx.miterLimit = 10;
            ctx.scale(5.131494547787043, 5.131494547787043);
            ctx.translate(0.1571356275303657, 0);
            ctx.scale(5.111336032388664, 5.111336032388664);
            ctx.beginPath();
            ctx.moveTo(0, 10.6);
            ctx.lineTo(3.33, 10.6);
            ctx.lineTo(7.19, 14.82);
            ctx.lineTo(11.71, 19.76);
            ctx.lineTo(11.71, 18.52);
            ctx.lineTo(15.59, 18.52);
            ctx.lineTo(15.59, 17.66);
            ctx.lineTo(11.71, 17.66);
            ctx.lineTo(11.71, 16.05);
            ctx.lineTo(15.59, 16.05);
            ctx.lineTo(15.59, 15.2);
            ctx.lineTo(11.71, 15.2);
            ctx.lineTo(11.71, 13.59);
            ctx.lineTo(15.59, 13.59);
            ctx.lineTo(15.59, 12.74);
            ctx.lineTo(11.71, 12.74);
            ctx.lineTo(11.71, 11.13);
            ctx.lineTo(15.59, 11.13);
            ctx.lineTo(15.59, 10.28);
            ctx.lineTo(11.71, 10.28);
            ctx.lineTo(11.71, 9.88);
            ctx.lineTo(11.71, 8.66);
            ctx.lineTo(15.59, 8.66);
            ctx.lineTo(15.59, 7.81);
            ctx.lineTo(11.71, 7.81);
            ctx.lineTo(11.71, 6.2);
            ctx.lineTo(15.59, 6.2);
            ctx.lineTo(15.59, 5.35);
            ctx.lineTo(11.71, 5.35);
            ctx.lineTo(11.71, 3.74);
            ctx.lineTo(15.59, 3.74);
            ctx.lineTo(15.59, 2.89);
            ctx.lineTo(11.71, 2.89);
            ctx.lineTo(11.71, 1.28);
            ctx.lineTo(15.59, 1.28);
            ctx.lineTo(15.59, 0.42);
            ctx.lineTo(11.71, 0.42);
            ctx.lineTo(11.71, 0);
            ctx.lineTo(7.19, 4.94);
            ctx.lineTo(3.43, 9.05);
            ctx.lineTo(0, 9.05);
            ctx.lineTo(0, 10.6);
            ctx.lineTo(0, 10.6);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();



            // canvasEl.addEventListener('mousemove', (e) => {

            //     console.log(e)
            // })
            canvasEl.addEventListener('click', (e) => {

                console.log(e.clientX, e.clientY)
            })

            canvasEl.addEventListener('mousedown', (e) => {

                console.log(e.clientX, e.clientY)
            })

        }
    }, []);

    return <canvas
        ref={canvasRef}
        id="meucanvas"
        width={5000}
        height={3000}
        className="block w-screen h-screen border border-solid ml-auto mr-auto bg-red-700 m-0 p-0"
    ></canvas>
}

const MyCanvas = () => {
    return <Draw />
}
export default MyCanvas