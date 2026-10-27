import { data } from "../../data/data";
import Message from "../message/Message";

export default function Card() {
  return (
    <div className="w-[60%] max-w-3xl overflow-hidden m-4">
      <ul className="flex gap-6 transition-transform duration-300">
        {data.map((profile) => (
          <Profile
            name={profile.name}
            key={profile.id}
            img={profile.image}
            role={profile.role}
          />
        ))}
      </ul>
    </div>
  );
}

function Profile({ name, img, role }) {
  return (
    <li className="w-full flex flex-shrink-0 flex-col items-center border p-4">
      <img
        src={img}
        alt=""
        className="w-24 h-24 rounded-full object-cover border-2 border-white/20 shadow-md"
      />
      <p>{name}</p>
      <p>{role}</p>
      <Message>Message</Message>
    </li>
  );
}
