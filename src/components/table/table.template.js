const CODES = {
    A: 65,
    Z: 90
}

function toCell() {
    return `
    <div class="cell" contenteditable></div>
    `
}

function toColumn(col) {
    return `
    <div class="column">${col}</div>
    `
}

function createRows(content, number) {
    return `
    <div class="row">
        <div class="row-info">${number ? number : ''}</div>
        <div class="row-data">${content}</div>
    </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCoutn = 15) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []
    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')
    const cell = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')

    rows.push(createRows(cols, null))

    for (let i = 0; i < rowsCoutn; i++) {
        rows.push(createRows(cell, i+1))
    }
    return rows.join('')
}
