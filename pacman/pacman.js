let board;
// 21 rows 19 columns each tile 32px
const rowcount = 21;
const colcount = 19;
const tilesize = 32;
const boardwidth = colcount*tilesize;
const boardheight = rowcount*tilesize;
let context;

window.onload = function(){
    board = document.getElementById('board');
    board.height = boardheight;
    board.width = boardwidth;
}