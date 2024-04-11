
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

const news = [
   { key:1, title: "Dr. Elyse Connors, Fulbright Scholar from WMU visits WARTCLOR and RMO", description: "Dr. Elyse M Connors, an assistant professor at Western Michigan University in Kalamazoo Michigan, has received a Fulbright Scholar grant to visit the University of Lagos, Nigeria, between February and June 2024.", path:"/OMR"},
];
 export default {course, staff, news}