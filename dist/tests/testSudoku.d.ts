import { Sudoku, Tile, ITile, Group, IGroup, Note } from "sudoku";
export declare class TestSudoku extends Sudoku<Tile<IGroup, Note>, Note, Group<ITile>> {
    constructor();
}
