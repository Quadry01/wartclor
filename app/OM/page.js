
import React from "react";

const CoursePage = () => {
  return (
    <div className="animate-fade-up w-full overflow-auto bg-dark-blue px-20 max-[600px]:px-4 pt-8">
      <header className="">
        <div className=" bg-dark-blue container mx-auto py-4 px-4 md:px-0">
          <h1 className=" bg-dark-blue border-b-4 pb-2 text-3xl font-semibold text-gray-800">
            M.Sc Orientation & Mobility Rehabilitation (Part-Time)
          </h1>

          <h1 className=" bg-dark-blue text-2xl  mt-4 font-semibold text-gray-800">
            Why M.Sc Orientation & Mobility Rehabilitation{" "}
          </h1>
          <p className=" bg-dark-blue text-justify  mt-2">
            This Programme provides a structured avenue for addressing the
            shortages of professionals in Orientation and Mobility
            Rehabilitation for blind and visually impaired persons. Orientation
            refers to the ability to recognise and establish position in
            relation to environment while mobility is relates to the physical
            ability to move in an orderly, efficient and safe manner through the
            environment. Orientation and mobility rehabilitation training (OMRT)
            is an important component of vision rehabilitation often provided by
            Certified Orientation and Mobility Specialists (COMS). Through OMRT,
            individuals with visual impairment learn safe and independent indoor
            and outdoor travel skills enabling them to ambulate and negotiate
            the environment safely and independently.
          </p>
        </div>
      </header>
      <main className="container mx-auto py-8 px-4 md:px-0">
        <div className="">
          <h1 className=" bg-dark-blue text-2xl  m-2 font-semibold text-gray-800">
            List of Courses/Semester and Number of Units by Levels 
          </h1>

          {/* TABLE ONE */}
          <table className="  table-fixed  border whitespace-wrap">
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
                <td className="border px-6 py-4 ">OMR 811</td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 max-[600px]:px-2 ">
                  Principles of Orientation & Mobility (O&M)
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">CORE</td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">2</td>

                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">OMR 812</td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Medical & Functional Aspects of Visual Disability
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">CORE</td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 max-[600px]:px-2 ">3</td>

                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">OMR 813</td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wra max-[600px]:px-2">
                  Rehabilitation Counselling
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">CORE</td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">4</td>

                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">OMR 814</td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Assessing Residual Vision
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">4</td>

                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">OMR 815</td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Principles of Low Vision
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">5</td>

                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">OMR 816</td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Partnerships working for Health & Rehabilitation
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">6</td>

                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">OMR 817</td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Issues in Independent Travels for the Blind
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">7</td>

                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">VRT 818</td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Behaviour Modification
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">8</td>

                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">OMR 819</td>
                <td className=" text-ellipsis overflow-hidden break-words border  px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Fieldwork in Orientation & Mobility Rehabilitation
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>
              {/* Add more rows for additional course items */}
            </tbody>
          </table>

          {/* TABLE TWO */}
          <table className=" mt-8 table-fixed border whitespace-wrap">
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
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 max-[600px]:px-2">OMR 821</td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 max-[600px]:px-2">
                  Psychosocial Aspects of Disability
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">CORE</td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">2</td>

                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">OMR 822</td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Orientation & Mobility for Children
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">CORE</td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">3</td>

                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">OMR 823</td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Implications of Vision Problems
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">CORE</td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">4</td>

                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">OMR 824</td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Mobility Aids
                </td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">4</td>

                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">OMR 825</td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Advanced Health Psychology
                </td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">5</td>

                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">OMR 826</td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Advanced Vocational Counselling
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">6</td>

                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">VRT 827</td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Literary Braille
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">7</td>

                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">OMR 828</td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Intermediate Orientation & Mobility: Lab & Seminar
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4  ">8</td>

                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">OMR 829</td>
                <td className=" text-ellipsis overflow-hidden break-words border  px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Gerontology in Orientation & Mobility Rehabilitationn
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>
              {/* Add more rows for additional course items */}
            </tbody>
          </table>

          {/* TABLE THREE*/}
          <table className=" mt-10 table-fixed  border whitespace-wrap">
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
                <td className="border px-6 py-4 max-[600px]:px-2 ">OMR 899</td>
                <td className="border px-6 py-4 max-[600px]:px-2 ">Project</td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">CORE</td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">6</td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">2</td>

                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">OMR 833</td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Sociology of Medicine
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">3</td>

                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">OMR 834</td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Social and Cultural contexts in Vision Rehabilitation
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2 ">2</td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">4</td>

                <td className="border px-6 py-4 whitespace-wrap text-ellipsis overflow-hidden break-words max-[600px]:px-2">OMR 835</td>
                <td className="border px-6 py-4 whitespace-wrap text-ellipsis overflow-hidden break-words max-[600px]:px-2">
                  Research Design{" "}
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">ELECTIVE</td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">4</td>

                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">OMR 836</td>
                <td className=" border px-6 py-4 whitespace-wraptext-ellipsis overflow-hidden break-words max-[600px]:px-2">
                  Electronic Devices for Orientation & Mobility
                </td>
                <td className=" text-ellipsis overflow-hidden break-wordsborder px-6 py-4 whitespace-wrap max-[600px]:px-2">ELECTIVE</td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">5</td>

                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">VRT 837</td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Assistive Technologies
                </td>
                <td className=" text-ellipsis overflow-hidden break-wordsborder px-6 py-4 whitespace-wrap max-[600px]:px-2">ELECTIVE</td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">2</td>
              </tr>

              {/* Add more rows for additional course items */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default CoursePage;
