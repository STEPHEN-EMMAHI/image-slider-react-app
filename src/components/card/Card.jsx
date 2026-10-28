import { useState } from "react";
import { data } from "../../data/data";
import Button from "../button/Button";

export default function Card() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  function handleNextCard() {
    setCurrentCardIndex((currentIndex) => {
      if (currentIndex >= data.length - 1) {
        return currentIndex;
      }

      return currentIndex + 1;
    });
  }

  function handlePreviousCard() {
    setCurrentCardIndex((currentIndex) => {
      if (currentIndex <= 0) {
        return currentIndex;
      }

      return currentIndex - 1;
    });
  }

  return (
    <div className="w-full flex items-center justify-center">
      <Button onClick={handlePreviousCard}>Previous</Button>
      <div className="w-[50%] max-w-3xl overflow-hidden m-4">
        <ul
          className="card-ul flex md:gap-4 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentCardIndex * 100}%)` }}
        >
          {data.map((profile) => (
            <Profile
              key={profile.id}
              name={profile.name}
              img={profile.image}
              role={profile.role}
            />
          ))}
        </ul>
      </div>
      <Button onClick={handleNextCard}>Next</Button>
    </div>
  );
}

function Profile({ name, img, role }) {
  return (
    <li
      className={`w-full md:w-[calc(50%-12px)] flex flex-shrink-0 flex-col items-center gap-4 border p-4 rounded-2xl`}
    >
      <img
        src={img}
        alt=""
        className="w-24 h-24 rounded-full object-cover border-2 border-white/20 shadow-md"
      />
      <div className="text-center">
        <p>{name}</p>
        <p>{role}</p>
      </div>
      <Button className={`bg-blue-900 text-white px-3.5 py-2.5 rounded-2xl`}>
        Message
      </Button>
    </li>
  );
}
