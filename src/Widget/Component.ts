import { v4 as uuidv4 } from 'uuid'
import { GridUnit } from './types'
import Canvas from './Canvas'
import Container from './Container';
import { LeftLeaningContainer } from './containers';



export default class Component {
    
    constructor(
        private readonly _id: string = uuidv4(),
        private _width: GridUnit = 2,
        private _heigth: GridUnit = 2,
        private _locationTop: GridUnit = 1,
        private _locationLeft: GridUnit = 1,
        private _content: string = '<div></div>',
        private _shape: Container = new LeftLeaningContainer(),
        private _canvas?: Canvas
    ){}
    
    public get canvas(): Canvas|undefined {
        return this._canvas
    }
    public set canvas(value: Canvas) {
        this._canvas = value
    }
    public get content(): string {
        return this._content
    }
    public set content(value: string) {
        this._content = value
    }
    public get locationLeft(): GridUnit {
        return this._locationLeft
    }
    public set locationLeft(value: GridUnit) {
        this._locationLeft = value
    }
    public get locationTop(): GridUnit {
        return this._locationTop
    }
    public set locationTop(value: GridUnit) {
        this._locationTop = value
    }
    public get heigth(): GridUnit {
        return this._heigth
    }
    public set heigth(value: GridUnit) {
        this._heigth = value
    }
    public get width(): GridUnit {
        return this._width
    }
    public set width(value: GridUnit) {
        this._width = value
    }
    public get id(): string {
        return this._id
    }
    public get shape(): Container {
        return this._shape;
    }
    public set shape(value: Container) {
        this._shape = value;
    }
    
}