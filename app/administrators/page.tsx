'use client';
import SectionTitle from "@/components/Common/SectionTitle";
import Breadcrumb from "@/components/Common/Breadcrumb";
import School from "@/components/school/School";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';

export default function Teaching() {

  const [administrators, setAdministrators] = useState([]);
  const [error, setError] = useState(null);
  let id = "";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://shining-stars-dashboard.onrender.com/api/v1/admins", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setAdministrators(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <section className="my-20 mt-5 mx-10">
      <Breadcrumb
        pageName="Administrators"
        description="
        Shining Stars is a place for everyone, somewhere you can be yourself. Whether you're an out-of-the-box thinker, boundary-breaker or change-maker, this is where you'll get ahead and find your place as part of a global community.
        "
      />
      </section>

        <div className="flex flex-col items-start mx-auto md:pl-28 justify-center items-center">
            <div className="md:pl-2 ">
              <SectionTitle title="Administrators" paragraph="" />
            </div>
          </div>

                <div className="boxContainer justify-center items-center md:flex flex flex-wrap md:flex-row mb-20">
                      {administrators.map((post) => (
                          <div className="box bg-gray-300 flex flex-col md:w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[450px] p-3 md:max-w-[25%] md:p-4 hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer" key={post._id}>
                              
                              <Image 
                                src={post.photo} 
                                alt={post.name} 
                                width={640} // Set the appropriate width
                                height={360} // Set the appropriate height
                                className="w-full h-30 object-cover"
                              />
                              <div className="programTitle px-5 text-center">
                              <span className="text-xl text-[#1f8cad]">{post.title}</span>
                              </div>
                              <div className="programDesc text-center">
                                <h2>{post.name}</h2>
                              </div>
                              {/* <div className="programDesc">
                                <h2>{post.description}</h2>
                              </div> */}
                              <div className="flex justify-center mt-4">
                                <Link href={`/admin/${id=post._id}`} passHref>
                                  <button className="hover:bg-[#197996] bg-[#1f8cad] text-white px-4 py-2 rounded">
                                    Read More
                                  </button>
                                </Link>
                              </div>
                          </div>
                      ))}

                    </div>
    </div>
  );
}
