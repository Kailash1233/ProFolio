import React, { useState } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaBehance,
  FaYoutube,
  FaMapMarkerAlt,
  FaFilePdf,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ProfilePage = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-1/4 bg-gray-100 p-6 shadow-lg md:h-screen md:sticky md:top-0">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center mb-6">
              <img
                src="/images/Kailash.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full mb-2 border border-black border-opacity-40"
              />
              <h2 className="text-2xl font-bold mb-2">Kailash G</h2>
              <div className="flex items-center space-x-1 text-gray-600">
                <FaMapMarkerAlt />
                <span>Chennai</span>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            Seeking Immediate Web Dev Role | Empowering Growth with Dynamic
            Development, SEO | Aspiring Full Stack Dev | JavaScript, React.js,
            Next.js | BSACIST'24
          </motion.p>

          <motion.ul
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-4"
          >
            <li>
              <a
                href="https://www.linkedin.com/in/kailash1203/"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 text-lg"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kailash1233"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 text-lg"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/your-username"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 text-lg"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/your-username"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 text-lg"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://behance.net/your-username"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 text-lg"
              >
                <FaBehance />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/your-username"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 text-lg"
              >
                <FaYoutube />
              </a>
            </li>
            <li>
              <a
                href="path_to_your_resume.pdf"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 text-lg"
              >
                <FaFilePdf />
              </a>
            </li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6"
          >
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Subscribe to newsletter"
                value={email}
                onChange={handleEmailChange}
                className="w-full p-2 mb-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="w-full p-2 bg-gray-800 text-white rounded"
              >
                Subscribe
              </button>
            </form>
          </motion.div>

          <motion.a
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="https://the-k-innovations.vercel.app/"
            className="fixed bottom-8 bg-slate-800 text-gray-300 p-2 shadow-lg rounded-full flex items-center justify-between"
          >
            Want your Profolio?👾
          </motion.a>
        </div>
        <div className="w-full md:w-3/4 md:ml-1/4 p-6 overflow-y-auto">
          <motion.section
            className="mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-lg font-semibold text-justify">
              I'm Kailash G graduated from B.S. Abdur Rahman Crescent Institute
              of Science and Technology. I am highly motivated to excel in my
              career and continuously enhance my skills. I have a solid
              foundation in HTML, CSS, JavaScript, JS Frameworks, and optimizing
              website performance. Furthermore, I am actively seeking
              opportunities to apply and enhance my existing skills with
              real-world experience. I am dedicated and enthusiastic about
              finding avenues to grow professionally. Let's connect on LinkedIn
              to share ideas and collaborate towards achieving our career goals
              together. I am eager to make valuable contributions and seize
              entry-level opportunities that allow me to effectively showcase my
              skills and potential. Thank you, and let's soar to new heights
              together! 🚀
            </p>
          </motion.section>
          <motion.section
            className="mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="text-lg">
              <p>
                <b>BSA Crescent Institute of Science and Technology</b> -
                B.Tech, Information Technology{" "}
                <strong>(Oct 2020 - May 2024)</strong>
              </p>
              <p className="mt-4">
                <b>N.S.N Matriculation Higer Secondary School</b> - Certificate
                Programs HighSchool/ Secondary Certificate Programs{" "}
                <strong>(Jun 2014 - Jun 2020)</strong>
              </p>
            </div>
          </motion.section>
          <motion.section
            className="mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            <div className="p-6 border rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">
                Full Stack Developer @Amazon
              </h2>
              <p className="mb-4">
                Responsible for developing user-facing features using React.js,
                optimizing web applications for maximum speed and scalability,
                collaborating with back-end developers and web designers to
                improve usability.
              </p>
              <div className="flex flex-wrap">
                <span className="bg-gray-200 text-gray-700 p-2 rounded-full text-sm mr-2 mb-2">
                  React.js
                </span>
                <span className="bg-gray-200 text-gray-700 p-2 rounded-full text-sm mr-2 mb-2">
                  HTML5
                </span>
                <span className="bg-gray-200 text-gray-700 p-2 rounded-full text-sm mr-2 mb-2">
                  CSS3
                </span>
                <span className="bg-gray-200 text-gray-700 p-2 rounded-full text-sm mr-2 mb-2">
                  JavaScript
                </span>
                <span className="bg-gray-200 text-gray-700 p-2 rounded-full text-sm mr-2 mb-2">
                  TypeScript
                </span>
                <span className="bg-gray-200 text-gray-700 p-2 rounded-full text-sm mr-2 mb-2">
                  Node.js
                </span>
                <span className="bg-gray-200 text-gray-700 p-2 rounded-full text-sm mr-2 mb-2">
                  MongoDB
                </span>
                <span className="bg-gray-200 text-gray-700 p-2 rounded-full text-sm mr-2 mb-2">
                  Express.js
                </span>
                <span className="bg-gray-200 text-gray-700 p-2 rounded-full text-sm mr-2 mb-2">
                  Next.js
                </span>
                <span className="bg-gray-200 text-gray-700 p-2 rounded-full text-sm mr-2 mb-2">
                  Python
                </span>
                <span className="bg-gray-200 text-gray-700 p-2 rounded-full text-sm mr-2 mb-2">
                  RESTful APIs
                </span>
                <span className="bg-gray-200 text-gray-700 p-2 rounded-full text-sm mr-2 mb-2">
                  PHP
                </span>
                <span className="bg-gray-200 text-gray-700 p-2 rounded-full text-sm mr-2 mb-2">
                  Laravel
                </span>
                <span className="bg-gray-200 text-gray-700 p-2 rounded-full text-sm mr-2 mb-2">
                  SQL
                </span>
                {/* Add more skills as needed */}
              </div>
            </div>
            <div className="p-6 border rounded-lg shadow-md mt-4">
              <h2 className="text-xl font-bold mb-2">
                Backend Developer @Adobe
              </h2>
              <p className="mb-4">
                Responsible for building and maintaining efficient, reusable,
                and reliable PHP code, developing back-end components,
                integrating data storage solutions, and implementing front-end
                interfaces.
              </p>
              <div className="flex flex-wrap">
                <span className="bg-gray-200 text-gray-700 p-2 rounded-full text-sm mr-2 mb-2">
                  PHP
                </span>
                <span className="bg-gray-200 text-gray-700 p-2 rounded-full text-sm mr-2 mb-2">
                  MySQL
                </span>
                <span className="bg-gray-200 text-gray-700 p-2 rounded-full text-sm mr-2 mb-2">
                  RESTful APIs
                </span>
                {/* Add more skills as needed */}
              </div>
            </div>
          </motion.section>

          <motion.section
            className="mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 border rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Profolio 🤟</h3>
                <p className="mb-4">
                  Profolio is a sleek and intuitive web application designed to
                  create and showcase a comprehensive personal profile on a
                  single page. Ideal for job seekers, freelancers, and
                  professionals.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/your-repo"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://project-link.com"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="p-6 border rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">ICON'2K24 👨‍💻</h3>
                <p className="mb-4">
                  This website has been developed in conjunction with the IT
                  Department Symposium at BS Abdur Rahman Crescent University.
                  The Tech Stack used to build it was Next.js, MongoDB,
                  TailwindCSS and NodeMailer.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Kailash1233/icon2k24"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://icon2k24.vercel.app"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="p-6 border rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">The K Innovations 💲</h3>
                <p className="mb-4">
                  Built using Next.js, TailwindCSS, TypeScript, and Aceternity
                  UI, our platform ensures fast, responsive, and visually
                  stunning web solutions.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Kailash1233/The-K-Innovations"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://the-k-innovations.vercel.app/"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
          <motion.section
            className="mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 border rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaInstagram className="text-pink-500 mr-2" />
                  <h3 className="text-lg font-bold">Instagram User</h3>
                </div>
                <p className="text-sm text-justify">
                  This is a testimonial from Instagram. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Integer posuere erat a
                  ante.
                </p>
              </div>
              <div className="p-6 border rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaTwitter className="text-blue-400 mr-2" />
                  <h3 className="text-lg font-bold">Twitter User</h3>
                </div>
                <p className="text-sm text-justify">
                  This is a testimonial from Twitter. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Integer posuere erat a
                  ante.
                </p>
              </div>
              <div className="p-6 border rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaLinkedin className="text-blue-700 mr-2" />
                  <h3 className="text-lg font-bold">LinkedIn User 1</h3>
                </div>
                <p className="text-sm text-justify">
                  This is a testimonial from LinkedIn. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Integer posuere erat a
                  ante.
                </p>
              </div>
              <div className="p-6 border rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaLinkedin className="text-blue-700 mr-2" />
                  <h3 className="text-lg font-bold">LinkedIn User 2</h3>
                </div>
                <p className="text-sm text-justify">
                  This is another testimonial from LinkedIn. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Integer posuere erat a
                  ante.
                </p>
              </div>
              <div className="p-6 border rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaFacebook className="text-blue-600 mr-2" />
                  <h3 className="text-lg font-bold">Facebook User</h3>
                </div>
                <p className="text-sm text-justify">
                  This is a testimonial from Facebook. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Integer posuere erat a
                  ante.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
