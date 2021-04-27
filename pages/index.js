import Head from 'next/head';
import AnimeCard from '../components/AnimeCard';
import AnimeList from '../components/AnimeList';
import HomeLayout from '../components/HomeLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Weebos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeLayout>
          <section>
            <h3 className="uppercase">Trends</h3>
            <AnimeList>
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
            </AnimeList>
          </section>
          <section>
            <h3 className="uppercase">More popular</h3>
            <AnimeList>
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
            </AnimeList>
          </section>
          <section>
            <h3 className="uppercase">Top upcoming</h3>
            <AnimeList>
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
            </AnimeList>
          </section>
          <section>
            <h3 className="uppercase">Dev choices</h3>
            <AnimeList>
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
            </AnimeList>
          </section>
        </HomeLayout>
      </main>
    </>
  );
}
