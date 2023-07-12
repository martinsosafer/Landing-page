'use client';

import { motion } from 'framer-motion';

import styles from '../styles';

import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title="| People around the world" textStyles="text-center" />
      <TitleText
        title={<>Track friends around you and invite them to play together in the same world </>}
        textStyles="text-center"
      />
      <motion.div variant={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full hfull object-cover"
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="/people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="/people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="/people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
          <div className="absolute bottom-[35px] left-[8%]">
  <div className="rounded-lg overflow-hidden">
    <img src="Mask Group.png" alt="people" className="w-32 h-24 border-4 border-purple-500" />
    <p className="text-white bg-transparent text-center text-xs py-1 absolute bottom-0 w-full">the upside down</p>
  </div>
</div>

<div className="absolute -top-[50px] right-[25%]">
  <div className="rounded-lg overflow-hidden">
    <img src="Mask Group2.png" alt="people" className="w-32 h-24 border-4 border-purple-500" />
    <p className="text-white bg-transparent text-center text-xs py-1 absolute bottom-0 w-full">Hawkins Lab</p>
  </div>
</div>

      </motion.div>
    </motion.div>
  </section>
);

export default World;
