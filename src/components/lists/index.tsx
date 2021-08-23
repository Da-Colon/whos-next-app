import { Route } from 'react-router-dom';
import { Routes } from '../../router/routes';
import Dashboard from './Dashboard';
import './styles.scss'

const ListMain = () => {
  // TODO sort by date created
  // TODO recent two with see all?
  // ! Future update
  // TODO sort by popularity
  // TODO will need page to look through and sort
  // TODO Search lists?
  return (
    <div className="lists-main-container">
      <Route path={Routes.lists} exact component={Dashboard}/>
      <Route path={Routes.listsNew}></Route>
      <Route path={Routes.listsEdit}></Route>
    </div>
  )
};

export default ListMain;
