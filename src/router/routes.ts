export enum Routes {
  home = "/",
  picker = "/picker/:mode/:listId",
  lists = "/lists",
  listsNew = "/new",
  listsEdit = `/edit/:listId`,
}

export const ClientRoutes = {
  home: "/",
  picker: (mode: string, listId: string) => `/picker/${mode}/${listId}`,
  lists: "/lists",
  listsNew: "/lists/new",
  listsEdit: (listId: string) => `/lists/edit/${listId}`
}