import React from 'react';
import styles from './styles.module.css';
import ViewTitle from '../viewTitle/ViewTitle';

interface Props {
  oneNewsInfo: OneNews;
}
const Header = ({ oneNewsInfo }: Props) => {
  return (
    <header className={styles.article_page_header}>
      <section className={styles.article_page_banner}></section>
      <div></div>
      <section className={styles.header_container}>
        <section className={styles.views_header}>
          <div className={styles.views_header_maxwidth_wrapper}>
            <div className={styles.view_header_content}>
              <div className={styles.view_header_info}>
                <div className={styles.view_header_info_left}>
                  <ViewTitle oneNewsInfo={oneNewsInfo} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </header>
  );
};

export default Header;
