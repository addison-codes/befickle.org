import Head from 'next/head';
import React from 'react'
import MainLayout from "../components/layout/MainLayout"

const mail = () => {
  return (
    <div>
      <Head>
        <title>Live Fickle | Mail</title>
        <meta name="description" content="Be Fickle. Be Flawed. Be You." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
      <iframe className='mx-auto ' width="540" height="505" src="https://8bb46aee.sibforms.com/serve/MUIEANXvu10TzbV-Vosrgfw-tzvxzLwD5Rm8CXYNNX4Ti7hlevEAeFMwwEK02Zwnc-Qtc_bJhhAvJUynqIFzof_L4-xlzfnppDIETB0M7XlzxX4FsDmM8klKcTj7QjvkDbMVk1i7zmmPedvdITgClgT61nwpvqXUJn4uBOaG3yenkewvmJMQtlbMq8eD8OWBUJmf6eJplFPURRvI" frameborder="0" scrolling="auto" allowfullscreen ></iframe>

      </MainLayout>
    </div>
  )
}

export default mail