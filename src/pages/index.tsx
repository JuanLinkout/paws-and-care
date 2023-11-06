import Head from '@components/toolkit/Head'
import { Users } from '@pages/customers/Users'
import React from 'react'

const Home: React.FC = () => {
  return (
    <>
      <Head title="Paws & Care | Clientes" />
      <Users />
    </>
  )
}

export default Home
