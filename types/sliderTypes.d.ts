type SliderNews = {
  image: string;
  title: string;
};

type SliderHook = [
  number,
  () => void,
  () => void,
  (e: React.TouchEvent<HTMLDivElement>) => void,
  (e: React.TouchEvent<HTMLDivElement>) => void,
  (e: React.TouchEvent<HTMLDivElement>) => void
];
