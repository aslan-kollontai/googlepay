import { IconContext } from "react-icons";

import { MdOutlineComputer } from "react-icons/md";
import { BsFillHddNetworkFill } from "react-icons/bs";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { BiSolidCctv } from "react-icons/bi";

function Services() {
  return (
    <IconContext.Provider value={{ size: "3em" }}>
      <section className="section" id="services">
        <div className="section-header" data-aos="fade-up">
          <h2>Our Services</h2>
          <p>
            We offer a wide range of IT section to help your business succeed.
          </p>
        </div>

        <div className="section-grid">
          <div className="section-card" data-aos="fade-up">
            <MdOutlineComputer />
            <h3>IT infrastructure</h3>
            <p>
              We provide comprehensive IT infrastructure solutions, including
              hardware and software procurement, installation, and maintenance.
            </p>
          </div>
          <div className="section-card" data-aos="fade-up">
            <BsFillHddNetworkFill />
            <h3>Network and security systems</h3>
            <p>
              Our team specializes in designing and implementing robust network
              and security solutions to protect your business from cyber
              threats.
            </p>
          </div>
          <div className="section-card" data-aos="fade-up">
            <PiMicrosoftExcelLogoFill />
            <h3>Cloud and Microsoft 365 solutions</h3>
            <p>
              We offer cloud solutions tailored to your business needs,
              including Microsoft 365 integration, migration, and support.
            </p>
          </div>
          <div className="section-card" data-aos="fade-up">
            <BiSolidCctv />
            <h3>CCTV and Access Control systems</h3>
            <p>
              Our team provides end-to-end CCTV and access control solutions,
              ensuring the safety and security of your premises.
            </p>
          </div>
        </div>
      </section>
    </IconContext.Provider>
  );
}

export default Services;
