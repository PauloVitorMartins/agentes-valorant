import { useEffect, useRef, useState } from "react";
import HomeMobile from "./HomeMobile";
import HomeScreen from "./HomeScreen";

export default function Home() {
    let isMobile = useRef(false);
    const [mobile, setMobile] = useState(false);
  
    const resize = () => {
      if (window.innerWidth > 600) {
        if (isMobile.current) {
          isMobile.current = false;
          setMobile(false);
        }
      } else {
        if (!isMobile.current) {
          isMobile.current = true;
          console.log(mobile);
          setMobile(true);
        }
      }
    };
  
    useEffect(() => {
      resize();
      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
    });
  
  return (
    <>
    {isMobile.current === true && <HomeMobile />}
    {isMobile.current === false && <HomeScreen />}
    </>
  );
}