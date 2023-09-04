import React, { useState } from 'react';

const DragAndDrop = () => {
    const [draggedItem, setDraggedItem] = useState(null);

    const handleDragStart = (event, item) => {
        event.dataTransfer.setData('text/plain', item);
        setDraggedItem(item);
    };

    const handleDragEnd = () => {
        setDraggedItem(null);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event, target) => {
        event.preventDefault();
        if (draggedItem) {
            // Move o item para a área de destino
            console.log(`Item '${draggedItem}' movido para a área ${target}`);
            setDraggedItem(null);
        }
    };

    return (
        <div>
            <div
                className="drag-area"
                onDragOver={handleDragOver}
                onDrop={(event) => handleDrop(event, 'esquerda')}
            >
                <h2>Área Esquerda</h2>
                <ul>
                    <li
                        draggable
                        onDragStart={(event) => handleDragStart(event, 'Item 1')}
                        onDragEnd={handleDragEnd}
                    >
                        Item 1
                    </li>
                    <li
                        draggable
                        onDragStart={(event) => handleDragStart(event, 'Item 2')}
                        onDragEnd={handleDragEnd}
                    >
                        Item 2
                    </li>
                </ul>
            </div>
            <div
                className="drag-area"
                onDragOver={handleDragOver}
                onDrop={(event) => handleDrop(event, 'direita')}
            >
                <h2>Área Direita</h2>
                <ul>
                    {/* Área de destino para os itens */}
                </ul>
            </div>
        </div>
    );
};

export default DragAndDrop;
