import AnimeList from "@/components/AnimeList/";
import Header from "@/components/AnimeList/header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await response.json();

  return (
    <>
      <section>
        <Header
          title={"Populer"}
          LinkHref="/populer"
          LinkTitle={"Lihat Semua"}
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
