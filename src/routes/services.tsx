import { IconContext } from "react-icons";

import { MdOutlineComputer } from "react-icons/md";
import { BsFillHddNetworkFill } from "react-icons/bs";
//import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { BiSolidCctv } from "react-icons/bi";

function Services() {
  return (
    <IconContext.Provider value={{ size: "3em" }}>
      <section className="section" id="services">
        <div className="section-header" data-aos="fade-up">
          <h2>Xidmətlər</h2>
          <p>İstəni̇lən çəti̇nli̇kdə həllər</p>
        </div>

        <div className="section-grid">
          <div className="section-card" data-aos="fade-up">
            <MdOutlineComputer />
            <h3>IT və telekommuni̇kasi̇ya si̇stemləri̇</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="section-card" data-aos="fade-up">
            <BsFillHddNetworkFill />
            <h3>Mühafi̇zə və zəi̇f axi̇n si̇stemləri̇</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="section-card" data-aos="fade-up">
            <BiSolidCctv />
            <h3>Sənaye avtomati̇kası və vi̇zuali̇zasi̇ya</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
    </IconContext.Provider>
  );
}

export default Services;
