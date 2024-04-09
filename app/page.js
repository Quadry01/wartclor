"use client"
import Hero from "./components/Hero/page";
import Staff from "./components/Staffs/page";
import Course from "./components/Courses/page";

export default function Home() {
  return (
    <main className=" bg-light-yellow ">
<Hero/>
    <Course/>
     <Staff/>
    </main>
  );
}
