import Head from '@components/toolkit/Head'
import { Pets } from '@pages/pets/Pets'
import React from 'react'

const HomePage: React.FC = () => {
  return (
    <>
      <Head title="Paws & Care | Pets" />
      <Pets />
    </>
  )
}

export default HomePage
