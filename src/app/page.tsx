

import Blog from "@/components/blog";
import Herro from "@/components/herro";
import Priceplan from "@/components/plan";
import Portfolio from "@/components/portfolio";
import Recommendations from "@/components/recommendation";


export default function Home() {
  return (
         <div>
          <Herro/>
          <Priceplan/>
          <Recommendations/>
          <Portfolio/>
          <Blog/>
         </div>
  );
}