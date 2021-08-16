
export const ServerRoutes = {
  auth: '/auth',
  createUser: '/users',
  saveList: '/lists',
  getUserLists: '/lists/user',
  getPublicLists: '/lists/public',
  updateList: (id: string) => `/lists/${id}`,
  deleteList: (id: string) => `/lists/${id}`,
  getUserPreferences: '/userPreferences',
  putLikedLists: (id: string) => `/userPreferences/like/${id}`,
  putUnLikedLists: (id: string) => `/userPreferences/unlike/${id}`,
  putSelectedList: (id: string) => `/userPreferences/select/${id}`,
}