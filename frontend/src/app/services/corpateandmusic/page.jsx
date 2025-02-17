"use client"
import HeroSlider from "@/components/comman/MainHero"
import Image from "next/image"
import { FaMusic, FaHeadphones, FaMicrophone, FaTicketAlt, FaLightbulb, FaMapMarkedAlt } from "react-icons/fa"

import image from '../../../assets/corprate.jpg' // Replace with actual image
function ConcertMusicFestivalPage() {
  return (
    <div className="min-h-screen">
      <HeroSlider
        image={image}
        description="Bring your musical vision to life with our expert planning for concerts and music festivals."
        title="Concerts & Music Festivals in Bhopal"
        blur="none"
      />

      <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Create Unforgettable Musical Experiences</h2>
          <p className="text-xl text-center mb-12">
            From intimate concerts to large-scale music festivals, we bring your musical vision to life. Our experienced
            team handles every aspect of event planning and execution, ensuring a seamless and electrifying experience
            for artists and audiences alike.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              icon={FaMusic}
              title="Artist Booking"
              description="Connect with top local and international talents."
            />
            <FeatureCard
              icon={FaHeadphones}
              title="Sound Engineering"
              description="Crystal-clear audio for an immersive experience."
            />
            <FeatureCard
              icon={FaMicrophone}
              title="Stage Design"
              description="Eye-catching setups that enhance performances."
            />
            <FeatureCard
              icon={FaTicketAlt}
              title="Ticketing Solutions"
              description="Hassle-free ticket sales and management."
            />
            <FeatureCard
              icon={FaLightbulb}
              title="Lighting & Effects"
              description="Create the perfect ambiance with state-of-the-art lighting."
            />
            <FeatureCard
              icon={FaMapMarkedAlt}
              title="Venue Selection"
              description="Find the ideal location for your musical event."
            />
          </div>

          <div className="text-center mb-12">
            <Image
              src={image}
              alt="Concert stage"
              width={600}
              height={400}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>

          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl">
            <h3 className="text-3xl font-semibold mb-4 text-center">Our Concert & Festival Planning Process</h3>
            <ol className="list-decimal list-inside space-y-2 text-lg">
              <li>Initial consultation to understand your vision and goals</li>
              <li>Venue selection and logistics planning</li>
              <li>Artist booking and contract negotiation</li>
              <li>Stage, sound, and lighting design</li>
              <li>Marketing and promotion strategy development</li>
              <li>Ticketing system setup and management</li>
              <li>Vendor coordination (food, merchandise, security)</li>
              <li>On-site event management and troubleshooting</li>
              <li>Post-event analysis and feedback collection</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center text-gray-800">
      <Icon className="text-4xl mb-4 text-indigo-600 mx-auto" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default ConcertMusicFestivalPage

