"use client"

import { MapContainer, TileLayer, Marker, Tooltip, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { useEffect, useState } from "react"


// Emoji-style red pin
const redPinIcon = new L.DivIcon({
  className: "",
  html: `<div style="font-size: 20px;">📍</div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 24],
})

const homePinIcon = new L.DivIcon({
  className: "",
  html: `<div style="font-size: 20px;">🏠</div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 24],
})


// Pins by zoom level
const countryPins = [
  { lat: 55.3781, lng: -3.4360, label: "United Kingdom" },
  { lat: 52.1326, lng: 5.2913, label: "Netherlands" },
  { lat: 46.6034, lng: 1.8883, label: "France" },
  { lat: 41.8719, lng: 12.5674, label: "Italy" },
  { lat: 46.8182, lng: 8.2275, label: "Switzerland" },
  { lat: 40.4637, lng: -3.7492, label: "Spain" },
  { lat: 43.7384, lng: 7.4246, label: "Monaco" },
  { lat: 51.1657, lng: 10.4515, label: "Germany" },
  { lat: 37.0902, lng: -95.7129, label: "United States" },
  { lat: 23.6345, lng: -102.5528, label: "Mexico" },
  { lat: 18.9712, lng: -72.2852, label: "Haiti" },
  { lat: 18.1096, lng: -77.2975, label: "Jamaica" },
  { lat: 25.0343, lng: -77.3963, label: "Bahamas" },
]


const cityPins = [
  // 🇨🇦 Canada
  { lat: 43.5448, lng: -80.2482, label: "Guelph, Canada" },
  { lat: 45.4215, lng: -75.6972, label: "Ottawa, Canada" },
  { lat: 45.5019, lng: -73.5674, label: "Montreal, Canada" },
  { lat: 46.8139, lng: -71.2080, label: "Quebec City, Canada" },
  { lat: 46.4917, lng: -80.9930, label: "Sudbury, Canada" },
  { lat: 44.6488, lng: -63.5752, label: "Halifax, Canada" },

  // 🇺🇸 United States – California
  { lat: 37.7749, lng: -122.4194, label: "San Francisco, CA, USA" },
  { lat: 37.3382, lng: -121.8863, label: "San Jose, CA, USA" },
  { lat: 37.3229, lng: -122.0322, label: "Cupertino, CA, USA" },
  { lat: 36.6002, lng: -121.8947, label: "Monterey, CA, USA" },
  { lat: 36.9741, lng: -122.0308, label: "Santa Cruz, CA, USA" },
  { lat: 36.6111, lng: -121.8444, label: "Seaside, CA, USA" },
  { lat: 38.2975, lng: -122.2869, label: "Napa Valley, CA, USA" },

  // 🇺🇸 United States – Hawaii
  { lat: 21.3069, lng: -157.8583, label: "Honolulu, HI, USA" },
  { lat: 21.3656, lng: -157.9508, label: "Pearl Harbor, HI, USA" },

  // 🇺🇸 United States – Midwest & Northeast
  { lat: 42.3314, lng: -83.0458, label: "Detroit, MI, USA" },
  { lat: 43.0125, lng: -83.6875, label: "Flint, MI, USA" },
  { lat: 42.2808, lng: -83.7430, label: "Ann Arbor, MI, USA" },
  { lat: 39.9612, lng: -82.9988, label: "Columbus, OH, USA" },
  { lat: 40.4406, lng: -79.9959, label: "Pittsburgh, PA, USA" },
  { lat: 40.7128, lng: -74.0060, label: "New York City, NY, USA" },
  { lat: 44.2795, lng: -73.9799, label: "Lake Placid, NY, USA" },
  { lat: 44.4654, lng: -72.6874, label: "Stowe, VT, USA" },
  { lat: 42.1420, lng: -77.0566, label: "Corning, NY, USA" },
  { lat: 42.8864, lng: -78.8784, label: "Buffalo, NY, USA" },
  { lat: 41.8781, lng: -87.6298, label: "Chicago, IL, USA" },
  { lat: 38.9072, lng: -77.0369, label: "Washington, DC, USA" },

  // 🇺🇸 United States – Southeast
  { lat: 32.7765, lng: -79.9311, label: "Charleston, SC, USA" },
  { lat: 33.8360, lng: -79.0517, label: "Conway, SC, USA" },
  { lat: 33.6891, lng: -78.8867, label: "Myrtle Beach, SC, USA" },
  { lat: 35.0527, lng: -78.8784, label: "Fayetteville, NC, USA" },

  // 🇺🇸 United States – Florida
  { lat: 28.5383, lng: -81.3792, label: "Orlando, FL, USA" },
  { lat: 26.1224, lng: -80.1373, label: "Fort Lauderdale, FL, USA" },
  { lat: 25.7617, lng: -80.1918, label: "Miami, FL, USA" },
  { lat: 24.5551, lng: -81.7800, label: "Key West, FL, USA" },

  // 🇬🇧 United Kingdom
  { lat: 51.5072, lng: -0.1276, label: "London, UK" },
  { lat: 50.9097, lng: -1.4044, label: "Southampton, UK" },

  // 🇫🇷 France
  { lat: 48.8566, lng: 2.3522, label: "Paris, France" },
  { lat: 50.3746, lng: 2.7736, label: "Vimy Ridge, France" },
  { lat: 45.7640, lng: 4.8357, label: "Lyon, France" },
  { lat: 45.1252, lng: 6.0806, label: "Vaujany, France" },
  { lat: 43.7102, lng: 7.2620, label: "Nice, France" },

  // 🇪🇸 Spain (Mainland + Mallorca)
  { lat: 41.3851, lng: 2.1734, label: "Barcelona, Spain" },
  { lat: 39.5696, lng: 2.6502, label: "Palma, Spain" },
  { lat: 39.7756, lng: 2.9214, label: "Selva, Spain" },
  { lat: 39.7672, lng: 2.7150, label: "Soller, Spain" },
  { lat: 39.7556, lng: 2.6480, label: "Deià, Spain" },
  { lat: 39.7932, lng: 2.6956, label: "Port de Sóller, Spain" },
  { lat: 39.8451, lng: 2.7961, label: "Sa Calobra, Spain" },
  { lat: 39.5445, lng: 2.3955, label: "Port d'Andratx, Spain" },
  { lat: 39.8765, lng: 3.0176, label: "Pollença, Spain" },
  { lat: 39.3150, lng: 3.1346, label: "Cala Lombards, Spain" },
  { lat: 39.7105, lng: 2.6216, label: "Valldemossa, Spain" },
  { lat: 39.5308, lng: 2.4111, label: "Es Camp de Mar, Spain" },
  { lat: 39.9086, lng: 3.0822, label: "Port de Pollença, Spain" },

  // 🇮🇹 Italy
  { lat: 41.9028, lng: 12.4964, label: "Rome, Italy" },
  { lat: 40.8518, lng: 14.2681, label: "Naples, Italy" },
  { lat: 40.6263, lng: 14.3758, label: "Sorrento, Italy" },
  { lat: 40.6824, lng: 14.7681, label: "Salerno, Italy" },
  { lat: 40.6517, lng: 14.6123, label: "Ravello, Italy" },
  { lat: 40.6281, lng: 14.4845, label: "Positano, Italy" },
  { lat: 40.7497, lng: 14.4869, label: "Pompeii, Italy" },
  { lat: 40.6340, lng: 14.6029, label: "Amalfi, Italy" },
  { lat: 42.4646, lng: 14.2132, label: "Pescara, Italy" },
  { lat: 44.5362, lng: 10.8644, label: "Maranello, Italy" },
  { lat: 41.9650, lng: 14.2695, label: "Torricella Peligna, Italy" },
  { lat: 43.7167, lng: 10.4017, label: "Pisa, Italy" },
  { lat: 40.5532, lng: 14.2222, label: "Capri, Italy" },
  { lat: 40.5580, lng: 14.2165, label: "Anacapri, Italy" },


  // 🇨🇭 Switzerland
  { lat: 46.2044, lng: 6.1432, label: "Geneva, Switzerland" },
  { lat: 47.3769, lng: 8.5417, label: "Zurich, Switzerland" },

  // 🇲🇨 Monaco
  { lat: 43.7333, lng: 7.4167, label: "Monaco City, Monaco" },

  // 🇳🇱 Netherlands
  { lat: 52.3676, lng: 4.9041, label: "Amsterdam, Netherlands" },

  // 🇩🇪 Germany
  { lat: 48.7758, lng: 9.1829, label: "Stuttgart, Germany" },
  { lat: 50.9375, lng: 6.9603, label: "Cologne, Germany" },

  // 🇰🇾 Cayman Islands
  { lat: 19.3133, lng: -81.2546, label: "George Town, Cayman Islands" },

  // 🇧🇸 Bahamas
  { lat: 26.6383, lng: -76.9783, label: "Hopetown, Bahamas" },
  { lat: 25.0343, lng: -77.3963, label: "Nassau, Bahamas" },
  { lat: 25.8170, lng: -77.9262, label: "Coco Cay, Bahamas" },

  // 🇯🇲 Jamaica
  { lat: 17.9712, lng: -76.7936, label: "Kingston, Jamaica" },

  // 🇭🇹 Haiti
  { lat: 19.7900, lng: -72.7812, label: "Labadee, Haiti" },

  // 🇲🇽 Mexico
  { lat: 15.8412, lng: -96.3277, label: "Huatulco, Mexico" },
]


