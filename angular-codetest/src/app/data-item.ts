import { IDataItem } from "./idata-item";

export class DataItem implements IDataItem{
    label : string = ''
    value : number = 0
    length: number = 0
    height: number = 0
    constructor(label?:string, value?:number, length?:number, height?:number) {
        this.label= label ||''
        this.value = value || 0
        this.length = length || 0
        this.height = height || 0
    }
}
