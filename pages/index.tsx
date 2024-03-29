import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import Card from '../components/card'
import Toggle from '../components/toggle'
import Footer from '../components/footer'
import data from '../data/plans.json'

const StyledMain = styled.main`
  background-image: url(/images/bg-top.svg), url(/images/bg-bottom.svg);
  background-position: right top, left bottom;
  background-repeat: no-repeat, no-repeat;
  background-size: 50%, 50%;

  @media (min-width: 768px) {
    background-size: auto, auto;
  }
`

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

      <StyledMain
        className="h-screen flex flex-col bg-[color:var(--light-grayish-blue)]
        text-[color:var(--very-dark-grayish-blue)]"
      >
        <div
          className="container mx-auto px-4 py-8 flex flex-1 items-center
          flex-col"
        >
          <h1 className="text-3xl my-5 md:mb-6">Our Pricing</h1>
          <Toggle checked={monthly} handleChange={handleChange} />
          <div
            className="grid justify-center items-center
            grid-cols-1 lg:grid-cols-3 mt-7"
          >
            {data.plans.map((d) => (
              <Card data={d} key={d.id} monthly={monthly} />
            ))}
          </div>
        </div>
        <Footer />
      </StyledMain>
    </div>
  )
}

export default Home
