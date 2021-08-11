import React from 'react'
import Container, { EContainer } from '../../components/layout/Container'
import ContainerImage from './ContainerImage'
import TextContainer, { ETextContainer } from '../../components/layout/TextContainer'

const Landing = () => {
  return (
    <div>
      <Container variant={EContainer.section} >
        <TextContainer variant={ETextContainer.large} label="Create or upload!" />
        <ContainerImage backgroundImage="" />
      </Container>
      <Container variant={EContainer.section} >
        <TextContainer variant={ETextContainer.large} label="Edit!" />
        <ContainerImage backgroundImage="" />
      </Container>
      <Container variant={EContainer.section} >
        <TextContainer variant={ETextContainer.large} label="Spin!" />
        <ContainerImage backgroundImage="" />
      </Container>
    </div>
  )
}

export default Landing