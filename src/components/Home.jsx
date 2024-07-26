import React from "react";
import heroImage from "../assets/heroImage.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="Home"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="ext-4xl sm:text-7xl font-bold text-white">I'm a front-end developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere
            id doloremque. Adipisci facere voluptates sed odit corporis omnis
            ipsum esse eos provident illum? Saepe ipsa itaque ullam ut quibusdam
            ratione nesciunt voluptate molestiae porro ex, totam obcaecati
            necessitatibus iusto tempore mollitia quisquam minima, quaerat
            facere numquam officia dicta ad odio nihil. Accusamus illum ducimus
            numquam amet laboriosam, voluptatem facilis, molestias nostrum modi
            nulla adipisci ipsum at nisi iure, recusandae sed. Architecto
            magnam, fugiat consequatur consequuntur itaque neque at deserunt
            quidem quibusdam sequi nostrum reprehenderit delectus quaerat ullam
            odit facilis voluptate ex!
          </p>
          <div>
            <button>
              Portfolio
              <span>
                <MdKeyboardArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img 
          src={heroImage} 
          alt="myprofile"
          className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
