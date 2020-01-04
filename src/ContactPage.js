import React, { useRef } from "react";
import "./sass/ContactPage.scss";
import ContactCard from "./ContactCard";
import { useInView } from "react-intersection-observer";
import brad from "./assets/brad.png";
import robert from "./assets/robert.png";
import keanu from "./assets/keanu.png";

function ContactPage(props) {
  const [ref1, inView1] = useInView({
    threshold: 0.7,
    triggerOnce: true
  });
  const [ref2, inView2] = useInView({
    threshold: 0.7,
    triggerOnce: true
  });
  const [ref3, inView3] = useInView({
    threshold: 0.7,
    triggerOnce: true
  });
  return (
    <div className="ContactPage">
      <div className="ContactPage-Content">
        <div
          ref={ref1}
          className="ContactPage-Content-Card"
          style={{ opacity: inView1 && "1" }}
        >
          <ContactCard
            img={brad}
            name="Брэд Питт"
            info="Директор, американский актёр и кинопродюсер"
          />
        </div>
        <div
          ref={ref2}
          className="ContactPage-Content-Card"
          style={{ opacity: inView2 && "1" }}
        >
          <ContactCard
            img={robert}
            name="Роберт Джон Дауни-младший"
            info="Главный редактор, миллионер, филантроп"
          />
        </div>
        <div
          ref={ref3}
          className="ContactPage-Content-Card"
          style={{ opacity: inView3 && "1" }}
        >
          <ContactCard
            img={keanu}
            name="Киану Ривз"
            info="Журналист, экзорцист, медиум"
          />
        </div>
      </div>
    </div>
  );
}
export default ContactPage;
