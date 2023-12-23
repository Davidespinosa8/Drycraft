"use client"
import { About } from '@/app/components/About'
import { Banner } from '@/app/components/Banner'
import { Footer } from '@/app/components/Footer'
import { Header } from '@/app/components/Header'
import { JoinCommunity } from '@/app/components/JoinCommunity'
import { TransitionPage } from '@/app/components/TransitionPage'
import { Services } from './components/Services'
import { MessageForm } from './components/Messageform/MessageForm'

export default function Home() {

  return (
    <>
      <TransitionPage />
      <Header />
      <main>
        <Banner />
        <div className="max-w-6xl mx-auto">
        <span>
        <Services />
        <About />
        </span>
        </div>
        <MessageForm />
        <JoinCommunity />
        <Footer />
      </main>
    </>
  )
}
