import Image from "next/image";
import { Card } from "../components/Card";
import Footer from "../components/Footer";
import { DDLink } from "../components/Link";
import Navbar from "../components/Navbar";
import { MainTitle, PageTitle, SubTitle } from "../components/Title";
import Indexsplash from "../public/indexsplash.png"
import Indexsplash2 from "../public/indexsplash2.png"
import Indexsplash3 from "../public/indexsplash3.png"
import Beyond from "../public/beyond.png"

export default function Home() {

  const videoStyle = {
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    position: 'absolute',
    left: '50%', /* % of surrounding element */
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '-1'
  }

  const secondVideoStyle = {
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    zIndex: '-1'
  }

  return (
    <div>
      <video
          autoPlay
          loop
          muted
          playsInline
          style={videoStyle}
      >
        <source src='/arezo.mp4' type='video/mp4' />
            Your browser does not support the video tag.
      </video>
      <div className="bg-fixed">
        <div className=" h-screen grid grid-cols-5">
          <Navbar dark={true} />
          <div className="-mt-96 col-span-full sm:col-span-3 text-center items-center flex p-8">
            <div className="-mt-24 ml-0 sm:ml-4 lg:ml-8 w-full">
              <SubTitle text={"Arézo"} dark={true} />
              <div className="m-12 sm:m-4" />
              <PageTitle text={"Amplifying the desire"} dark={true} />
              <PageTitle text={"To Feel Great"} dark={true} />
              <div className="m-4" />
              <div className="mt-12 sm:mt-8" />
              <DDLink text={"See Case Study"} href = "/case-study/arezo" dark={true} defaultUnderlined={true} />
            </div>
          </div>
        </div>
      </div>

      {/** Learn about us section */}
      <div className="p-4 sm:p-8">
        <div>
          <div className="text-center sm:px-16 md:px-24 lg:px-30 py-48 flex flex-col justify-center items-center">
            <img src="/hometextintro.png" className="flex w-fulls sm:w-3/4 h-auto" />
            <div className="m-8" />
            <DDLink text={"Learn about us"} href="/about" defaultUnderlined={true} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-0 sm:p-8 md:p-16">
          <Card 
            title = {JSON.stringify(["Blossoming Aesthetics", "A Floral Shop On A Mission"])}
            sub_title = "Maison De Fleurs"
            link_text = "See case study"
            link_href = "/case-study/maison-de-fleurs"
            image_src = "maison.png"
          />
          <Card 
            title = {JSON.stringify(["A Lifestyle: Imagining A", "Better Place"])}
            sub_title = "Möbel"
            link_text = "See case study"
            link_href = "/case-study/mobel"
            image_src = "mobel.png"
          />
          <Card 
            title = {JSON.stringify(["Personalized Brand", "Representing Individuality."])}
            sub_title = "Dewji Realty"
            link_text = "See case study"
            link_href = "/case-study/dewji-realty"
            image_src = "eyes.png"
          />
          <Card 
            title = {JSON.stringify(["Essentials Giving", "Comfort"])}
            sub_title = "Remé"
            link_text = "See case study"
            link_href = "/case-study/reme"
            image_src = "book.png"
          />
        </div>
      </div>

      <a href="https://www.youtube.com/watch?v=GdXF_hEGWgA" rel="noreferrer" target="_blank">
          <div style={{
              width: '100%',
              height: '100%',
              textAlign: 'center',
          }}>
              <div style={{
                  display: 'inline-block',
                  position: 'relative',
              }}>
                  <div className="absolute w-full h-full hover:backdrop-blur-sm flex justify-center align-center items-center uppercase text-white text-8xl font-semibold tracking-widest">Play</div>
                  <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={secondVideoStyle}
                  >
                      <source src='/outdoor.mp4' type='video/mp4' />
                          Your browser does not support the video tag.
                  </video>
              </div>
          </div>
      </a>
    

      <div className="sm:p-4 p-8">
        <div className="pt-24">
          <div className="text-center sm:px-24 md:px-36 lg:px-48 pb-16">
            <SubTitle text={"Olive Tree Jewelry"} />
            <div className="mb-8" />
            <PageTitle text = "Jewelry That Reflects Who You Are & Where You Are From" />
            <div className="m-12" />
            <DDLink text={"See case study"} href="/case-study/olive-tree-jewelry" defaultUnderlined={true} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-0  sm:p-8 md:p-16">
          <Card 
            title = {JSON.stringify(["FGC Introduces", "Premium Products Developed", "& Produced in Toronto"])}
            sub_title = "Friday Grooming Co."
            link_text = "See case study"
            link_href = "/case-study/friday-grooming-co"
            image_src = "fridaygrooming.png"
          />
          <Card 
            title = {JSON.stringify(["Amplifying The Desire To Feel Great"])}
            sub_title = "Feldstein Family Law"
            link_text = "See case study"
            link_href = "/case-study/feldstein-family-law"
            image_src = "familylaw.png"
          />
          <Card 
            title = {JSON.stringify(["Hospitality to Residential:", "A Look into Canada’s", "Greatest Renovated Spaces"])}
            sub_title = "Xana International"
            link_text = "See case study"
            link_href = "/case-study/xana-international"
            image_src = "xanaintl.png"
          />
          <Card 
            title = {JSON.stringify(["Envisioning", "Blissful Moments"])}
            sub_title = "Bliss Beginnings"
            link_text = "See case study"
            link_href = "/case-study/bliss-beginnings"
            image_src = "bliss.png"
          />
        </div>
      </div>


      <div style={{
          backgroundImage: `url(${Indexsplash2.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}>
        <div className="h-screen w-full">
        </div>
      </div>


      <div className="p-24">
        <div>
          <div className="text-center sm:px-24 md:px-36 lg:px-48 pb-16">
            <SubTitle text={"Maison De Fleurs"} />
            <div className="mb-8" />
            <PageTitle text = "Blossoming Aesthetics. A Floral Shop On A Mission" />
            <div className="m-12" />
            <DDLink text={"See case study"} href="/case-study/maison-de-fleurs" defaultUnderlined={true} />
          </div>
        </div>
      </div>

      <div style={{
          backgroundImage: `url(${Indexsplash3.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}>
        <div className="h-screen w-full">
        </div>
      </div>


      <div className="px-8 py-24 sm:px-24">
        <div>
          <div className="text-center md:px-24 lg:px-48 pb-16">
            <div className=" flex flex-col justify-center items-center">
                <img src={Beyond.src} className="flex w-full h-auto" />
            </div>
            <div className="m-12" />
            <DDLink text={"Minds of DD"} href="/humans" defaultUnderlined={true} />
          </div>
        </div>
      </div>


      <Footer />
    </div>

  )
}