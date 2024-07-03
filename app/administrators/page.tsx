'use client';
import SectionTitle from "@/components/Common/SectionTitle";
import School from "@/components/school/School";
import React, { useState, useEffect } from 'react';
import Link from "next/link";

export default function Teaching() {

  const [administrators, setAdministrators] = useState([]);
  const [error, setError] = useState(null);

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
      <section className="my-20 mt-36 mx-10">
        {/* <School
          dean="DR. LUBOWA MARTIN"
          deanImage={"/images/blog/author-03.png"}
          message="As business times evolve, so are the skills needed to run such environments. The school of business Bugema University is always evolving to meet the current business trends. We shall equip you with the necessary skills in the areas of accounting, procurement, and management. Your decision to join us is a perfect one. Looking forward to serving and preparing you for a better future."
          preamble="The School of Business believes in integrity and excellence in business dealings. It is therefore dedicated to the education and development of individuals in the region and beyond. These will become business leaders of both private and public organizations through outstanding business-oriented research, instruction, and service. Therefore, the school endeavors to train and produce human resources that are not only professionals but also morally upright."
          goal="The goal of the School of Business is to train efficient and effective future professionals who integrate integrity and sound business and organizational functions and who are able to combine knowledge with analytical and practical skills in order to accurately define problems, find viable solutions, and implement desirable decisions."
        /> */}
      </section>

        <div className="flex flex-col items-start mx-auto md:pl-28">
            <div className="md:pl-2">
              <SectionTitle title="Administrators" paragraph="" />
            </div>
          </div>

                <div className="boxContainer md:flex flex flex-wrap md:flex-row">
                      {administrators.map((post) => (
                          <div className="box flex flex-col md:w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[450px] p-4 md:max-w-[25%] md:p-4 hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer" key={post._id}>
                              
                              {/* <div className="">
                              <Image src={chapter.photo} alt={chapter.name} className="w-full h-40 object-cover" style={{ height: "200px", width: "300px" }}/>
                              </div> */}
                              <div className="programTitle px-5">
                              <span className="text-xl text-[#1f8cad]">{post.title}</span>
                              </div>
                              <div className="programDesc">
                                <h2>{post.name}</h2>
                              </div>
                              {/* <div className="programDesc">
                                <h2>{post.description}</h2>
                              </div> */}
                              <button className="hover:bg-[#197996] w-40">
                              {/* <Link href={`/anjs/${id=chapter._id}`}> */}
                              <Link href={`/`}>
                                  Read More
                              </Link>
                              </button>
                          </div>
                      ))}

                    </div>
    </div>
  );
}
