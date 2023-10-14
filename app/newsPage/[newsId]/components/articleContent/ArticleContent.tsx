interface Props {
  oneNewsInfo: OneNews;
}
const ArticleContent = ({ oneNewsInfo }: Props) => {
  return <section>{oneNewsInfo.content}</section>;
};

export default ArticleContent;
