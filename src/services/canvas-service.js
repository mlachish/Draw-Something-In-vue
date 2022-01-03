import CanvasFreeDrawing from 'canvas-free-drawing';

export function createDrawingCanvas(element) {
    return new CanvasFreeDrawing({
        elementId: element.id,
        width: element.clientWidth,
        height: element.clientHeight,
    });
}

// export function getCurrentDrawing() {
//     return el.toDataURL();
// }

// export function clearCanvas() {
//     canvas.clear();
// }