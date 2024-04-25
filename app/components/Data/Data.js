import om from "./om.jpeg";
import omr from "./omr.jpeg";
import vr from "./vr.jpg";
import vrt from "./vrt.jpeg";
import img from "../Navbar/unilag_logo.png";
import abosede from "./abosede.png";
import Olubanke from "./olobanke.png";
import sayo from "./sayo.png";
import Amuda from "./amuda.png";
import patrick from "./patrick.jpeg";
import elyse from "../News/news1.jpeg";
import groupPhoto from "../News/nw1.jpeg";

const staff = [
  {
    key: 1,
    img: abosede,
    name: "Professor Folashade Akinsola",
    Department: "Department of Opthalmology",
  },
  {
    key: 2,
    img: sayo,
    name: "Associate Professor Aribaba",
    Department: "Department of Opthalmology",
  },
  {
    key: 3,
    img: patrick,
    name: "Dr Patrick Okonji",
    Department: "Research Management Office",
  },
  {
    key: 4,
    img: Olubanke,
    name: "Dr. Olubanke Ilo",
    Department: "Department of Opthalmology",
  },
];

const mainStaff = [
  {
    key: 1,
    img: abosede,
    name: "Professor Folashade Akinsola",
    Department: "Department of Opthalmology",
    biography:
      "I hold a Bachelor of Medicine, Bachelor of Surgery (MBBS) and have several years of experience working as a Professor of Ophthalmic surgery and Public Health at the College of Medicine, University of Lagos. I am the current Dean of Clinical Sciences, University of Lagos, Nigeria, and have served as the Chief Consultant Ophthalmologist at the Lagos University Teaching Hospital for over thirty years. I’m also the current Director of the West African Regional and Training Centre for Low Vision Rehabilitation (WARTCLOR). I have led several funded national and international projects on ophthalmic eye care service delivery, and conducted several research studies on retinal image processing systems in modern ophthalmology. My research interests focus mainly on how retinal images provide useful information about the health of the visual system, and I am routinely involved in clinical diagnosis and treatment of retinal diseases, such as glaucoma, age-related macular degeneration, diabetic retinopathy, as well as making significant contributions to novel and innovative approaches to understanding retinal-pathophysiology of many other diseases that can lead to blindness.",
  },
  {
    key: 2,
    img: Amuda,
    name: "Prof. Hakeem Amuda",
    Department: "Department of Met & Mat Engineering",
    biography:
      "I am a faculty member with over 20-years significant experience in materials development and processing with focus on using adaptive technologies for sustainable materials development. I have substantial experience and competence in product design with emphasis on the use additive manufacturing technology for development of prototypes and validation of design. In the last four years, I have been involved in building the innovation ecosystem in my university resulting in the endowment of a dedicated center for innovation, ideation and incubation to further deepen and broaden innovation culture in the university.  Within this period, the university ramped-up an intellectual property portfolio of 19 patents, a major first in its 60 years of existence. In the thick of the pandemic, I led a multidisciplinary research team to develop a low cost rapidly deployable Ambubag ventilator which came a national second at the National Science, Technology and Innovation Exhbition in March 2021, Nigeria. ",
  },
  {
    key: 3,
    img: sayo,
    name: " Associate Prof. Aribaba O.",
    Department: "Department of Opthalmology",
    biography:
      "Dr Olufisayo Temitayo ARIBABA is a gifted, dedicated, team player and leader in his little corner and callings as an ophthalmologist. He is a time – tested, trusted, unassuming, reliable, diligent, experienced and goal-driven university teacher. Dr OT Aribaba is a consultant ophthalmologist and senior lecturer with the Lagos University Teaching Hospital and College of Medicine, University of Lagos respectively. He is a licensed medical practitioner with a current and valid licence to practice firstly as a medical doctor and as a specialist consultant ophthalmic surgeon. Dr Aribaba has won many academic laurels. He was the punctuality and library prefect in Imesi Ile High School (formerly Methodist Boys High School), Imesi Ile as well as the best graduating student in 1981. He was a 2003-2004 Commonwealth and a United Kingdom department for international development (dfid) scholar among others. He obtained his Bachelor of Medicine and Surgery from the College of Medicine, University of Lagos in 1989 and an MSc in Community Eye Health (Public Health for Eye Care) from the London School of Hygiene and Tropical Medicine in 2004. ",
  },
  {
    key: 4,
    img: patrick,
    name: "Dr Patrick Okonji",
    Department: "Research Management Office",
    biography:
      "Dr. Patrick E. Okonji earned his Master of Public Health and Ph.D. in Public Health at the University of Northumbria, Newcastle, United Kingdom. He held the prestigious Northumbria University fully funded award for his Ph.D., and subsequently, the International Research Exchange Fellowship at the University of California, Santa Barbara, and Northeastern University, Boston Massachusetts, USA. He also held the J. William Fulbright Fellowship at the Western Michigan University, USA. Patrick currently a Senior Research Fellow at the Research Management Office, University of Lagos. His professional experience and research interest include future applications of technologies for healthcare delivery, Public Health and Safety, disability rights, health informatics, and Low Vision Rehabilitation using digital-inclusive approaches. Patrick also functions at the West African Regional Research and Training Centre for Low Vision Rehabilitation, University of Lagos, and he is a member of the University of Lagos’ Animal Care and Use Research Ethics Committee. He has published papers on Public Health, Public Health Inspection, Infection control, and access to mainstream social and economic infrastructure and services from the perspectives of groups with disabilities.",
  },
  {
    key: 5,
    img: Olubanke,
    name: "Dr. Olubanke Ilo",
    Department: "Department of Opthalmology",
    biography:
      "A Senior Lecturer at the College of Medicine University of Lagos, and Consultant Ophthalmologist at Guinness Eye Center of the Lagos University Teaching Hospital, and also at CHOICE EYE CLINC IKEJA. Obtained  Bachelor of Medicine and Surgery from the College of Medicine, University of Lagos. I am a member of the Nigerian Medical Association; Medical and Dental Consultants Association of Nigeria; Ophthalmological Society of Nigeria; a Strong professional graduate and Fellow of the National Postgraduate Medical College of Nigeria in Ophthalmology and also of the West African College of Surgeons (Ophthalmology). Married with children. ",
  },
];

