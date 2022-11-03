import Row from "./row"
import { Color, WHITE, BLACK } from "./color"
import Cell from "./cell"

export default class Board {
    private _rows: Row[];

    constructor() {
        this._rows = [...Array(8)].map((_, i) => new Row(i));
        this._rows[3].cells[3].put(BLACK);
        this._rows[3].cells[4].put(WHITE);
        this._rows[4].cells[3].put(WHITE);
        this._rows[4].cells[4].put(BLACK);
    }

    get rows() {
        return this._rows;
    }

    put(cell: Cell, turn: Color): boolean {
        // if(this.search().length === 0) {
        //     return false;
        // }
        cell.put(turn);
        return true;
    }

    private search(): Cell[] {
        return [];
    }
}