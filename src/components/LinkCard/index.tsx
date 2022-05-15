import React from "react";

import styles from "./index.module.scss";

interface Props {
  url: string;
}

export default function LinkCard({ url }: Props): React.ReactElement {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <p>Please Go to</p>
        <a href={url}>{url}</a>
      </div>
    </div>
  );
}
