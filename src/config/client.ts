export enum Routes {
  Home = "/",
  Lists = "/lists",
  ListsNew = "/new",
  ListsEdit = '/edit/:listId',
  Picker = "/picker/:mode/:listId",
  PickerStandard = '/picker/standard',
  PickerPersistant = '/picker/persistant'
}

export const ClientRoutes = {
  home: "/",
  lists: "/lists",
  listsNew: "/lists/new",
  picker: (mode: string, listId: string) => `/picker/${mode}/${listId}`,
  listsEdit: (listId: string) => `/lists/edit/${listId}`
}