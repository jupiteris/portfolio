import React, { useEffect } from "react";

export const Animation = () => {
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      // eslint-disable-next-line no-undef
      const t1 = gsap.timeline({ defaults: { ease: "power1.out" } });
      t1.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
      t1.to(".slider", { y: "-100%", duration: 1.5 });
      t1.to(".intro", { y: "-90%", duration: 1.5 }, "-=1.5");
      t1.fromTo(".nav-links", { opacity: 0 }, { opacity: 1, duration: 0.5 });
      t1.fromTo(".welcome", { opacity: 0 }, { opacity: 1, duration: 1 });
    }
    return () => (mounted = false);
  }, []);

  return (
    <>
      <div className="intro">
        <div className="intro-text">
          <h1 className="hide">
            <span className="text">Creating inovation</span>
          </h1>
          <h1 className="hide">
            <span className="text">For Everyday</span>
          </h1>
          <h1 className="hide">
            <span className="text">People</span>
          </h1>
        </div>
      </div>
      <div className="slider"></div>
    </>
  );
};
