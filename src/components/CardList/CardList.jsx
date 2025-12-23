import users from "../../data/users";
import Card from "../Card/Card";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

import './CardList.css'

const CardList = () => {
  const container = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.card-info', {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out"
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div className="all-cards" ref={container}>
      {users.map((user) => (
        <Card key={user.name} user={user} />
      ))}
    </div>
  );
};

export default CardList;
