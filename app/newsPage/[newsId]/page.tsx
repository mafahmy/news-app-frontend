import React from 'react';
import styles from './styles.module.css';
import Header from './components/header/Header';
import ImageContainer from './components/imageContainer/ImageContainer';
import ArticleContent from './components/articleContent/ArticleContent';
import testingNewsData from '@/app/components/testingNewsData';
import { redirect } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';

interface Props {
  params: {
    newsId: string;
  };
}

export const runtime = 'edge'; // 'nodejs' (default) | 'edge'
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const oneNewsInfo = testingNewsData.find(
    (news) => news.id === params.newsId
  ) as OneNews;
  return {
    title: oneNewsInfo.title,
    description: oneNewsInfo.description,
  };
}

const NewsPage = async ({ params }: Props) => {
  const oneNewsInfo = testingNewsData.find(
    (news) => news.id === params.newsId
  ) as OneNews;
  if (!oneNewsInfo) {
    redirect('/notFound');
  }
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
