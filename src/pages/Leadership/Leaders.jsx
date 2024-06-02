import React from "react";
import Leadership from "./Leadership";
import dean1 from "../../assets/dean1.jpg";
import g2 from "../../assets/g2.jpg";
import g3 from "../../assets/g3.jpg";
import g4 from "../../assets/g4.jpg";
import g5 from "../../assets/g5.jpg";
import l1 from "../../assets/l1.jpg";
import l2 from "../../assets/l2.jpg";
import l3 from "../../assets/l3.jpg";
import l4 from "../../assets/l4.jpg";


import "./leaders.css";
const Leaders = () => {
  return (
    <section className="members-section">
      <Leadership
        image={dean1}
        fullName="Dr john ndia"
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="ln.com"
        field="Patron of the club"
        biography="the school of it class."
      />
      <Leadership
        image={g3}
        fullName="Victory njeri"
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="ln.com"
        field="Chairperson of the club"
        biography="the school of it class."
      />
      <Leadership
        image={l1}
        fullName="Allan muhari"
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="ln.com"
        field=" Vice Chairperson of the club"
        biography="the school of it class."
      />
      <Leadership
        image={g4}
        fullName="Bridget Gitonga"
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="secretary of the club"
        field="Dean"
        biography="the school of it class."
      />
      <Leadership
        image={g5}
        fullName="Ruth Mutisya "
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="ln.com"
        field="treasurer of the club"
        biography="the school of it class."
      />
      <Leadership
        image={l2}
        fullName="Webster Ifedha"
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="ln.com"
        field="cyber security lead"
        biography="the school of it class."
      />
      <Leadership
        image={l3}
        fullName="Manase Gunga "
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="ln.com"
        field=" UI/UX lead"
        biography="the school of it class."
      />
      <Leadership
        image={g3}
        fullName="Carolyne Githenduka"
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="Mobile apps development lead"
        field="Dean"
        biography="the school of it class."
      />
      <Leadership
        image={l4}
        fullName="Stanley Amunze "
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="ln.com"
        field="web development lead"
        biography="the school of it class."
      />
      <Leadership
        image={l2}
        fullName="Evyonn Mbithe"
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="ln.com"
        field=" cloud engineering lead"
        biography="the school of it class."
      />
      <Leadership
        image={l1}
        fullName="Paul Karanja"
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="ln.com"
        field="Dean"
        biography="the school of it class."
      />
      <Leadership
        image={dean1}
        fullName="Francis kimani"
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="ln.com"
        field="power platform lead"
        biography="the school of it class."
      />
    </section>
  );
};
export default Leaders;
