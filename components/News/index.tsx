import React, { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleNews from "./SingleNews";

const News = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://shining-stars-dashboard.onrender.com/api/v1/news", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const reversedData = data.slice(0).reverse();
        setNews(reversedData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, [news]);

  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28 -mt-20">
      <div className="container">
        <SectionTitle
          title="Latest News"
          paragraph="Stay up-to-date with the latest news at our school!"
          center
        />

        {error && <p>Error: {error}</p>}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {news.map((post) => (
            <div key={post.id} className="w-full">
              <SingleNews post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
