

"use client"
import HeroSlider from "@/components/comman/MainHero"
import Image from "next/image"
import {
  FaHeart,
  FaBabyCarriage,
  FaGift,
  FaUtensils,
  FaGamepad,
  FaCamera
} from "react-icons/fa"
import image from '../../../assets/baby.jpg' // Replace with actual image

function BridalBabyShowerPage() {
  return (
    <div className="min-h-screen">
      <HeroSlider
        image={image}
        description="Plan an unforgettable bridal or baby shower celebration with our expert event planning services."
        title="Bridal & Baby Showers in Bhopal"
        blur="none"
      />

      <section className="py-16 px-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            Celebrate New Beginnings
          </h2>
          <p className="text-xl text-center mb-12">
            Whether you're honoring a bride-to-be or welcoming a new addition to
            the family, our expert team will create a magical and memorable
            shower. We specialize in creative themes and personalized touches
            that make each event unique and special.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              icon={FaHeart}
              title="Customized Themes"
              description="Tailor-made decorations and setups to match your vision."
            />
            <FeatureCard
              icon={FaBabyCarriage}
              title="Baby-Friendly Options"
              description="Safe and adorable choices for baby showers."
            />
            <FeatureCard
              icon={FaGift}
              title="Gift Management"
              description="Organized gift-opening and thank-you card tracking."
            />
            <FeatureCard
              icon={FaUtensils}
              title="Catering Services"
              description="Delicious food and treats for all dietary needs."
            />
            <FeatureCard
              icon={FaGamepad}
              title="Fun Activities"
              description="Engaging games and entertainment for all guests."
            />
            <FeatureCard
              icon={FaCamera}
              title="Photo Opportunities"
              description="Beautiful backdrops and props for memorable pictures."
            />
          </div>

          <div className="text-center mb-12">
            <Image
              src={image}
              alt="Bridal shower celebration"
              width={600}
              height={400}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>

          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl">
            <h3 className="text-3xl font-semibold mb-4 text-center">
              Our Shower Planning Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-lg">
              <li>Initial consultation to understand your vision</li>
              <li>Theme and color scheme selection</li>
              <li>Venue booking and decoration planning</li>
              <li>Menu and cake design</li>
              <li>Activity and game planning</li>
              <li>Guest list management and invitations</li>
              <li>Day-of coordination and setup</li>
              <li>Post-event cleanup and gift organization</li>
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
      <Icon className="text-4xl mb-4 text-teal-600 mx-auto" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default BridalBabyShowerPage
