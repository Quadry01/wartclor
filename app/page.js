"use client"
import Hero from "./components/Hero/page";
import Staff from "./components/Staffs/page";
import Footer from "./components/Footer/page";
import Course from "./components/Courses/page";

export default function Home() {
  return (
    <main className="  bg-light-yellow flex min-h-screen flex-col items-center justify-between ">
     <Hero/>
  <Course/>
     <Staff/>
      <Footer/>
    </main>
  );
}
