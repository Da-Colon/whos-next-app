import React from 'react'
import { Route, useRouteMatch } from 'react-router'
import Container from '../../layout/Container'
import ListMain from './ListsMain'
import ListsNew from './ListsNew'

const ListsPage = () => {
  const { url } = useRouteMatch()
  return (
    <Container position="items-start">
      <Route path={`${url}`} component={ListMain} exact />
      <Route path={`${url}/new`} component={ListsNew} exact />
      <Route path={`${url}/edit`} exact />
    </Container>
  )
}

export default ListsPage