const course = [
  {
    key: 1,
    course_name: "PGD Orientation & Mobility (Part- Time)",
    description:
      "West African Regional Research and Training Center on Low Vision and Rehabilitation (WARTCLOR)",
    path: "/OMR",
    image: omr,
  },
  {
    key: 2,
    course_name: "M.Sc in Vision Rehabilitation Therapy (Part Time)",
    description:
      "West African Regional Research and Training Center on Low Vision and Rehabilitation (WARTCLOR)",
    path: "/VRT",
    image: vrt,
  },
  {
    key: 3,
    course_name: "M.Sc Orientation & Mobility Rehabilitation (Part-Time)",
    description:
      "West African Regional Research and Training Center on Low Vision and Rehabilitation (WARTCLOR)",
    path: "/OM",
    image: om,
  },
  {
    key: 4,
    course_name: "PGD in Vision Rehabilitation Therapy(Part Time)",
    description:
      "West African Regional Research and Training Center on Low Vision and Rehabilitation (WARTCLOR)",
    path: "/PVR",
    image: vr,
  },
];

const news = [
  {
    key: 1,
    photo: groupPhoto,

    title:
      "Dr. Elyse Connors, Fulbright Scholar from WMU visits WARTCLOR and RMO",
    description:
      "Dr. Elyse M Connors, an assistant professor at Western Michigan University in Kalamazoo Michigan, has received a Fulbright Scholar grant to visit the University of Lagos, Nigeria, between February and June 2024.",
    path: "/News1",
  },

  {
    key: 1,
    photo: elyse,

    title: "Dr. Elyse Connors Presentation to WARTCLOR",
    description:
      " Dr. Elyse Connors, our first-ever Fulbright visitor to the Centre will be making a presentation to the WARTCLOR Team. The objective of the presentation is to build the capacity of the WARTCLOR team members to deliver positive results based on contemporary pedagogical approaches for Low Vision Rehabilitation programs.",
    path: "/News2",
  },
];
export default { course, staff, news, mainStaff };
