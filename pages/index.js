import Image from "next/image";
import { Card } from "../components/Card";
import { DDLink } from "../components/Link";
import Navbar from "../components/Navbar";
import { MainTitle, PageTitle, SubTitle } from "../components/Title";
import Homesplash from "../public/homesplash.png"


export default function Home() {

  const style={
    backgroundImage: `url(${Homesplash.src})`,
    width: '100%',
    height: '100%',
  }

  return (
    <div>
      <div className="bg-fixed" style={style}>
        <div className="w-screen h-screen grid grid-cols-5">
          <Navbar />
          <div className="-mt-96 col-span-2 text-center items-center flex p-8">
            <div className="">
              <SubTitle text={"Arézo"} dark={true} />
              <div className="m-4" />
              <PageTitle text={"Amplifying the desire to feel great TEST"} dark={true} />
              <div className="m-4" />
              <DDLink text={"See Case Study"} href = "#" dark={true} />
            </div>
          </div>
        </div>
      </div>

      {/** Learn about us section */}
      <div className="p-24">
        <div>
          <div className="text-center px-36 pb-16">
            <PageTitle text = "digital dash is an independant Toronto-based strategy, design & communications company." />
            <div className="m-12" />
            <DDLink text={"Learn about us"} href="/about" />
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

      <div style={{width: '100%', height: '100%', position: 'relative'}}>
        <div className="h-screen w-full">
          <Image className="w-full h-auto" layout='fill' objectFit='contain'  src="/indexsplash.png" />
        </div>
      </div>

      <div className="p-24">
        <div>
          <div className="text-center px-48 pb-16">
            <SubTitle text={"Olive Tree Jewelry"} />
            <div className="mb-8" />
            <PageTitle text = "Jewelry That Reflects Who You Are & Where You Are From" />
            <div className="m-12" />
            <DDLink text={"See case study"} href="/about" />
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


      <div style={{width: '100%', height: '100%', position: 'relative'}}>
        <div className="h-screen w-full">
          <Image className="w-full h-auto" layout='fill' objectFit='contain'  src="/indexsplash2.png" />
        </div>
      </div>


      <div className="p-24">
        <div>
          <div className="text-center px-48 pb-16">
            <SubTitle text={"Maison De Fleurs"} />
            <div className="mb-8" />
            <PageTitle text = "Jewelry That Reflects Who You Are & Where You Are From" />
            <div className="m-12" />
            <DDLink text={"See case study"} href="/about" />
          </div>
        </div>
      </div>

      <div className="w-full h-full relative">
        <div className="h-screen w-full">
          <Image className="w-full h-auto" layout='fill' objectFit='contain'  src="/indexsplash3.png" />
        </div>
      </div>


      <div className="p-24">
        <div>
          <div className="text-center px-48 pb-16">
            <PageTitle text = "We love to look beyond the surface of things" />
            <div className="m-12" />
            <DDLink text={"Minds of DD"} href="/humans" />
          </div>
        </div>
      </div>
    </div>

  )
}