import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('http://localhost:3131/api-news', {
      cache: 'no-store',
    });

    const latestNews = await response.json();
    const filePath = path.join(
      process.cwd(),
      'public/data/testingNewsData.json'
    );

    const formattedLatestNews = latestNews;
    console.log('latest news count: ', formattedLatestNews.length);
    const existingDataString = await readData(filePath);
    let existingData: OneNews[] = await JSON.parse(existingDataString);
    console.log('existing data count: ', existingData.length);
    existingData = [...existingData, ...formattedLatestNews];
    console.log('ALL TOGETHER COUNT: ', existingData.length);
    const removedDuplicate = filterDuplicate(existingData).sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
    console.log('DATA WITH OUT DUPLICATE COUNT: ', removedDuplicate.length);

    const updatedDataString = JSON.stringify(removedDuplicate);

    if (updatedDataString) {
      fs.writeFile(filePath, updatedDataString, (error) => {
        if (error) {
          console.log(`Error ocurred while writing to file ${error}`);
        }
        console.log('created file');
      });
    }
    return new NextResponse('New data is written to file');
  } catch (error) {
    return new NextResponse(`Error ocurred: ${error}`);
  }
}
// Another option for filtering duplicate in an array

const filterDuplicate = (newsArray: OneNews[]) => {
  const seenTitles = new Set();
  return newsArray.filter((oneNews) => {
    if (seenTitles.has(oneNews.title)) {
      return false;
    } else {
      seenTitles.add(oneNews.title);
      return true;
    }
  });
};

const readData = (filePath: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};
