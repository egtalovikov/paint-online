import {makeAutoObservable} from "mobx";

class ToolState {
    tool = null
    constructor() {
        makeAutoObservable(this)
    }

    setTool(tool) {
        this.tool = tool
    }
    setFillColor(color) {
        this.tool.fillColor = color
    }
    setStrokeColor(color) {
        this.tool.ctx.strokeStyle = color
    }
    setLineWidth(width) {
        this.tool.lineWidth = width
    }
    strokeColor() {
        return this.tool.strokeColor;
    }
}

export default new ToolState()