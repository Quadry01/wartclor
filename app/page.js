"use client";
import Hero from "./components/Hero/page";
import Staff from "./components/Staffs/page";
import Course from "./components/Courses/page";
import Newspage from "./components/News/page";

export default function Home() {
  return (
    <main className=" bg-white ">
      <Hero />
      <Course />
      <Staff />
      <Newspage />
    </main>
  );
}
