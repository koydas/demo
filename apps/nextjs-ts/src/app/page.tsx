
export default function Home() {
  const [data, setData] = useState(users)

  function add() {
    if (!validate_form()) return

    const user = get_user(users)
    users.push(user)

    setData([...users])

    resetForm()
  }

  function remove(e) {
    const row = e.target.closest('tr')
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
