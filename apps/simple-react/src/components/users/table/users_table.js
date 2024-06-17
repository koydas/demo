import React, { useState } from 'react'
import { ButtonLight as Button } from "../../forms/buttons.js"
import { DataCell, HeaderCell, Row, TBody, THead, Table } from "../../table/table.js"
import { faCancel, faPen, faSave, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Input } from '../../forms/input.styles.js';



const UsersTable = ({ data, remove }) => {
    const [editMode, setEditMode] = useState(false)

    function save() {
        const id = document.querySelector('#edit-mode-id').innerText
        const first_name = document.querySelector('#edit-mode-first_name').value
        const last_name = document.querySelector('#edit-mode-last_name').value

        const user = data.find(x => x.id == id)
        
        user.first_name = first_name
        user.last_name = last_name

        console.log(user)

        setEditMode(!editMode)
    }

    function cancel() {
        setEditMode(!editMode)
    }

    function goEditMode() {
        setEditMode(!editMode)
    }

    return <Table>
        <THead>
            <Row>
                <HeaderCell key="header-id">Id</HeaderCell>
                <HeaderCell key="header-first-name">First Name</HeaderCell>
                <HeaderCell key="header-last-name">Last Name</HeaderCell>
                <HeaderCell key="header-last-name"></HeaderCell>
            </Row>

        </THead>

        <TBody>
            {data.map(({ id, first_name, last_name }) => {
                if (editMode)
                    return <Row key={id} data-id={id}>
                        <DataCell id='edit-mode-id'>{id}</DataCell>
                        <DataCell><Input id='edit-mode-first_name' defaultValue={first_name}/></DataCell>
                        <DataCell><Input id='edit-mode-last_name' defaultValue={last_name}/></DataCell>
                        <DataCell>
                            <Button onClick={save} icon={faSave} />
                            <Button onClick={cancel} icon={faCancel} />
                        </DataCell>
                    </Row>

                return <Row key={id} data-id={id}>
                    <DataCell>{id}</DataCell>
                    <DataCell>{first_name}</DataCell>
                    <DataCell>{last_name}</DataCell>
                    <DataCell>
                        <Button onClick={goEditMode} icon={faPen} />
                        <Button onClick={remove} icon={faTrashCan} />
                    </DataCell>
                </Row>
            }
            )}
        </TBody>
    </Table>;
}

export default UsersTable        