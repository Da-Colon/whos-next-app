import React from 'react'
import Heading from '../../layout/Heading'
import Section from '../../layout/Section'
import ContainerImage from './ContainerImage'


const Landing = () => {
  return (
    <div>
      <Section>
        <Heading varient="heading-one" label="Create or upload!" />
        <ContainerImage backgroundImage="" />
      </Section>
      <Section>
        <Heading varient="heading-one" label="Edit!" />
        <ContainerImage backgroundImage="" />
      </Section>
      <Section>
        <Heading varient="heading-one" label="Spin!" />
        <ContainerImage backgroundImage="" />
      </Section>
    </div>
  )
}

export default Landing