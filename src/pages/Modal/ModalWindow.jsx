import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { AiOutlineCaretDown } from "react-icons/ai";
import Modal from "@mui/material/Modal";
import styles from "./ModalWindow.module.scss";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classname";
import {
  idModalAction,
  toggleModalAction,
  fetchFilAction,
} from "../../redux/action/modalAction";

import { instance } from "../../config/axios";

const style = {
  trasition: "0.4s",
  maxHeight: "700px",
  overflow: "auto",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width: "700px",
  borderRadius: "15px",
  display: "flex",
};

const ModalWindow = () => {
  const [detali, setDetali] = React.useState([]);
  const [detaliCheck, setDetaliCheck] = React.useState(false);
  const dispatch = useDispatch();
  const { toggleModal, idModal, infoFilm } = useSelector(
    (state) => state.modal
  );

  const handleClose = () => {
    setDetaliCheck(false);
    dispatch(toggleModalAction(false));
    dispatch(idModalAction(""));
    dispatch(fetchFilAction(""));
    setDetali([]);
  };

  const onClickBtnDetailMove = async () => {
    setDetaliCheck((detaliCheck) => !detaliCheck);
    console.log(detaliCheck);
    try {
      await instance
        .get(`films/${idModal}/images`)
        .then((resp) => setDetali(resp.data.items));
    } catch (error) {
      alert("Подробная информация не доступна ");
      console.log(error);
    }
  };

  useEffect(() => {
    if (!idModal.length) {
      (async () => {
        await instance
          .get(`films/${idModal}`)
          .then((resp) => dispatch(fetchFilAction(resp.data)));
      })();
    }
  }, [idModal]);

  return (
    <div className={styles.modal}>
      <Modal
        open={toggleModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.modalLeft}>
            <img src={infoFilm.posterUrlPreview} alt="" />
            <p>Рейтинг на IMDb: {infoFilm.ratingImdb}</p>
            <p>Рейтинг на Кинопоиске: {infoFilm.ratingKinopoisk}</p>
            <br />
            <div
              onClick={onClickBtnDetailMove}
              className={styles.modalLeft_acteri}
            >
              <p className={styles.modalLeft_acteri_text}>
                Посмотреть кадры, постеры
              </p>
              <p
                className={classNames(
                  styles.modalLeft_acteri_icon,
                  detaliCheck && styles.modalLeft_acteri_icon_active
                )}
              >
                <AiOutlineCaretDown />
              </p>
            </div>
          </div>

          <div className={styles.modalRight}>
            <p className={styles.modalRight__nameRu}>{infoFilm.nameRu}</p>
            <p className={styles.modalRight__year}>
              <span>Год:</span> {infoFilm.year}
            </p>
            <p className={styles.modalRight__filmLength}>
              <span>Продолжительность:</span> {infoFilm.filmLength} мин
            </p>
            <p className={styles.modalRight__countries}>
              <span className={styles.modalRight__countries_span}>Страна:</span>
              {infoFilm.countries &&
                infoFilm.countries.map((text) => (
                  <span
                    className={styles.modalRight__countries_span_text}
                    key={text.country}
                  >
                    {text.country}
                  </span>
                ))}
            </p>
            <p className={styles.modalRight__genres}>
              <span className={styles.modalRight__genres_span}>Жанр:</span>
              {infoFilm.genres &&
                infoFilm.genres.map((text) => (
                  <span
                    className={styles.modalRight__countries_span_text}
                    key={text.genre}
                  >
                    {text.genre}
                  </span>
                ))}
            </p>

            <p className={styles.modalRight__shortDescription}>
              {infoFilm.shortDescription}
            </p>

            <p className={styles.modalRight__description}>
              <span>Подробнее:</span> {infoFilm.description}
            </p>

            {detaliCheck && (
              <div className={styles.detaliModal}>
                {detali.map((e, i) => (
                  <div key={i}>
                    <img
                      className={styles.detaliModal_img}
                      src={e.previewUrl}
                      alt="Фото"
                    ></img>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalWindow;
