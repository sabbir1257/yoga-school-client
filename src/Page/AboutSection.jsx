import React from "react";
import { Helmet } from "react-helmet";

const AboutSection = () => {
  return (
    <section className="bg-gray-100 rounded-lg my-8 p-10 ">
      <Helmet>
        <title>Yoga School | About</title>
      </Helmet>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center border-b-4 w-2/5 mx-auto">
          Welcome to Yoga <span className="text-lime-500">School</span>
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          At Yoga School, we are committed to promoting health, well-being, and
          self-discovery through the practice of yoga. With a rich heritage and
          a team of experienced instructors, we provide a nurturing environment
          for individuals of all levels to explore and deepen their yoga
          journey.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our school offers a wide range of yoga classes that cater to different
          needs and preferences. From Hatha and Vinyasa to Ashtanga and Yin, our
          diverse class offerings ensure that you can find a style that
          resonates with you. Our experienced teachers guide each session with
          compassion, encouraging mindfulness and alignment in every pose.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          We believe that yoga is not just a physical practice but also a path
          to inner transformation. Alongside our classes, we offer workshops and
          retreats that delve deeper into the philosophies of yoga, meditation
          techniques, and holistic wellness practices. These opportunities allow
          you to broaden your understanding and connect with like-minded
          individuals on your spiritual journey.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our state-of-the-art facilities provide a welcoming and serene space
          for your practice. Equipped with spacious yoga rooms, relaxing
          meditation areas, and modern amenities, our school creates an
          environment that supports your growth and relaxation. We strive to
          create a sense of community where you can find support, inspiration,
          and connection with fellow yogis.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Whether you are a beginner or an experienced practitioner, Yoga School
          is here to guide you on your path. Our dedicated team is passionate
          about sharing the transformative power of yoga and helping you
          cultivate strength, flexibility, and inner peace. Join us at Yoga
          School and embark on a transformative journey of self-discovery,
          wellness, and harmony.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
