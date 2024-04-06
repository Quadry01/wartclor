
import img from "../Navbar/unilag_logo.png"
import abosede from "./abosede.png"
import Olubanke from "./olobanke.png"





 const staff = [
  { key:1,
    img:abosede,
    name: "Professor Folashade Akinsola",
    Department: "Department of Opthalmology",
  },
  { key:2,
     img:img,
    name: "Associate Professor Aribaba O.",
    Department: "Department of Opthalmology",
  },
  {  key:3,  img:img, name: "Dr Patrick Okonji", Department: "Research Management Office" },
  {  key:4,  img:Olubanke, name: "Dr. Olubanke Ilo", Department: "Department of Opthalmology" },
];

 const course = [
  { key:1, course_name: "PGD Orientation & Mobility (Part- Time)", description: "Department of Opthalmology", path:"/OMR"},
  { key:2, course_name: "M.Sc in Vision Rehabilitation Therapy (Part Time)", description: "Department of Opthalmology", path:"/VRT"},
  { key:3, course_name: "M.Sc Orientation & Mobility Rehabilitation (Part-Time)", description: "Department of Opthalmology", path:"/OM" },
  { key:4, course_name: "PGD in Vision Rehabilitation Therapy(Part Time)", description: "Department of Opthalmology", path:"/PVR" },
];

 export default {course, staff}