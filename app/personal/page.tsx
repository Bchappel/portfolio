import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function PersonalPage() {
  const guitars = [
    {
      id: "guitar-1",
      name: "LTD EXP 200",
      description: "1 of approximately 300 made in 1997 Japan, this is a rare Explorer-style electric guitar with EMG pickups, famously associated with Metallica's James Hetfield",
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
      description: "A stylish and versatile electric guitar featuring a mahogany body with a quilted maple top, a bolt-on maple neck, a Floyd Rose Special bridge for dynamic tremolo effects.",
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
      name: "Shechter Omen Extreme 7 String",
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

  const albums = [
    {
      id: "album-1",
      title: "...And Justice For All",
      artist: "Metallica",
      year: "1988",
      description:
        "A landmark progessive thrash metal album known for its complex song structures and socially conscious lyrics, featuring the iconic track 'One' and 'Blackened'.",
      imageUrl: "/andjusticeforall.png",
    },
    {
      id: "album-2",
      title: "Master of Puppets",
      artist: "Metallica",
      year: "1986",
      description:
        "A defining album of the thrash metal genre, showcasing intricate guitar work and powerful lyrics, including the title track 'Master of Puppets'.",
      imageUrl: "/masterofpuppets.png",
    },
    {
      id: "album-3",
      title: "Ride the Lightning",
      artist: "Metallica",
      year: "1984",
      description:
        "A groundbreaking album that marked Metallica's evolution from speed metal to a more complex sound, featuring tracks like 'Fade to Black' and 'Creeping Death'.",
      imageUrl: "/ridethelightning.png",
    },
    {
      id: "album-4",
      title: "Facelift",
      artist: "Alice in Chains",
      year: "1990",
      description:
        "Facelift is Alice in Chains' debut studio album, released in 1990, blending grunge, heavy metal, and hard rock, featuring hits like 'Man in the Box' and 'We Die Young'.",
      imageUrl: "/facelift.png",
    },
    {
      id: "album-5",
      title: "Physical Graffiti",
      artist: "Led Zeppelin",
      year: "1975",
      description:
        "'Physical Graffiti' is Led Zeppelin's sixth studio album, released in 1975 as a double LP, showcasing their musical versatility with iconic tracks like 'Kashmir' and 'Trampled Under Foot'.",
      imageUrl: "/physicalgraffiti.png",
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
              I'm Braedan Chappel, an undergraduate Software Engineering student at the University of Guelph. I'm committed to creating high-quality, 
              efficient, and maintainable software. I strictly adhere to best practices, including code reviews, continuous development & integration, and automated testing.
              I'm committed to continuous learning and staying updated with the latest and most advanced technologies. My ultimate goal is to deliver reliable software that meets the needs of users and stands the test of time.
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
                <TabsTrigger value="guitars">My Guitars</TabsTrigger>
                <TabsTrigger value="albums">Favorite Albums</TabsTrigger>
                {/* <TabsTrigger value="hobbies">Other Hobbies</TabsTrigger> */}
              </TabsList>

              <TabsContent value="guitars">
                <div className="space-y-12">
                  <p className="text-lg text-stone-600 mb-8">
                    My collection of guitars that I've acquired over the years. Each one has its own unique sound and
                    story.
                  </p>

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

                            <h3 className="text-lg font-medium mb-3">Specifications</h3>
                            <ul className="space-y-2 text-stone-600">
                              {Object.entries(guitar.specs).map(([key, value]) => (
                                <li key={key} className="flex items-start">
                                  {/* Updated bullet point style */}
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

              <TabsContent value="albums">
                <div className="space-y-12">
                  <p className="text-lg text-stone-600 mb-8">
                    My all-time favorite albums, ranked in order of personal preference. These records have shaped my
                    musical taste and continue to inspire me.
                  </p>

                  {albums.map((album, index) => (
                    <div key={album.id}>
                      <div className="flex flex-col md:flex-row gap-8">
                        {/* Left column - Album Cover (square) */}
                        <div className="w-full md:w-1/3">
                          <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
                            <Image
                              src={album.imageUrl || "/placeholder.svg"}
                              alt={`${album.title} by ${album.artist}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>

                        {/* Right column - Album details */}
                        <div className="w-full md:w-2/3">
                          <div className="flex flex-col h-full justify-center">
                            <div className="flex items-baseline mb-1">
                              <h2 className="text-2xl font-semibold">{album.title}</h2>
                              <span className="text-stone-500 ml-3">({album.year})</span>
                            </div>
                            <h3 className="text-xl text-stone-700 mb-4">{album.artist}</h3>
                            <p className="text-stone-600">{album.description}</p>

                            <div className="mt-4 flex items-center">
                              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-stone-800 text-white font-bold mr-3">
                                #{index + 1}
                              </span>
                              <span className="text-stone-500">
                                Ranked {index + 1} of {albums.length}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Add horizontal line between albums, but not after the last one */}
                      {index < albums.length - 1 && <hr className="border-stone-200 my-12" />}
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* <TabsContent value="hobbies">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium mb-2">Cars</h3>
                      <p className="text-stone-600">
                        For as long as I can remember, I've been interested in cars and racing. There's something about the perfect blend of complex engineering, efficiency and speed. 
                        In my spare time, I enjoy working on some of my cars. My passion lies particularly in diesel engines, and I'm especially interested in powerplants like the Audi 3.0 TDI 
                        and the BMW M57. These engines are engineering marvels, delivering impressive torque and efficiency while offering plenty of potential for tuning and performance enhancements.
                        Beyond working on cars, I'm an avid motorsports fan. Formula 1 captivates me with its relentless pursuit of technological innovation, where milliseconds separate champions from contenders. 
                        Meanwhile, the World Rally Championship (WRC) feeds my love for raw, unpredictable racing—where drivers push their limits on unforgiving terrain, demonstrating incredible skill. 
                        Whether it's the precision of F1 or the chaos of WRC, I find myself constantly drawn to the high octane energy and the relentless spirit of competition.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium mb-2">Guitar</h3>
                      <p className="text-stone-600">
                        Exploring trails and mountains whenever I get the chance. My goal is to hike in every national
                        park.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium mb-2">Traveling</h3>
                      <p className="text-stone-600">
                        I love experimenting with different cuisines and techniques. Italian and Japanese food are my
                        specialties.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium mb-2">Mountain Biking</h3>
                      <p className="text-stone-600">
                        Science fiction and philosophy books are my favorites. I try to read at least one book per
                        month.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent> */}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
