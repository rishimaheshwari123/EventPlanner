


"use client"
import HeroSlider from "@/components/comman/MainHero"
import Image from "next/image"
import {
  FaHeart,
  FaRing,
  FaCamera,
  FaUtensils,
  FaMusic,
  FaUserFriends
} from "react-icons/fa"
import image from '../../../assets/wedding.jpg'

function WeddingsPage() {
  return (
    <div className="min-h-screen">
      <HeroSlider
        image={image}
        description="Experience the magic of Bhopal's top wedding planners. Let us bring your dream wedding to life with personalized services, creativity, and attention to detail."
        title="Wedding Planners in Bhopal"
        blur="none"
      />

      <section className="py-16 px-6 bg-gradient-to-r from-pink-500 to-red-500 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            Your Dream Wedding, Crafted with Love
          </h2>
          <p className="text-xl text-center mb-12">
            At our wedding planning services in Bhopal, we ensure that every
            detail of your special day is flawless. From the initial concept to
            the final dance, we create an unforgettable celebration that you and
            your guests will cherish forever.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              icon={FaHeart}
              title="Personalized Themes"
              description="Curate a unique wedding theme that reflects your love story."
            />
            <FeatureCard
              icon={FaRing}
              title="Venue Selection"
              description="Find the perfect setting for your dream wedding."
            />
            <FeatureCard
              icon={FaCamera}
              title="Photography & Videography"
              description="Capture every magical moment of your special day."
            />
            <FeatureCard
              icon={FaUtensils}
              title="Catering & Refreshments"
              description="Delight your guests with exquisite culinary experiences."
            />
            <FeatureCard
              icon={FaMusic}
              title="Entertainment"
              description="Create the perfect ambiance with music and performances."
            />
            <FeatureCard
              icon={FaUserFriends}
              title="Guest Management"
              description="Ensure a seamless experience for all your loved ones."
            />
          </div>

          <div className="text-center mb-12">
            <Image
              src={image}
              alt="Wedding ceremony"
              width={600}
              height={400}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>

          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl">
            <h3 className="text-3xl font-semibold mb-4 text-center">
              Our Wedding Planning Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-lg">
              <li>
                Initial consultation to understand your vision and preferences
              </li>
              <li>Budget planning and management</li>
              <li>Venue selection and booking</li>
              <li>
                Vendor coordination (florists, decorators, caterers, etc.)
              </li>
              <li>Wedding design and theme development</li>
              <li>Timeline creation and management</li>
              <li>Guest list management and RSVP tracking</li>
              <li>Rehearsal coordination</li>
              <li>On-the-day coordination and troubleshooting</li>
              <li>Post-wedding wrap-up and vendor payments</li>
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
      <Icon className="text-4xl mb-4 text-pink-600 mx-auto" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default WeddingsPage
