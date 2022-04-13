import React from "react";
import Stack from "@mui/material/Stack";
import styles from "./Pagination.module.scss";
import Pagination from "@mui/material/Pagination";

const pagination = ({ onClickPaginateNumber }) => {
  return (
    <div>
      <Stack onClick={onClickPaginateNumber}>
        <Pagination
          className={styles.films__pagination}
          count={9}
          variant="outlined"
          shape="rounded"
          color="secondary"
          hidePrevButton
          hideNextButton
        />
      </Stack>
    </div>
  );
};

export default React.memo(pagination);
