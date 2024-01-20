import React from "react";
import tmdb from "@/util/tmdb";
import style from "./Home.module.scss";
import Carousel from "../../components/carousel";
import Header from "../../components/header";
import { Media, DetailedMedia } from "@/util/model";

type Props = {};

export const revalidate = 60;

export default async function Home({}: Props) {
  const trendingMovies = await tmdb.detailedMediaMultiple(
    await tmdb.trendingMovies
  );
  const trendingSeries = await tmdb.detailedMediaMultiple(
    await tmdb.topRatedSeries
  );

  let collection: DetailedMedia[] | null = null;
  try {
    const collectionResponse = await tmdb.detailedCollection(397842);
    if (collectionResponse && collectionResponse.parts) {
      collection = collectionResponse.parts as DetailedMedia[];
    }
  } catch (error) {
    console.error("Failed to fetch collection:", error);
  }

  if (!collection || collection.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.maincontent}>
      <Header
        item={collection[0]}
        autoUpdate
        buttons={["watch", "info", "controls"]}
      />
      <Carousel
        items={collection as Media[]}
        title="Coleções de Halloween"
        updateBanner
        autoplay={3500}
      />
      <Carousel items={trendingSeries as Media[]} title="Séries em alta" />
      <Carousel items={trendingMovies as Media[]} title="Filmes em alta" />
    </div>
  );
}
