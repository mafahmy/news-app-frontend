export const getLatestNews = (countNeeded: number, newsArray: OneNews[]) => {
  newsArray.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const latestNews = newsArray.slice(0, countNeeded);
  return latestNews;
};
