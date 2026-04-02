"use client"

import dynamic from "next/dynamic"

export const TravelMapDynamic = dynamic(
  () => import("./travel-map").then((m) => m.TravelMap),
  {
    ssr: false,
    loading: () => <div className="w-full h-[800px] rounded-lg bg-stone-200 animate-pulse" aria-hidden />,
  },
)
