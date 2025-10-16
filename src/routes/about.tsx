import { IconContext } from "react-icons";

import { IoSettingsSharp } from "react-icons/io5";
import { IoBuildSharp } from "react-icons/io5";
import { IoMdThumbsUp } from "react-icons/io";
import { AiFillExperiment } from "react-icons/ai";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdPrecisionManufacturing } from "react-icons/md";

function About() {
  return (
    <IconContext.Provider value={{ size: "3em" }}>
      <section className="section" id="benefits">
        <div className="section-header" data-aos="fade-up">
          <h2>Benefits</h2>
          <p>
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer
            support and precision in every detail.
          </p>
        </div>

        <div className="section-grid">
          <div className="section-card" data-aos="fade-up">
            <IoSettingsSharp />
            <h3>Adaptable performance</h3>
            <p>
              Our product effortlessly adjusts to your needs, boosting
              efficiency and simplifying your tasks.
            </p>
          </div>

          <div className="section-card" data-aos="fade-up">
            <IoBuildSharp />
            <h3>Built to last</h3>
            <p>
              Experience unmatched durability that goes above and beyond with
              lasting investment.
            </p>
          </div>

          <div className="section-card" data-aos="fade-up">
            <IoMdThumbsUp />
            <h3>Great user experience</h3>
            <p>
              Integrate our product into your routine with an intuitive and
              easy-to-use interface.
            </p>
          </div>

          <div className="section-card" data-aos="fade-up">
            <AiFillExperiment />
            <h3>Innovative functionality</h3>
            <p>
              Stay ahead with features that set new standards, addressing your
              evolving needs better than the rest.
            </p>
          </div>

          <div className="section-card" data-aos="fade-up">
            <MdOutlineSupportAgent />
            <h3>Reliable support</h3>
            <p>
              Count on our responsive customer support, offering assistance that
              goes beyond the purchase.
            </p>
          </div>

          <div className="section-card" data-aos="fade-up">
            <MdPrecisionManufacturing />
            <h3>Precision in every detail</h3>
            <p>
              Enjoy a meticulously crafted product where small touches make a
              significant impact on your overall experience.
            </p>
          </div>
        </div>
      </section>
    </IconContext.Provider>
  );
}

export default About;
