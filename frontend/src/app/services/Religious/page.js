

"use client"
import HeroSlider from "@/components/comman/MainHero"
import Image from "next/image"
import { FaPrayingHands, FaChurch, FaBook, FaUtensils, FaMusic, FaCamera } from "react-icons/fa"
import image from '../../../assets/ram.jpg' // Replace with actual image

function ReligiousEventPage() {
  return (
    <div className="min-h-screen">
      <HeroSlider
        image={image}
        description="Plan your religious events with reverence and attention to detail, ensuring everything goes smoothly."
        title="Religious Events in Bhopal"
        blur="none"
      />

      <section className="py-16 px-6 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Sacred Celebrations</h2>
          <p className="text-xl text-center mb-12">
            From intimate prayer ceremonies to large religious festivals, we offer comprehensive event planning services
            that honor your traditions and beliefs. Our experienced team ensures every detail is handled with the utmost
            respect and care.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              icon={FaPrayingHands}
              title="Ceremony Planning"
              description="Meticulous organization of religious rituals and customs."
            />
            <FeatureCard
              icon={FaPrayingHands}
              title="Venue Selection"
              description="Find the perfect sacred space for your event."
            />
            <FeatureCard
              icon={FaBook}
              title="Religious Coordination"
              description="Liaison with religious leaders and officiants."
            />
            <FeatureCard
              icon={FaUtensils}
              title="Catering Services"
              description="Customized menus respecting dietary laws and traditions."
            />
            <FeatureCard
              icon={FaMusic}
              title="Sacred Music"
              description="Arrange appropriate musical performances and choirs."
            />
            <FeatureCard
              icon={FaCamera}
              title="Event Documentation"
              description="Respectful photography and videography services."
            />
          </div>

          <div className="text-center mb-12">
            <Image
              src={image}
              alt="Religious ceremony"
              width={600}
              height={400}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>

          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl">
            <h3 className="text-3xl font-semibold mb-4 text-center">Our Approach to Religious Events</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Deep understanding and respect for various religious traditions</li>
              <li>Consultation with religious leaders to ensure proper protocols</li>
              <li>Attention to detail in all aspects of ceremony and celebration</li>
              <li>Coordination of traditional decorations and sacred items</li>
              <li>Management of guest lists and special accommodations</li>
              <li>Ensuring a reverent and meaningful experience for all attendees</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center text-gray-800">
      <Icon className="text-4xl mb-4 text-yellow-600 mx-auto" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default ReligiousEventPage

