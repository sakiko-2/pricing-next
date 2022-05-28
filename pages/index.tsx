import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Card from '../components/card'
import Toggle from '../components/toggle'
import data from '../data/plans.json'

const Home: NextPage = () => {
  const [monthly, setMonthly] = useState(false)

  const handleChange = () => setMonthly(!monthly)

  return (
    <div>
      <Head>
        <title>Pricing - plans</title>
        <meta name="description" content="Pricing - plans" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen bg-[color:var(--light-grayish-blue)]">
        <div
          className="container mx-auto px-4 h-full flex items-center
          flex-col"
        >
          <h1 className="text-3xl my-4">Our Pricing</h1>
          <Toggle checked={monthly} handleChange={handleChange} />
          <div
            className="flex flex-1 flex-row justify-center items-center
            flex-wrap md:flex-nowrap w-full"
          >
            {data.plans.map((d) => (
              <Card data={d} key={d.id} monthly={monthly} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
