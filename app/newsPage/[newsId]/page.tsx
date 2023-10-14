import React from 'react';
import styles from './styles.module.css';
import Header from './components/header/Header';
import ImageContainer from './components/imageContainer/ImageContainer';
import ArticleContent from './components/articleContent/ArticleContent';
interface Props {
  params: {
    newId: string;
  };
}

export const runtime = 'edge'; // 'nodejs' (default) | 'edge'
const oneNewsInfo = {
  title: 'Stocks making the biggest moves premarket: DASH, ARM, PYPL',
  description:
    'These are the stocks making headlines in premarket trading Monday.',
  content:
    'Check out the companies making headlines in premarket trading.\nPayPal – Shares of the payments giant fell more than 1% premarket after MoffettNathanson downgraded the stock to market perform from outperform and cut its price target 10 days before Pay... [1254 chars]',
  url: 'https://www.cnbc.com/2023/09/18/stocks-making-the-biggest-moves-premarket-dash-arm-pypl.html',
  image:
    'https://image.cnbcfm.com/api/v1/image/106516157-1588351785968gettyimages-1209050413.jpeg?v=1695040122&w=1920&h=1080',
  publishedAt: '2023-09-18T12:28:42Z',
  source: {
    name: 'CNBC',
    url: 'https://www.cnbc.com',
  },
};

const NewsPage = async ({ params }: Props) => {
  return (
    <section>
      <section className={styles.article_page_grid_layout}>
        <article className={styles.article_page_gridarea_article}>
          <Header oneNewsInfo={oneNewsInfo} />
          <ImageContainer oneNewsInfo={oneNewsInfo} />
          <ArticleContent oneNewsInfo={oneNewsInfo} />
        </article>
      </section>
    </section>
  );
};

export default NewsPage;
