import Image from "next/image";
import sport from "../../public/images/shin/chil.jpg";

import neta from "../../public/images/shin/stuc.jpg";
import netb from "../../public/images/shin/stuf.jpg";
import netc from "../../public/images/shin/teac.jpg";
import netd from "../../public/images/shin/tt.jpg";

import foota from "../../public/images/shin/tt.jpg";
import footb from "../../public/images/shin/teac.jpg";
import footc from "../../public/images/shin/stue.jpg";
import footd from "../../public/images/shin/s.jpg";

import basketa from "../../public/images/shin/ear.jpg";
import basketb from "../../public/images/shin/st.jpg";
import basketc from "../../public/images/shin/teac.jpg";
import basketd from "../../public/images/shin/st.jpg";

import mind from "../../public/images/life/mind.jpg";


const AboutSectionLife2 = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 -mb-20 -mt-20">
      <div className="container">
        
      <div className="">
          <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl xl:text-6xl text-center">
            Student Sports Life
          </h3>
          <h3 className="mb-5 mt-3 text-xl font-bold text-black dark:text-white sm:text-xl lg:text-xl xl:text-xl text-center">
            Whether your passion is sport or sustainability, you&#39;re a foodie or keen on gaming, there are lots to choose from.
          </h3>

          <div className="flex flex-wrap -mx-4 mb-7">
           <div className="w-full px-4 lg:w-2/5 transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="wow fadeInUp relative mx-auto lg:m-0" data-wow-delay=".15s">
              <Image
                src={sport}
                alt="about image 1"
                className="w-[250px] h-[130px] sm:w-[250px] sm:h-[100px] md:w-[300px] md:h-[150px] lg:w-[300px] lg:h-[180px] xl:w-[350px] xl:h-[200px]"
              />
            </div>
          </div>
            
            <div className="w-full px-4 lg:w-3/5 flex flex-col">
              <div className="wow fadeInUp relative mx-auto lg:m-0" data-wow-delay=".15s">
                <p className="mb-4 text-base text-gray-600">
                  At Shining Stars, sports play a vital role in student life. From soccer and basketball to volleyball and athletics, students have numerous opportunities to engage in physical activities and competitions. The university&#39;s sports facilities are top-notch, providing a conducive environment for both recreational and competitive sports. Participating in sports not only helps students stay fit but also fosters teamwork, discipline, and leadership skills. Whether you&#39;re a seasoned athlete or just looking to stay active, Bugema University offers something for everyone.
     
                </p>
              </div>
            </div>
          </div>
          
          <h3 className="mb-2 text-xl font-bold text-black text-center sm:text-2xl lg:text-xl xl:text-2xl">
            Netball
          </h3>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0" data-wow-delay=".15s">
                <Image
                  src={neta}
                  alt="about image 1"
                  className="w-full h-auto"
                />
                {/* <h3 className="mb-5 mt-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  A matter of debate.
                </h3>
                <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
                  Join the debating society at Bugema University.
                </p> */}
                {/* <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Bugema Debating Union
                </button> */}
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0" data-wow-delay=".15s">
                <Image
                  src={netb}
                  alt="about image 2"
                  className="w-full h-auto"
                />
                {/* <h3 className="mb-5 mt-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  A matter of debate.
                </h3>
                <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
                  Join the debating society at Bugema University.
                </p> */}
                {/* <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Bugema Debating Union
                </button> */}
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0" data-wow-delay=".15s">
                <Image
                  src={netc}
                  alt="about image 3"
                  className="w-full h-auto"
                />
                {/* <h3 className="mb-5 mt-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  A matter of debate.
                </h3>
                <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
                  Join the debating society at Bugema University.
                </p> */}
                {/* <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Bugema Debating Union
                </button> */}
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0" data-wow-delay=".15s">
                <Image
                  src={netd}
                  alt="about image 4"
                  className="w-full h-auto"
                />
                {/* <h3 className="mb-5 mt-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  A matter of debate.
                </h3>
                <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
                  Join the debating society at Bugema University.
                </p> */}
                {/* <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Bugema Debating Union
                </button> */}
              </div>
            </div>
          </div>
          {/* ########END######### */}
          
          {/* ########END######### */}
            <h3 className="mb-2 text-xl font-bold text-black text-center sm:text-2xl lg:text-xl xl:text-2xl">
            Football
          </h3>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0" data-wow-delay=".15s">
                <Image
                  src={foota}
                  alt="about image 1"
                  className="w-full h-auto"
                />
                {/* <h3 className="mb-5 mt-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  A matter of debate.
                </h3>
                <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
                  Join the debating society at Bugema University.
                </p> */}
                {/* <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Bugema Debating Union
                </button> */}
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0" data-wow-delay=".15s">
                <Image
                  src={footb}
                  alt="about image 2"
                  className="w-full h-auto"
                />
                {/* <h3 className="mb-5 mt-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  A matter of debate.
                </h3>
                <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
                  Join the debating society at Bugema University.
                </p> */}
                {/* <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Bugema Debating Union
                </button> */}
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0" data-wow-delay=".15s">
                <Image
                  src={footc}
                  alt="about image 3"
                  className="w-full h-auto"
                />
                {/* <h3 className="mb-5 mt-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  A matter of debate.
                </h3>
                <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
                  Join the debating society at Bugema University.
                </p> */}
                {/* <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Bugema Debating Union
                </button> */}
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0" data-wow-delay=".15s">
                <Image
                  src={footd}
                  alt="about image 4"
                  className="w-full h-auto"
                />
                {/* <h3 className="mb-5 mt-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  A matter of debate.
                </h3>
                <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
                  Join the debating society at Bugema University.
                </p> */}
                {/* <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Bugema Debating Union
                </button> */}
              </div>
            </div>
          </div>
          {/* ########END######### */}
          
          {/* ########END######### */}
          <h3 className="mb-2 text-xl font-bold text-black text-center sm:text-2xl lg:text-xl xl:text-2xl">
            Basketball
          </h3>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0" data-wow-delay=".15s">
                <Image
                  src={basketa}
                  alt="about image 1"
                  className="w-full h-auto"
                />
                {/* <h3 className="mb-5 mt-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  A matter of debate.
                </h3>
                <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
                  Join the debating society at Bugema University.
                </p> */}
                {/* <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Bugema Debating Union
                </button> */}
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0" data-wow-delay=".15s">
                <Image
                  src={basketb}
                  alt="about image 2"
                  className="w-full h-auto"
                />
                {/* <h3 className="mb-5 mt-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  A matter of debate.
                </h3>
                <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
                  Join the debating society at Bugema University.
                </p> */}
                {/* <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Bugema Debating Union
                </button> */}
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0" data-wow-delay=".15s">
                <Image
                  src={basketc}
                  alt="about image 3"
                  className="w-full h-auto"
                />
                {/* <h3 className="mb-5 mt-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  A matter of debate.
                </h3>
                <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
                  Join the debating society at Bugema University.
                </p> */}
                {/* <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Bugema Debating Union
                </button> */}
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0" data-wow-delay=".15s">
                <Image
                  src={basketd}
                  alt="about image 4"
                  className="w-full h-auto"
                />
                {/* <h3 className="mb-5 mt-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  A matter of debate.
                </h3>
                <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
                  Join the debating society at Bugema University.
                </p> */}
                {/* <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Bugema Debating Union
                </button> */}
              </div>
            </div>
          </div>
          {/* ########END######### */}
          
        </div>
      </div>
    </section>
  );
};

export default AboutSectionLife2;
