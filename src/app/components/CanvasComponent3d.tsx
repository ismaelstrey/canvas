import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ThreeDComponent: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        if (canvasRef.current) {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

            const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
            renderer.setSize(window.innerWidth, window.innerHeight);

            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            camera.position.z = 5;

            const raycaster = new THREE.Raycaster();
            const mouse = new THREE.Vector2();

            const onMouseDown = (event: MouseEvent) => {
                setIsDragging(true);
                const offsetX = event.clientX / window.innerWidth * 2 - 1;
                const offsetY = -(event.clientY / window.innerHeight) * 2 + 1;
                dragOffset.x = offsetX;
                dragOffset.y = offsetY;
            };

            const onMouseUp = () => {
                setIsDragging(false);
            };

            const onMouseMove = (event: MouseEvent) => {
                if (isDragging) {
                    const offsetX = (event.clientX / window.innerWidth) * 2 - 1;
                    const offsetY = -(event.clientY / window.innerHeight) * 2 + 1;
                    mouse.x = offsetX - dragOffset.x;
                    mouse.y = offsetY - dragOffset.y;

                    raycaster.setFromCamera(mouse, camera);
                    const intersects = raycaster.intersectObject(cube);

                    if (intersects.length > 0) {
                        const intersect = intersects[0];
                        cube.position.copy(intersect.point);
                    }
                }
            };

            window.addEventListener('mousedown', onMouseDown);
            window.addEventListener('mouseup', onMouseUp);
            window.addEventListener('mousemove', onMouseMove);

            const animate = () => {
                requestAnimationFrame(animate);

                if (!isDragging) {
                    cube.rotation.x += 0.01;
                    cube.rotation.y += 0.01;
                }

                renderer.render(scene, camera);
            };

            animate();
        }
    }, [isDragging, dragOffset]);

    return <canvas ref={canvasRef} />;
};

export default ThreeDComponent;
