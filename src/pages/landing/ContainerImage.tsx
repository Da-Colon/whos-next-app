import React, { FC } from 'react'
import Container, { EContainer } from '../../components/layout/Container'
const ContainerImage: FC<{backgroundImage: string}> = ({ backgroundImage }) => {
  return (
    <Container addClasses="w-full h-full">
      <Container addClasses="background-main max-w-128" styles={{height: '100%'}}>
        {/* !!TODO Add background image to div */}
      </Container>
      <Container variant={EContainer.text} styles={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
        Irure exercitation magna eiusmod esse esse irure nulla laboris ipsum non ut proident commodo. Culpa sint consequat non cillum. Officia in labore commodo dolore ad sint non fugiat quis. Et ullamco eiusmod enim elit adipisicing non. Incididunt incididunt exercitation id quis incididunt cupidatat mollit ea fugiat adipisicing adipisicing ea et duis.
      </Container>
    </Container>
  )
}

export default ContainerImage