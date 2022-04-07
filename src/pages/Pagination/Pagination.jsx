import React from "react";
import styles from "./Pagination.module.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const pagination = ({ onClickPaginateNumber }) => {
  console.log("пагинация");
  return (
    <div>
      <Stack onClick={onClickPaginateNumber}>
        <Pagination
          className={styles.films__pagination}
          count={10}
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

export default pagination;
