import React from "react";

import styles from "./index.module.scss";

interface Props {
  url: string;
  header?: string;
}

export default function LinkCard({ url, header }: Props): React.ReactElement {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        {header && <h3 className={styles.header}>{header}</h3>}
        <p>Please Go to</p>
        <a href={url}>{url}</a>
      </div>
    </div>
  );
}
