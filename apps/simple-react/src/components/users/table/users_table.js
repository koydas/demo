import React from 'react'
import styled from "styled-components"
import { ButtonLight as Button } from "../../forms/buttons.js"
import { DataCell, HeaderCell, Row, TBody, THead, Table } from "../../table/table.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Icon = styled(FontAwesomeIcon)`font-size: smaller;`

const UsersTable = ({ data, remove }) => <Table>
    <THead>
        <Row>
            <HeaderCell key="header-id">Id</HeaderCell>
            <HeaderCell key="header-first-name">First Name</HeaderCell>
            <HeaderCell key="header-last-name">Last Name</HeaderCell>
            <HeaderCell key="header-last-name"></HeaderCell>
        </Row>

    </THead>

    <TBody>
        {
            data.map(({ id, first_name, last_name }) =>
                <Row key={id} data-id={id}>
                    <DataCell>{id}</DataCell>
                    <DataCell>{first_name}</DataCell>
                    <DataCell>{last_name}</DataCell>
                    <DataCell>
                        <Button onClick={remove}>
                            <Icon icon={faTrashCan} />
                        </Button>
                    </DataCell>
                </Row>
            )
        }
    </TBody>

</Table>

export default UsersTable        