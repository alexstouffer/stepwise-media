import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Careers: NextPage = () => {
return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
            <title>Careers | Stepwise Media</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
            <h1 className="text-6xl font-bold">Careers at StepWise Media</h1>

            <p className="mt-3 text-2xl">
                We currently do not have any open positions, but we are always interested in connecting with talented freelancers looking for overflow work. Please send inquiries to{' '}
                <a className="text-blue-600" href="mailto:info@stepwise.media">
                    info@stepwise.media
                </a>.
            </p>

            <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
                <a
                    href="https://www.linkedin.com/company/stepwise-media"
                    className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                >
                    <h3 className="text-2xl font-bold">Connect on LinkedIn &rarr;</h3>
                    <p className="mt-4 text-xl">
                    Follow us on LinkedIn to stay updated on our company and any future job opportunities.
                    </p>
                </a>
            </div>
        </main>
    </div>
)}

export default Careers