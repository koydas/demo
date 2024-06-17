import React, { useState } from 'react';
import styled from 'styled-components'
import { Button } from './components/forms/buttons.js'
import { DataCell, HeaderCell, Row, Table } from './components/table/table.js'
import { Input } from './components/forms/input.js'
import { validate_user } from './components/validators/user-validator.js'

let users = [{
  id: 1,
  first_name: 'bob',
  last_name: 'gratton'
}]

function App({ }) {

  const [data, setData] = useState(users)

  function add() {
    if (!validate_user({
                          first_name_input: document.querySelector('#first_name'),
                          last_name_input: document.querySelector('#last_name') })) {
      return
    }

    const id = Math.max(...users.map(x => x.id)) + 1

    const first_name = document.querySelector('#first_name').value
    const last_name = document.querySelector('#last_name').value

    users.push({ id, first_name, last_name })
    setData([...users])

    document.querySelector('#first_name').value = ''
    document.querySelector('#last_name').value = ''
  }

  function remove(e) {
    const row = e.target.parentNode.parentNode
    const id = row.attributes['data-id'].value
    users = users.filter(x => x.id != id)

    setData([... users.filter(x => x.id != id)])
  }

  return (
    <div>
      <Input id='first_name' placeholder='first name' />
      <Input id='last_name' placeholder='last name' />
      <Button onClick={add}>Add</Button>

      <Table>
        <thead>
          <Row>
            <HeaderCell key="header-id">Id</HeaderCell>
            <HeaderCell key="header-first-name">First Name</HeaderCell>
            <HeaderCell key="header-last-name">Last Name</HeaderCell>
          </Row>

        </thead>

        <tbody>
          {
            data.map(({ id, first_name, last_name }) => <Row key={id} data-id={id}>
              <DataCell>{id}</DataCell>
              <DataCell>{first_name}</DataCell>
              <DataCell>{last_name}</DataCell>
              <DataCell>
                <Button onClick={remove}>Remove</Button>
              </DataCell>
            </Row>
            )
          }
        </tbody>

      </Table>
    </div>
  );
}

export default App;
