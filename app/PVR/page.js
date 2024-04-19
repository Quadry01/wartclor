import React from "react";

const PGDVRTage = () => {
  return (
    <div id="pvr" className=" animate-fade-up w-full overflow-auto text-white bg-dark-blue px-20 max-[600px]:px-4 pt-8">
      <header className="">
        <div className="  container mx-auto py-4 px-4 md:px-0">
          <h1 className="  border-b-4 pb-2 text-3xl font-semibold text-gray-800">
            Postgraduate Diploma in Vision Rehabilitation Therapy (Part Time)
          </h1>

          
          <p className=" text-justify  mt-2">
            This programme provides a remedial path for those who may wish to
            pursue a career in Low Vision Rehabilitation (Vision Rehabilitation
            Therapy) after a successful completion of an unrelated programme but
            with strong interest in Low Vision Rehabilitation. The programme is
            structured to address the shortages of professional in vision
            rehabilitation therapy. Students will be exposed to a wide range of
            skill sets to gain broad knowledge in the field vision
            rehabilitation, enabling them to pursue a career in providing
            rehabilitation services to people with low vision. The course
            contents are both theoretical and practical in nature. Instructional
            topics include introducing the students from diverse and unrelated
            backgrounds into the concept and context of vision rehabilitation,
            and learning how low vision aids can support the blind persons to
            live independently. Improving access to good quality eye health and
            vision rehabilitation services globally is a key enabler to
            achieving the United Nations Sustainable Development Goals; as
            improved eye health reduces poverty (SDG 1) and improves
            productivity (SDG 8).
          </p>
        </div>
      </header>



      <div className="bg-gray-50 text-left mt-10 ">
        <h2 className="text-gray-900 e text-3xl font-extrabold mb-2">
          Admission Requirements{" "}
        </h2>
        <ul className="list-decimal text-justify">
          <li>Candidates must possess a Bachelor’s degree (with at least a Second Class Lower) in any area of Biological, Bio-medical or Health Sciences from a recognized university. 
          </li>
          <li>Candidates with a degree in other disciplines such as Sociology, Social work, Psychology, or Special Education, (with at least a Second Class Lower from a recognized university) are eligible. 
          </li>
          <li>Having experience in providing support for People with vision challenges is an added advantage.
          </li>
        </ul>
      </div>

      <div className="bg-gray-50 text-left mt-10">
        <h2 className="text-gray-900 e text-3xl font-extrabold mb-2">
          Graduation Requirements{" "}
        </h2>
        <ul className="list-disc text-justify">
          <li> Minimum number of earned credit Unit: 34</li>
          <li>Duration the course: 3 semesters (Maximum, 6 semesters)</li>
          <li> Minimum CGPA:2.4</li>
        </ul>
      </div>



      <main className="container mx-auto py-8 px-4 md:px-0">
        <div className="">
          <h1 className="  text-2xl  m-2 font-semibold text-gray-800">
            List of Courses/Semester and Number of Units by Levels
          </h1>

          {/* TABLE ONE */}
          <table className="  bg-dark-blue  table-fixed  border whitespace-wrap">
            <thead className="border">
              <tr>
                <th colSpan="5" className="text-2xl">
                  First Semester
                </th>
              </tr>
              <tr className="">
                <th className=" border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-[600px]:px-2">
                  S/N
                </th>

                <th className=" border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-[600px]:px-2">
                  Course Code
                </th>
                <th className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-[600px]:px-2">
                  Course Title
                </th>
                <th className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-[600px]:px-2">
                  Status
                </th>
                <th className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-[600px]:px-2">
                  Unit
                </th>
              </tr>
            </thead>
            <tbody className="bg-dark-blue ">
              <tr className="border">
                <td className="border px-6 py-4 ">1</td>
                <td className="border px-6 py-4 ">VRT 711</td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 max-[600px]:px-2 ">
                  Physiology & Functions of the Eye
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  CORE
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">2</td>

                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  VRT 712
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Principles of Vision Rehabilitation Therapy
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  CORE
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 max-[600px]:px-2 ">3</td>

                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
              VRT 713 
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wra max-[600px]:px-2">
                  Functional Implications of Visual Impairment 
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  CORE
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">4</td>

                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  VRT 714 
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Psychological & Social Implications of Visual Impairments
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">4</td>

                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  VRT 715
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Gerontology in VRT
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">5</td>

                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  VRT 716
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Behavior Modification 
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">6</td>

                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                 VRT 717
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
               Rehabilitation Counselling 
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">7</td>

                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  VRT 718
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Partnerships working for eye care
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>
              {/* Add more rows for additional course items */}
            </tbody>
          </table>

          {/* TABLE TWO */}
          <table className="  bg-dark-blue mt-8 table-fixed border whitespace-wrap">
            <thead className="border">
              <tr>
                <th colSpan="5" className="text-2xl">
                  Second Semester
                </th>
              </tr>
              <tr className="">
                <th className=" border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-[600px]:px-2">
                  S/N
                </th>

                <th className="text-ellipsis overflow-hidden break-words border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-[600px]:px-2">
                  Course Code
                </th>
                <th className="text-ellipsis overflow-hidden break-words border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-[600px]:px-2">
                  Course Title
                </th>
                <th className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-[600px]:px-2">
                  Status
                </th>
                <th className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-[600px]:px-2">
                  Unit
                </th>
              </tr>
            </thead>
            <tbody className="bg-dark-blue ">
              <tr className="border">
                <td className=" border px-6 py-4 ">1</td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 max-[600px]:px-2">
                  VRT 721
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 max-[600px]:px-2">
                  Introduction to Low Vision Assessment
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  CORE
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">2</td>

                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  VRT 722
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                 Optical, non-optical and electronic aids
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  CORE
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">3</td>

                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  VRT 723
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                 Introduction to Braille
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">4</td>

                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  VRT 724
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                 Medical & Functional Aspects of Rehabilitation
                </td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">4</td>

                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  VRT 725
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Optics of low-vision devices
                </td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">5</td>

                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  VRT 726
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Visual Impairment & Multiple Disabilities
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>

              {/* Add more rows for additional course items */}
            </tbody>
          </table>

          {/* TABLE THREE*/}
          <table className="  bg-dark-blue mt-10 table-fixed  border whitespace-wrap">
            <thead className="border">
              <tr>
                <th colSpan="5" className="text-2xl">
                  Third Semester
                </th>
              </tr>
              <tr className="">
                <th className=" text-ellipsis overflow-hidden break-words border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-[600px]:px-2">
                  S/N
                </th>

                <th className=" text-ellipsis overflow-hidden break-words border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-[600px]:px-2">
                  Course Code
                </th>
                <th className=" text-ellipsis overflow-hidden break-words border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-[600px]:px-2">
                  Course Title
                </th>
                <th className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-[600px]:px-2">
                  Status
                </th>
                <th className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-[600px]:px-2">
                  Unit
                </th>
              </tr>
            </thead>
            <tbody className="bg-dark-blue ">
              <tr className="border">
                <td className="border px-6 py-4 ">1</td>
                <td className="border px-6 py-4 max-[600px]:px-2 ">VRT 799</td>
                <td className="border px-6 py-4 max-[600px]:px-2 ">Project</td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  CORE
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  6
                </td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">2</td>

                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  VRT 731
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                Strategies for Independent Living
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">3</td>

                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                 VRT 732
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
               Computer modification for the visually impaired
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2 ">
                  2
                </td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">4</td>

                <td className="border px-6 py-4 whitespace-wrap text-ellipsis overflow-hidden break-words max-[600px]:px-2">
                  VRT 733
                </td>
                <td className="border px-6 py-4 whitespace-wrap text-ellipsis overflow-hidden break-words max-[600px]:px-2">
                  Developing & Learning with visual Impairment
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>

              {/* Add more rows for additional course items */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default PGDVRTage;
