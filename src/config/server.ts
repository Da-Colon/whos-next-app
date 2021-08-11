
export const ServerRoutes = {
  auth: '/auth',
  createUser: '/users',
  saveList: '/lists',
  getUserLists: '/lists/user',
  getPublicLists: '/lists/public',
  updateList: (id: string) => `/lists/${id}`,
  deleteList: (id: string) => `/lists/${id}`
}