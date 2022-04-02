import React, { useEffect } from "react";
import styles from "./SectionProfile.module.scss";
import {
  FaGithub,
  FaLinkedinIn,
  FaTelegram,
  FaInstagramSquare,
  FaMailBulk,
  FaMailchimp,
} from "react-icons/fa";

const SectionProfile = () => {

 
  
  return (
    <div className={styles.Profile}>
      <h2>
        <FaGithub />
        <a href="https://github.com/BRAUZER06">Мой гит</a>
      </h2>
      <h2>
        <FaMailchimp />
        <a href="https://vk.com/brauzer06">Вконтакте</a>
      </h2>
      <h2>
        <FaTelegram />
        <a href="https://t.me/ING_6">Телеграм</a>
      </h2>
      <h2>
        <FaInstagramSquare />
        <a href="https://www.instagram.com/gelathoev/">Инстаграм</a>
      </h2>
      <h2>
        <FaMailchimp />
        <a href="https://nazran.hh.ru/resume/c6c57860ff09c0f3280039ed1f664342796742">
          HeadHunter
        </a>
      </h2>
      <h2>
        <FaLinkedinIn />
        <a href="https://www.linkedin.com/feed/">LinkedIn</a>
      </h2>
      <h2>
        <FaMailBulk />
        <a href="#!">meda.oziev@mail.ru</a>
      </h2>
    </div>
  );
};

export default SectionProfile;
