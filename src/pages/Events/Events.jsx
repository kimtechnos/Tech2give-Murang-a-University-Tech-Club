import Event from "./Event";
import "./events.css";
import l4 from "../../assets/l4.jpg";
import web from "../../assets/web.jpg";
import sec from "../../assets/sec.jpg";
import pow from "../../assets/power.jpg";
import grph from "../../assets/graph.jpg";
import cld from "../../assets/cloud.jpg";
import app from "../../assets/app.jpg";

const Events = () => {
  return (
    <section className="events-section">
      <Event
        image={sec}
        title="Cybersecurity"
        description="every Monday from 4pm to 7pm at computer lab F04, led by Webster Ifedha."
      />
      <Event
        image={grph}
        title="UI/UX "
        description=" every Tuesday from 5pm to 8pm at computer lab F04, led by Manase Gunga.."
      />
      <Event
        image={web}
        title="Web development"
        description=" every Wednesday from 6pm to 9pm at computer lab F04, led by Carolyne Githenduka."
      />
      <Event
        image={app}
        title="Mobile apps development"
        description="every Thursday from 4pm to 7pm led by Stanley Amunze."
      />
      <Event
        image={cld}
        title="Cloud engineering "
        description="every Monday from 4pm to 7pm at computer lab F04, led by Webster Ifedha."
      />
      <Event
        image={pow}
        title="Power Platform"
        description=" every Saturday from 1pm to 4pm at computer lab F04, led by Evyonn Mbithe."
      />
    </section>
  );
};
export default Events;
