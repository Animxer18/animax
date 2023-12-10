import React, { lazy, Suspense } from "react";

// Components
import Loading from "@/Components/Loading";
const SpotLight = lazy(() => import(/* webpackChunkName: "lazyComponent" */ "@/Components/Spotlight"));
const Animes = lazy(() => import(/* webpackChunkName: "lazyComponent" */ "@/Components/Animes"));

export default function Home() {
  return (
    <div className="home-container">
      <Suspense fallback={<Loading />}>
        <SpotLight />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <h1 className="section-title color-primary">Animes</h1>
        <Animes />
      </Suspense>
    </div>
  )
}
