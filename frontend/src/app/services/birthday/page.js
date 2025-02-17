"use client"
import HeroSlider from "@/components/comman/MainHero"
import React from "react"
import Image from "next/image"
import {
  FaGift,
  FaBirthdayCake,
  FaWineGlass,
  FaCamera,
  FaMusic,
  FaUserFriends
} from "react-icons/fa"
import image from '../../../assets/happyb.jpg'

function BirthdaysAnniversariesPage() {
  return (
    <div className="min-h-screen">
      <HeroSlider
        image={image}
        description="Make your special day unforgettable with our customized birthday and anniversary event planning services."
        title="Birthdays & Anniversaries in Bhopal"
        blur="none"
      />

      <section className="py-16 px-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            Celebrate Your Special Day in Style
          </h2>
          <p className="text-xl text-center mb-12">
            From intimate birthday parties to grand anniversary celebrations, we
            help you create magical moments that will last a lifetime. Our
            expert team ensures every detail is perfect, allowing you to relax
            and enjoy your special day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              icon={FaGift}
              title="Customized Themes"
              description="Tailor-made event themes that reflect your personality and style."
            />
            <FeatureCard
              icon={FaBirthdayCake}
              title="Gourmet Catering"
              description="Delicious menus crafted to delight you and your guests."
            />
            <FeatureCard
              icon={FaWineGlass}
              title="Bar Services"
              description="Professional bartenders serving your favorite drinks and cocktails."
            />
            <FeatureCard
              icon={FaCamera}
              title="Photography & Videography"
              description="Capture every moment with our professional photo and video services."
            />
            <FeatureCard
              icon={FaMusic}
              title="Entertainment"
              description="Live music, DJs, and performers to keep the party going."
            />
            <FeatureCard
              icon={FaUserFriends}
              title="Guest Management"
              description="Seamless RSVP tracking and guest list management."
            />
          </div>

          <div className="text-center mb-12">
            <Image
              src={image}
              alt="Birthday celebration"
              width={600}
              height={400}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>

          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl">
            <h3 className="text-3xl font-semibold mb-4 text-center">
              Why Choose Us for Your Celebration?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Years of experience in creating memorable events</li>
              <li>Dedicated event coordinator to handle all details</li>
              <li>Wide network of trusted vendors and suppliers</li>
              <li>Flexible packages to suit various budgets</li>
              <li>Attention to detail and commitment to excellence</li>
              <li>Stress-free planning process from start to finish</li>
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
      <Icon className="text-4xl mb-4 text-purple-600 mx-auto" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default BirthdaysAnniversariesPage
