import React from 'react';
import styles from './styles.module.css';

const ProviderInfo = ({ oneNewsInfo }: { oneNewsInfo: OneNews }) => {
  return (
    <section className={styles.provider_info}>
      <div className={styles.provider_info_wrapper}>
        <section className={styles.provider_logo_name}>
          <a href={oneNewsInfo.source.url} target='_blank'>
            <div className={styles.provider_logo}></div>
            <div className={styles.provider_name}>
              {oneNewsInfo.source.name}
            </div>
          </a>
        </section>
        <section className={styles.btn_container}></section>
      </div>
    </section>
  );
};

export default ProviderInfo;
