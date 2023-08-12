import React, {useEffect, useRef} from 'react';
import "../styles/canvas.scss"
import {observer} from "mobx-react-lite";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import {Button, Modal} from "react-bootstrap";

const Canvas = observer(() => {
    const canvasRef = useRef()

    useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Brush(canvasRef.current))
    }, []);

    const mouseDownHandler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL())
    }

    return (
        <div className="canvas">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <canvas onMouseDown={() => mouseDownHandler()} ref={canvasRef} width={600} height={400}></canvas>
        </div>
    );
});

export default Canvas;