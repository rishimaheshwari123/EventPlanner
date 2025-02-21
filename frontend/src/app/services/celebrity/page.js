"use client"
import HeroSlider from "@/components/comman/MainHero";
import Image from "next/image";
import { FaStar, FaMicrophone, FaFilm, FaMusic, FaCamera, FaUsers } from "react-icons/fa";
import image from "./img.jpg"; // Replace with actual image

function CelebrityEventPage() {
  return (
    <div className="min-h-screen">
      <HeroSlider
        image={image}
        description="Host grand celebrity events with impeccable planning and execution, ensuring a star-studded experience."
        title="Celebrity Events in Bhopal"
        blur="none"
      />

      <section className="py-16 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Star-Studded Experiences</h2>
          <p className="text-xl text-center mb-12">
            From exclusive meet-and-greets to large-scale entertainment extravaganzas, we bring unparalleled event management 
            expertise to ensure every celebrity event shines with glamour and sophistication.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              icon={FaStar}
              title="VIP Guest Management"
              description="Seamless coordination for celebrity arrivals and accommodations."
            />
            <FeatureCard
              icon={FaMicrophone}
              title="Stage & Performance Planning"
              description="Designing engaging and dynamic performances for the audience."
            />
            <FeatureCard
              icon={FaFilm}
              title="Media & PR Coverage"
              description="Maximize exposure with strategic media handling and PR."
            />
            <FeatureCard
              icon={FaMusic}
              title="Entertainment & Live Shows"
              description="Curating music and entertainment experiences to captivate audiences."
            />
            <FeatureCard
              icon={FaCamera}
              title="Photography & Videography"
              description="Capture every iconic moment with professional cinematography."
            />
            <FeatureCard
              icon={FaUsers}
              title="Audience & Security Management"
              description="Ensuring a safe and organized event experience for all attendees."
            />
          </div>

          <div className="text-center mb-12">
            <Image
              src={image}
              alt="Celebrity Event"
              width={600}
              height={400}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>

          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl">
            <h3 className="text-3xl font-semibold mb-4 text-center">Our Approach to Celebrity Events</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Meticulous planning for high-profile guests and artists.</li>
              <li>Luxury hospitality arrangements for celebrity comfort.</li>
              <li>State-of-the-art stage setup and sound engineering.</li>
              <li>Strategic brand partnerships and sponsorship handling.</li>
              <li>Efficient crowd control and elite security measures.</li>
              <li>Tailored experiences to match celebrity and audience expectations.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center text-gray-800">
      <Icon className="text-4xl mb-4 text-purple-600 mx-auto" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default CelebrityEventPage;
