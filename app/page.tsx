import Image from "next/image";
import { TracingBeamDemo } from "./beam";
import { GoogleGeminiEffectDemo } from "./geminieffect";
import { MacbookScrollDemo } from "./macbookscroll";
import { ThreeDCardDemo } from "./threadcard";
import { CanvasRevealEffectDemo } from "./reveal effect";
import { GlobeDemo } from "./globe";
import { BackgroundGradientDemo } from "./gradient";


export default function Home() {

  /* 
    <main className="">
      

     
    <MacbookScrollDemo></MacbookScrollDemo>
    <ThreeDCardDemo></ThreeDCardDemo>
    </main>
      
      
    </> **/
  return (
    <> 
    <GlobeDemo></GlobeDemo>
      <MacbookScrollDemo></MacbookScrollDemo>
      <BackgroundGradientDemo></BackgroundGradientDemo>
      <br />
      <br />
      <div className="text-5xl text-center">Main Components</div>
      <CanvasRevealEffectDemo></CanvasRevealEffectDemo>
      <div className="text-5xl text-center">All components</div>
      <ThreeDCardDemo></ThreeDCardDemo>
      </>
  );
}
