import Image from "next/image";
import { Card } from "../components/Card";
import Footer from "../components/Footer";
import { DDLink } from "../components/Link";
import Navbar from "../components/Navbar";
import { MainTitle, PageTitle, SubTitle } from "../components/Title";
import Homesplash from "../public/homesplash.png"
import Indexsplash from "../public/indexsplash.png"
import Indexsplash2 from "../public/indexsplash2.png"
import Indexsplash3 from "../public/indexsplash3.png"


export default function Home() {

  const style= {
    backgroundImage: `url(${Homesplash.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }

  return (
    <div>
      <div className="bg-fixed" style={style}>
        <div className="w-screen h-screen grid grid-cols-5">
          <Navbar dark={true} />
          <div className="-mt-96 col-span-2 text-center items-center flex p-8">
            <div className="-mt-36 sm:ml-8 lg:ml-16">
              <SubTitle text={"Arézo"} dark={true} />
              <div className="m-4" />
              <PageTitle text={"Amplifying the desire"} dark={true} />
              <PageTitle text={"To Feel Great"} dark={true} />
              <div className="m-4" />
              <DDLink text={"See Case Study"} href = "#" dark={true} defaultUnderlined={true} />
            </div>
          </div>
        </div>
      </div>

      {/** Learn about us section */}
      <div className="p-24">
        <div>
          <div className="text-center px-36 py-48 flex flex-col justify-center items-center">
            <img src="/hometextintro.png" className="flex w-3/4 h-auto" />
            <div className="m-8" />
            <DDLink text={"Learn about us"} href="/about" defaultUnderlined={true} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <Card 
            title = "Amplifying The Desire To Feel Great"
            sub_title = "Maison De Fleurs"
            link_text = "See case study"
            link_href = "/case-study/maison-de-fleurs"
            image_src = "yourbrand.png"
          />
          <Card 
            title = "Amplifying The Desire To Feel Great"
            sub_title = "Maison De Fleurs"
            link_text = "See case study"
            link_href = "/case-study/maison-de-fleurs"
            image_src = "mobel.png"
          />
          <Card 
            title = "Amplifying The Desire To Feel Great"
            sub_title = "Maison De Fleurs"
            link_text = "See case study"
            link_href = "/case-study/maison-de-fleurs"
            image_src = "eyes.png"
          />
          <Card 
            title = "Amplifying The Desire To Feel Great"
            sub_title = "Maison De Fleurs"
            link_text = "See case study"
            link_href = "/case-study/maison-de-fleurs"
            image_src = "book.png"
          />
        </div>
      </div>

      <div style={{
          backgroundImage: `url(${Indexsplash.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="h-screen w-full">
        </div>
      </div>

      <div className="p-24">
        <div>
          <div className="text-center px-48 pb-16">
            <SubTitle text={"Olive Tree Jewelry"} />
            <div className="mb-8" />
            <PageTitle text = "Jewelry That Reflects Who You Are & Where You Are From" />
            <div className="m-12" />
            <DDLink text={"See case study"} href="/about" defaultUnderlined={true} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <Card 
            title = "Amplifying The Desire To Feel Great"
            sub_title = "Friday Grooming Co."
            link_text = "See case study"
            link_href = "/case-study/friday-grooming"
            image_src = "fridaygrooming.png"
          />
          <Card 
            title = "Amplifying The Desire To Feel Great"
            sub_title = "Feldstein Family Law"
            link_text = "See case study"
            link_href = "/case-study/feldstein-family-law"
            image_src = "familylaw.png"
          />
          <Card 
            title = "Amplifying The Desire To Feel Great"
            sub_title = "Xana International"
            link_text = "See case study"
            link_href = "/case-study/xana-international"
            image_src = "xanaintl.png"
          />
          <Card 
            title = "Amplifying The Desire To Feel Great"
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
        }}>
        <div className="h-screen w-full">
        </div>
      </div>


      <div className="p-24">
        <div>
          <div className="text-center px-48 pb-16">
            <SubTitle text={"Maison De Fleurs"} />
            <div className="mb-8" />
            <PageTitle text = "Jewelry That Reflects Who You Are & Where You Are From" />
            <div className="m-12" />
            <DDLink text={"See case study"} href="/about" defaultUnderlined={true} />
          </div>
        </div>
      </div>

      <div style={{
          backgroundImage: `url(${Indexsplash3.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="h-screen w-full">
        </div>
      </div>


      <div className="p-24">
        <div>
          <div className="text-center px-48 pb-16">
            <PageTitle text = "We love to look beyond the surface of things" />
            <div className="m-12" />
            <DDLink text={"Minds of DD"} href="/humans" defaultUnderlined={true} />
          </div>
        </div>
      </div>

      <Footer />
    </div>

  )
}