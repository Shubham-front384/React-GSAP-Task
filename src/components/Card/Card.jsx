import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

import "./Card.css";

const Card = ({ user }) => {
  const { name, tagline, img, logoImg, backgroundColor } = user;
  const cardRef = useRef();
  const logoRef = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current
      .to(cardRef.current, {
        y: -10,
        scale: 1.03,
        duration: 0.3,
        ease: "power3.out",
      })
      .to(
        logoRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
        },
        "<"
      );
    
    return () => tl.current.kill();
  }, []);

  return (
    <div className="card-info" style={{ backgroundColor }} ref={cardRef} onMouseEnter={() => tl.current.play()} onMouseLeave={() => tl.current.reverse()}>
      <h4 className="card-heading">
        <span>{name}</span>
        <span>{tagline}</span>
      </h4>

      <img src={img} alt={name} className="card-img" />

      <div className="card-details">
        <img src={logoImg} alt={`${name} logo`} ref={logoRef} />
        <h5 className="logo-name">
          <span>angga</span>
          <span>tantama</span>
        </h5>
      </div>
    </div>
  );
};

export default Card;
