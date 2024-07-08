'use client';

import SectionTitle from "@/components/Common/SectionTitle";
import School from "@/components/school/School";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function StudentLeader() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://shining-stars-dashboard.onrender.com/api/v1/prefects", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <section className="my-20 mt-36 mx-10">
        {/* <School
          dean="DR. LUBOWA MARTIN"
          deanImage={"/images/blog/author-03.png"}
          message="As business times evolve, so are the skills needed to run such environments. The school of business Bugema University is always evolving to meet the current business trends. We shall equip you with the necessary skills in the areas of accounting, procurement, and management. Your decision to join us is a perfect one. Looking forward to serving and preparing you for a better future."
          preamble=""
          goal=""
        /> */}
        <div className="flex flex-col items-start mx-auto md:pl-28">
          <div className="md:pl-2">
            <SectionTitle title="Leadership" paragraph="" />
          </div>
        </div>

                <div className="boxContainer md:flex flex flex-wrap md:flex-row">
                      {events.map((post) => (
                          <div className="box flex flex-col md:w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[450px] p-4 md:max-w-[25%] md:p-4 hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer" key={post._id}>
                              
                              <div className="">
                              {/* <Image src={post.photo} alt={post.name} className="w-full h-40 object-cover" /> */}
                              <Image src={post.photo} alt={post.name} layout="fill" />
                              </div>
                              <div className="programTitle px-5">
                              <span className="text-xl text-[#1f8cad]">{post.title}</span>
                              </div>
                              <div className="programDesc">
                                <h2>{post.name}</h2>
                              </div>
                              <div className="programDesc">
                                <h2>{post.description}</h2>
                              </div>
                          </div>
                      ))}

                    </div>
      </section>
    </div>
  );
}
