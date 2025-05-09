import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { AlbumCarousel } from "@/components/album-carousel"
import { TravelMap } from "@/components/travel-map"




export default function PersonalPage() {
  const guitars = [
    {
      id: "guitar-1",
      name: "LTD EXP 200",
      description: "1 of approximately 300 manufactured in Japan in 1997, this is a rare Explorer-style electric guitar is equipped with high output EMG pickups for excellent crunch tones.",
      imageUrl: "EXP200.png",
      specs: {
        year: "1997",
        body: "Mahogany",
        neck: "Maple",
        fretboard: "22 Fret Rosewood",
        pickups: "EMG 81s",
      },
    },
    {
      id: "guitar-2",
      name: "Schecter Omen Extreme-6 FR",
      description: "A versatile electric guitar featuring a mahogany body with a quilted maple top, a bolt-on maple neck, a Floyd Rose bridge for dynamic tremolo effects.",
      imageUrl: "Schecter6.png",
      specs: {
        year: "2019",
        body: "Mahogany with Quilted Maple Top",
        neck: "Maple",
        fretboard: "24 Fret Rosewood",
        pickups: "Schecter Diamond Plus",
      },
    },
    {
      id: "guitar-3",
      name: "Schecter Omen Extreme-7",
      description: "The Schecter Omen Extreme-7 features a mahogany body with a quilted maple top, 24 frets. Offering powerful tone and extended range for modern metal and rock.",
      imageUrl: "Schecter7.png",
      specs: {
        year: "2013",
        body: "Mahogany with Quilted Maple Top",
        neck: "Maple",
        fretboard: "24 Fret Rosewood",
        pickups: "Schecter Diamond Plus",
      },
    },
  ]

 // Restructured data: favorite artists with their albums
 const favoriteArtists = [
  {
    id: "artist-1",
    name: "Metallica",
    bio: "Metallica is an influential American heavy metal band known for shaping the genre with their fast, aggressive sound and powerful performances.",
    albums: [
      {
        id: "metallica-album-1",
        title: "Master of Puppets",
        year: "1986",
        description: "A defining album of the thrash metal genre, showcasing intricate guitar work and powerful lyrics, including the legendary title track 'Master of Puppets'.",
        imageUrl: "/masterofpuppets.png",
      },
      {
        id: "metallica-album-2",
        title: "...And Justice for All",
        year: "1988",
        description: "A landmark progessive thrash metal album known for its complex song structures and socially conscious lyrics, featuring the iconic tracks 'One' and 'Blackened'.",
        imageUrl: "/andjusticeforall.png",
      },
      {
        id: "metallica-album-3",
        title: "Ride the Lightning",
        year: "1984",
        description:"A groundbreaking album that marked Metallica's evolution from speed metal to a more complex trash metal sound, featuring tracks like 'Fade to Black' and 'Creeping Death'.",
        imageUrl: "ridethelightning.png",
      },
    ],
  },
  {
    id: "artist-2",
    name: "Led Zeppelin",
    bio: "Led Zeppelin, formed in 1968, revolutionized rock with their powerful sound, iconic songs, and legendary performances.",
    albums: [
      {
        id: "lz-album-1",
        title: "Physical Graffiti",
        year: "1975",
        description: "A double album that showcases the band's musical diversity, featuring a mix of hard rock, blues, and folk influences.",
        imageUrl: "/physicalgraffiti.png",
      },
      {
        id: "lz-album-2",
        title: "Led Zeppelin IV",
        year: "1971",
        description: "An iconic album featuring some of the band's most famous tracks, including 'Stairway to Heaven' and 'Black Dog'.",
        imageUrl: "/ledzeppeliniv.png",
      },
      {
        id: "lz-album-3",
        title: "Houses of the Holy",
        year: "1973",
        description: "An album that showcases the band's musical diversity, featuring a mix of hard rock, reggae, and folk influences.",
        imageUrl: "/housesoftheholy.png",
      },
    ],
  },
  {
    id: "artist-3",
    name: "Trivium",
    bio: "An american heavy metal band formed in 1999, known for their blend of metalcore and thrash metal, characterized by melodic hooks and intricate guitar work.",
    albums: [
      {
        id: "trivium-album-1",
        title: "Shogun",
        year: "2008",
        description: "A concept album that showcases the band's technical prowess and lyrical depth, featuring tracks like 'Kirisute Gomen' and 'Into the Mouth of Hell We March'.",
        imageUrl: "/shogun.png",
      },
      {
        id: "trivium-album-2",
        title: "Sin and the Sentence",
        year: "2017",
        description: "A powerful album that marks a return to the band's heavier roots, featuring the retrun of 7 string guitars, thought-provoking lyrics.",
        imageUrl: "/sinandthesentence.png",
      },
      {
        id: "trivium-album-3",
        title: "In The Court of the Dragon",
        year: "2021",
        description: "A progressive metal album that showcases the band's evolution, featuring intricate compositions and a blend of melodic and aggressive elements.",
        imageUrl: "/itcotd.png",
      },
    ],
  },
]

return (
  <div className="min-h-screen bg-stone-50 flex flex-col">
    <Navbar />
    <main className="flex-1">
      {/* Hero Banner for Bio Section */}
      <section className="py-24 md:py-32 bg-stone-100">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1>
          <div className="prose prose-stone max-w-3xl">
            <p className="text-lg text-stone-600">
              I'm Braedan Chappel, an undergraduate Software Engineering student at the University of Guelph. I'm committed to creating high-quality, efficient, and maintainable software. I strictly adhere to best practices, 
              including code reviews, continuous development & integration, and automated testing. 
              I'm committed to continuous learning and staying updated with the latest and most advanced technologies. 
              My ultimate goal is to deliver reliable software that meets the needs of users and stands the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Personal Interests</h2>

          <Tabs defaultValue="guitars" className="mb-12">
            <TabsList className="mb-8">
              <TabsTrigger value="guitars">Guitars</TabsTrigger>
              <TabsTrigger value="artists">Bands</TabsTrigger>
              <TabsTrigger value="hobbies">Travel</TabsTrigger>
            </TabsList>

            <TabsContent value="guitars">
              <div className="space-y-12">
                <p className="text-lg text-stone-600 mb-8"> My collection of guitars that I've acquired over the years. Each one has its own unique sound and story.</p>
                {guitars.map((guitar, index) => (
                  <div key={guitar.id}>
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Left column - Image */}
                      <div className="w-full md:w-1/2">
                        <div className="h-[300px] relative rounded-lg overflow-hidden">
                          <Image
                            src={guitar.imageUrl || "/placeholder.svg"}
                            alt={guitar.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Right column - Content with bullet points */}
                      <div className="w-full md:w-1/2">
                        <div className="h-[300px] flex flex-col">
                          <h2 className="text-2xl font-semibold mb-1">{guitar.name}</h2>
                          <p className="text-stone-600 mb-4">{guitar.description}</p>

                          <h3 className="text-lg font-medium mb-3">Details</h3>
                          <ul className="space-y-2 text-stone-600">
                            {Object.entries(guitar.specs).map(([key, value]) => (
                              <li key={key} className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-500 mt-[0.65em] mr-2 flex-shrink-0"></span>
                                <span>
                                  <span className="font-medium capitalize">{key}:</span> {value}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Add horizontal line between guitars, but not after the last one */}
                    {index < guitars.length - 1 && <hr className="border-stone-200 my-12" />}
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="artists">
              <div className="space-y-16">
                <p className="text-lg text-stone-600 mb-8">Some of my favorite bands and their albums that have had the biggest impact on me. Each artist has inspired me in different ways.</p>

                {favoriteArtists.map((artist, index) => (
                  <div key={artist.id}>
                    <h2 className="text-3xl font-bold mb-4">{artist.name}</h2>
                    <p className="text-stone-600 mb-8">{artist.bio}</p>

                    <AlbumCarousel albums={artist.albums} artistName={artist.name} />

                    {/* Add horizontal line between artists, but not after the last one */}
                    {index < favoriteArtists.length - 1 && <hr className="border-stone-200 my-16" />}
                  </div>
                ))}
              </div>
            </TabsContent>

			<TabsContent value="hobbies">
				<p className="text-lg text-stone-600 mb-8">
					A visual look at the places I’ve traveled to. Hover over each pin to see the location!
				</p>
				<TravelMap />
			</TabsContent>

          </Tabs>
        </div>
      </section>
    </main>
    <Footer />
  </div>
)
}
