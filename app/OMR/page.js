import React from "react";

const PDGOMRPage = () => {
  return (
    <div
      id="omr"
      className="  animate-fade-up w-full overflow-auto text-white bg-dark-blue px-20 max-[600px]:px-4 pt-8"
    >
      <header className="">
        <div className="  container mx-auto py-4 px-4 md:px-0">
          <h1 className="  border-b-4 pb-2 text-3xl font-semibold text-gray-800">
            Postgraduate Diploma Orientation & Mobility (Part- Time)
          </h1>

          <p className="  text-justify  mt-2">
            Nigeria currently lacks Certified Orientation and Mobility
            Rehabilitation Specialists as there is not a single Institution
            offering the programme. The overall goal is to address the shortage
            of professional in Orientation and Mobility Rehabilitation for blind
            and visually impaired persons and encourage multi-disciplinary
            approach to the context of vision rehabilitation. The programme
            provides a remedial programme for those who would wish to pursue a
            career in Low Vision Rehabilitation (with specialisation in
            Orientation and Mobility Rehabilitation) but from other academic and
            professional backgrounds not necessarily related to healthcare,
            medicine, or vision science. It is structured to provide
            comprehensive introduction to the principles and practice of
            Orientation and Mobility Rehabilitation. The course content is both
            theoretical and practical in nature. Instructional topics include
            assessment of the level of low vision, and planning of remediation
            skills specifically to train professionals who will in-turn render
            practical rehabilitation training services to blind and visually
            impaired persons.
          </p>
        </div>
      </header>

      <div className="bg-gray-50 text-left mt-10 ">
        <h2 className="text-gray-900 e text-3xl font-extrabold mb-2">
          Admission Requirements{" "}
        </h2>
        <ul className="list-decimal text-justify">
          <li>
            Candidates must possess a Bachelor’s degree (with at least a
            Second Class Lower) in any area of Biological, Bio-medical or Health
            Sciences from a recognized university.
          </li>
          <li>
            Candidates with a degree in other disciplines such as Sociology,
            Social work, Psychology, or Special Education, (with at least a
            Second Class Lower from a recognized university) are eligible.
          </li>
          <li>Having experience in providing support for People with vision
            challenges is an added advantage.
          </li>
        </ul>
      </div>

      <div className="bg-gray-50 text-left mt-10">
        <h2 className="text-gray-900 e text-3xl font-extrabold mb-2">
          Graduation Requirements{" "}
        </h2>
        <ul className="list-disc text-justify">
          <li> Minimum number of earned credit Unit: 26</li>
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
          <table className=" bg-dark-blue table-fixed  border whitespace-wrap">
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
                <td className="border px-6 py-4 ">OMR 711</td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 max-[600px]:px-2 ">
                  Introduction to Orientation & Mobility
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
                  OMR 712
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Physiology & Functions of the Eye I{" "}
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
                  OMR 713
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wra max-[600px]:px-2">
                  Introduction to Braille
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
                  OMR 714
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Functional Implications of Visual Impairment
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
                  OMR 715
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Psychological & Social Implications of Visual Impairments{" "}
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
                  OMR 716
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Optical, Non-Optical, & Electronic Mobility Aids{" "}
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
                  OMR 717
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Partnerships working for Eye care
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
                  OMR 718
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  History of Orientation & Mobility{" "}
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
                  OMR 721
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 max-[600px]:px-2">
                  Principles of Orientation & Mobility Rehabilitation
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
                  OMR 722
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Physiology & Functions of the Eye II{" "}
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
                  OMR 723{" "}
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Medical & Functional Aspects of Rehabilitation{" "}
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
                  OMR 724{" "}
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Behaviour Modification
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
                  OMR 725
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  O & M Techniques
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
                  OMR 726
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Orientation & Mobility Training for Children
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
                <td className="border px-6 py-4 max-[600px]:px-2 ">OMR 799</td>
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
                  OMR 731
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Orientation & Mobility Field Work
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
                  OMR 732
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Orientation & Mobility (Needs Assessment){" "}
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
                  OMR 733
                </td>
                <td className="border px-6 py-4 whitespace-wrap text-ellipsis overflow-hidden break-words max-[600px]:px-2">
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
        </div>
      </main>
    </div>
  );
};

export default PDGOMRPage;
