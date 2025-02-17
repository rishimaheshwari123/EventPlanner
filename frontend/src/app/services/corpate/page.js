
"use client"
import HeroSlider from "@/components/comman/MainHero"
import Image from "next/image"
import { FaBusinessTime, FaUsers, FaChalkboardTeacher, FaBuilding, FaRegHandshake, FaLaptop } from "react-icons/fa"
import image from '../../../assets/corprate.jpg'

function CorporateEventsPage() {
  return (
    <div className="min-h-screen">
      <HeroSlider
        image={image}
        description="Experience the magic of Bhopal's top corporate event management companies. Partner with the leading corporate event specialists to make your next business event a remarkable success."
        title="Corporate Event Management in Bhopal"
        blur="sm"
      />

      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Elevate Your Corporate Events</h2>
          <p className="text-xl text-center mb-12">
            From intimate team-building sessions to large-scale conferences, we deliver exceptional corporate events
            that inspire, motivate, and leave a lasting impression. Our expert team handles every detail, allowing you
            to focus on your business objectives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              icon={FaBusinessTime}
              title="Conferences & Seminars"
              description="Large-scale events with seamless organization and execution."
            />
            <FeatureCard
              icon={FaUsers}
              title="Team Building"
              description="Engaging activities to boost morale and improve collaboration."
            />
            <FeatureCard
              icon={FaChalkboardTeacher}
              title="Workshops & Training"
              description="Tailored learning experiences for skill development."
            />
            <FeatureCard
              icon={FaBuilding}
              title="Product Launches"
              description="Memorable events to showcase your latest offerings."
            />
            <FeatureCard
              icon={FaRegHandshake}
              title="Networking Events"
              description="Create opportunities for meaningful business connections."
            />
            <FeatureCard
              icon={FaLaptop}
              title="Virtual & Hybrid Events"
              description="Seamlessly blend in-person and online experiences."
            />
          </div>

          <div className="text-center mb-12">
            <Image
              src={image}
              alt="Corporate event setup"
              width={600}
              height={400}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>

          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl">
            <h3 className="text-3xl font-semibold mb-4 text-center">Why Choose Us for Your Corporate Events?</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Experienced team with a track record of successful corporate events</li>
              <li>Comprehensive event management from concept to execution</li>
              <li>State-of-the-art technology integration for seamless experiences</li>
              <li>Tailored solutions to meet your specific business objectives</li>
              <li>Attention to detail and commitment to professionalism</li>
              <li>Flexible pricing options to suit various budgets</li>
              <li>Post-event analysis and ROI measurement</li>
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
      <Icon className="text-4xl mb-4 text-blue-600 mx-auto" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default CorporateEventsPage