// Zoom-aware pin rendering
// inside same file
function ZoomAwareMarkers() {
  const map = useMap()
  const [zoom, setZoom] = useState(map.getZoom())

  useEffect(() => {
    const handleZoom = () => {
      setZoom(map.getZoom())
    }

    map.on("zoomend", handleZoom)
    return () => {
      map.off("zoomend", handleZoom)
    }
  }, [map])

  const visiblePins = zoom >= 5 ? cityPins : countryPins

  return (
    <>
      {visiblePins.map((loc, i) => (
        <Marker key={i} position={[loc.lat, loc.lng]} icon={loc.label === "Guelph, Canada" ? homePinIcon : redPinIcon}>
          <Tooltip direction="bottom" offset={[0, 10]} opacity={0.9}>
            {loc.label}
          </Tooltip>
        </Marker>
      ))}
    </>
  )
}

// Main export
export function TravelMap() {
  return (
    <div className="w-full">
      <div className="w-full rounded-lg overflow-hidden">
        <MapContainer
          center={[20, 0]}
          zoom={2.0}
          minZoom={2}
          maxZoom={15} // or higher
          scrollWheelZoom={true}
          zoomControl={false}
          updateWhenIdle={true}
          attributionControl={false}
          worldCopyJump={false}
          maxBounds={[
            [-85, -180],
            [85, 180],
          ]}
          maxBoundsViscosity={1.0}
          className="w-full h-[800px] rounded-lg z-0 bg-stone-800"
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution=""
            noWrap={true}
          />
          <ZoomAwareMarkers />
        </MapContainer>
      </div>
    </div>
  )
}
