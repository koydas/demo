import styled from 'styled-components'

export const Table = styled.table`
width: 100%;

`
export const THead = styled.thead`

`
export const TBody = styled.thead`
background: #282828;

> tr:nth-child(even) {
    background: #4f4f4f;
}
`

export const Row = styled.tr`
> td:last-of-type {
    text-align: right;
}
`

export const HeaderCell = styled.th`
    text-align: left;
`

export const DataCell = styled.td`
    text-align: left;
`