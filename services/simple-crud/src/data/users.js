export const users = [
    {
        id: 1,
        first_name: 'Stephane',
        last_name: 'Hamel'
    },
    {
        id: 2,
        first_name: 'John',
        last_name: 'Doe'
    },
]

export function findUser(id) {
    return users.find(x => x.id == id)
}

export default users