const mockDb = {
    createUser: async arg => arg
}

async function usersCreate(event, context) {
    const user = {name: 'sample_name', surname: 'sample_surname'}
    await mockDb.createUser(user)
    return user
}