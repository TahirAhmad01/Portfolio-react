import { motion } from "framer-motion";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import png from "../../../assets/images/blur.webp";

export default function Projects({ items }) {
  return (
    <>
      {items.map((item, idx) => (
        <Fade key={item.id}>
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="relative projectBtn max-h-60 md:h-52 lg:h-56 w-full object-contain  overflow-hidden"
              key={idx}
            >
              <LazyLoadImage
                src={item.image}
                placeholderSrc={png}
                alt={item.name}
                height="100%"
                width="100%"
                className="object-cover min-h-full"
                key={idx}
              />
              <div className="absolute bg-white/80 backdrop-blur  h-full w-full -bottom-full left-0 z-30 flex justify-center items-center slide-up transition-all ease-in-out duration-500 dark:text-black">
                <div>
                  <span className="font-semibold capitalize text-lg">
                    {item.name}
                  </span>
                  <div className="text-center">
                    {item.category.map((cat, idx) => (
                      <span className="mx-1" key={idx}>
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Fade>
      ))}
    </>
  );
}
