
"use client"
import HeroSlider from "@/components/comman/MainHero"
import Image from "next/image"
import {
  FaMapMarkedAlt,
  FaHotel,
  FaPlane,
  FaCamera,
  FaUtensils,
  FaGlassCheers
} from "react-icons/fa"
import image from '../../../assets/disti.jpg'

function DestinationWeddingsPage() {
  return (
    <div className="min-h-screen">
      <HeroSlider
        image={image}
        description="Create unforgettable memories with a stunning destination wedding in beautiful Bhopal."
        title="Destination Weddings in Bhopal"
        blur="none"
      />

      <section className="py-16 px-6 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            Your Dream Wedding in Bhopal
          </h2>
          <p className="text-xl text-center mb-12">
            Experience the magic of a destination wedding in Bhopal, the City of
            Lakes. Our expert team will transform your vision into reality,
            creating a celebration that perfectly blends local culture with your
            personal style.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              icon={FaMapMarkedAlt}
              title="Venue Selection"
              description="Discover Bhopal's most picturesque wedding locations."
            />
            <FeatureCard
              icon={FaHotel}
              title="Guest Accommodations"
              description="Arrange comfortable stays for all your guests."
            />
            <FeatureCard
              icon={FaPlane}
              title="Travel Coordination"
              description="Seamless transportation and logistics management."
            />
            <FeatureCard
              icon={FaCamera}
              title="Photography & Videography"
              description="Capture every moment of your special day."
            />
            <FeatureCard
              icon={FaUtensils}
              title="Catering Services"
              description="Exquisite local and international cuisine options."
            />
            <FeatureCard
              icon={FaGlassCheers}
              title="Entertainment"
              description="Curate unforgettable experiences for your guests."
            />
          </div>

          <div className="text-center mb-12">
            <Image
              src={image}
              alt="Destination wedding in Bhopal"
              width={600}
              height={400}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>

          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl">
            <h3 className="text-3xl font-semibold mb-4 text-center">
              Why Choose Bhopal for Your Destination Wedding?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>
                Rich cultural heritage and stunning architectural backdrops
              </li>
              <li>
                Variety of venues from lakeside resorts to historical palaces
              </li>
              <li>Excellent connectivity and infrastructure</li>
              <li>Diverse range of accommodation options for all budgets</li>
              <li>
                Unique blend of traditional and modern wedding experiences
              </li>
              <li>Opportunity for guests to explore local attractions</li>
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
      <Icon className="text-4xl mb-4 text-green-600 mx-auto" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default DestinationWeddingsPage
