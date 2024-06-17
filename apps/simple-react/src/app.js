import React, { useState } from 'react';
import { AppWrapper, Content, TopButtons } from './app.styles.js'
import { validate_user } from './components/validators/user-validator.js'

import UsersTable from './components/users/table/users_table.js';
import UserForm, { get_user, resetForm } from './components/users/form/form.js'

import users_data from './components/users/users.json'

let users = users_data

function validate() {
  const first_name_input = document.querySelector('#first_name')
  const last_name_input = document.querySelector('#last_name')

  return validate_user({ first_name_input, last_name_input })
}

function App({ }) {

  const [data, setData] = useState(users)

  function add() {
    if (!validate()) return

    const user = get_user()
    users.push(user)

    setData([...users])

    resetForm()
  }

  function remove(e) {
    const row = e.target.parentNode.parentNode
    const id = row.attributes['data-id'].value

    if (!id)
      return

    users = users.filter(x => x.id != id)

    setData([...users.filter(x => x.id != id)])
  }

  return (
    <AppWrapper>
      <TopButtons>
        <UserForm add={add}/>
      </TopButtons>

      <Content>
        <UsersTable data={data} remove={remove} />
      </Content>
    </AppWrapper>
  );
}

export default App;
