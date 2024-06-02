import React from "react";
import Leadership from "./Leadership";
import dean1 from "../../assets/dean1.jpg";

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
        biography="Dr. John Ndia is an experienced tech visionary and a highly respected mentor. He has a rich background in Computing and innovation, guiding the club towards success."
      />
      <Leadership
        image={g3}
        fullName="Victory njeri"
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="ln.com"
        field="Chairperson of the club"
        biography="Victory Njeri is a dynamic leader with a passion for technology and community building. She drives the club's initiatives with dedication and vision."
      />
      <Leadership
        image={l1}
        fullName="Allan muhari"
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="ln.com"
        field=" Vice Chairperson of the club"
        biography="Allan Muhari excels in tech skills and leadership within the tech community. His commitment ensures the club's growth and development"
      />
      <Leadership
        image={g4}
        fullName="Bridget Gitonga"
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="secretary of the club"
        field="Dean"
        biography="Bridget Gitonga is highly organized and efficient, keeping the club's operations smooth. Her communication skills are key to our success."
      />
      <Leadership
        image={g5}
        fullName="Ruth Mutisya "
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="ln.com"
        field="treasurer of the club"
        biography="Ruth Mutisya manages the club's finances with precision and care. Her financial literacy ensures our resources are well-utilized."
      />
      <Leadership
        image={l2}
        fullName="Webster Ifedha"
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="ln.com"
        field="cyber security lead"
        biography="Webster Ifedha is an expert in cybersecurity, protecting our digital assets. He is dedicated to educating members about online safety."
      />
      <Leadership
        image={l3}
        fullName="Manase Gunga "
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="ln.com"
        field=" UI/UX lead"
        biography="Manase Gunga is passionate about creating intuitive and engaging user experiences. His designs elevate our projects to new heights."
      />
      <Leadership
        image={g3}
        fullName="Carolyne Githenduka"
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="Mobile apps development lead"
        field="web development lead"
        biography="Carolyne Githenduka specializes in web development, building robust and scalable applications. She leads our web projects with expertise."
      />
      <Leadership
        image={l4}
        fullName="Stanley Amunze "
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="ln.com"
        field="web development lead"
        biography="Stanley Amunze is an adept mobile app developer, creating innovative solutions. His work ensures our mobile presence is strong and effective."
      />
      <Leadership
        image={l2}
        fullName="Evyonn Mbithe"
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="ln.com"
        field="  power platform lead"
        biography=" Mbithe is a specialist in the Power Platform, driving innovation through automation and analytics. She empowers the club with her expertise."
      />
      <Leadership
        image={l1}
        fullName="Paul Karanja"
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="ln.com"
        field="Cloud Engineer"
        biography="Paul Karanja is an expert in cloud engineering, optimizing our cloud infrastructure. His knowledge ensures our systems are efficient and reliable."
      />
      <Leadership
        image={dean1}
        fullName="Francis kimani"
        twitterurl="x.com"
        fburl="fb.com"
        lnnurl="ln.com"
        field="fullstack Dev"
        biography="Kimtech is a skilled full stack developer proficient in both front-end and back-end technologies. His expertise enables the creation of comprehensive and seamless web applications."
      />
    </section>
  );
};
export default Leaders;
