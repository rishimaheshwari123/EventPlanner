import Image from "next/image";
import s1 from "@/assets/s1.png";
import s2 from "@/assets/s2.png";
const LatestShot = () => {
  return (
    <section className="latest-shot bg-gradient-to-r bg-[#1d3432] py-12">
      <h2 className="text-3xl font-bold text-white text-center mb-4">
        Latest Shoots
      </h2>
      <hr className="w-16 text-center mx-auto border-yellow-500 mb-4" />
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center ">
          <div className="md:w-1/2 flex justify-center ">
            <Image
              src={s1}
              alt="Wedding Shot"
              width={500}
              height={350}
              className=" w-screen h-auto ml-10 md:ml-0  rounded-lg"
            />
          </div>
          <div className="md:w-1/2 mt-6  text-center md:text-left px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-red-500 mb-3 md:mb-4">
              The Big Day
            </h2>
            <p className="text-white text-base md:text-2xl leading-relaxed">
              A celebration of love, joy, and commitment. This wedding was a
              moment to remember, a union of two souls bound forever.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2  text-center md:text-left px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-red-500 mb-3 md:mb-4">
              A Promise for a Lifetime
            </h2>
            <p className="text-white  text-base md:text-2xl leading-relaxed">
              The vows exchanged, promises made, and a future full of dreams.
              This special moment was captured forever.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={s2}
              alt="Wedding Promise"
              width={500}
              height={350}
              className=" rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestShot;
