import type { NextPage } from 'next'
import Head from 'next/head'

const PrivacyPolicy: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Privacy Policy - StepWise Media</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-4xl w-full p-6">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg mb-4">
            At Stepwise Media, we are committed to protecting the privacy and
            security of our clients and website visitors. This Privacy Policy
            explains how we collect and use personal information, and how we
            protect the privacy of our visitors and clients.
          </p>
          <p className="text-lg mb-4">
            We may collect personal information when you voluntarily submit it
            to us by filling out a form or contacting us through our website or
            via email. This may include your name, email address, phone number,
            and any other information you provide.
          </p>
          <p className="text-lg mb-4">
            We use personal information to communicate with you, to provide you
            with services, to improve our website and services, and to provide
            you with information that may be of interest to you.
          </p>
          <p className="text-lg mb-4">
            We do not share your personal information with third parties, except
            as required by law or as necessary to provide you with our services.
          </p>
          <p className="text-lg mb-4">
            We take the security of your personal information seriously and use
            reasonable measures to protect it from unauthorized access,
            disclosure, or misuse.
          </p>
          <p className="text-lg mb-4">
            If you have any questions or concerns about our Privacy Policy,
            please contact us at info@stepwise.media.
          </p>
        </div>
      </main>

    </div>
  )
}

export default PrivacyPolicy
