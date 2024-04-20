import React from "react";

const VRTPage = () => {
  return (
    <div id="vrt" className="animate-fade-up w-full overflow-auto text-white bg-dark-blue px-20 max-[600px]:px-4 pt-8">
      <header className="">
        <div className=" container mx-auto py-4 px-4 md:px-0">
          <h1 className=" border-b-4 pb-2 text-3xl font-semibold text-gray-800">
            M.Sc in Vision Rehabilitation Therapy (Part Time)
          </h1>

          <p className="  text-justify  mt-2">
            In Nigeria today, there is a marked shortage of Vision
            Rehabilitation professionals. This programme is premised on
            providing a structured avenue for addressing the shortage of
            professional in vision rehabilitation therapy. Students will be
            exposed to a wide range of skill sets and knowledge necessary for
            providing vision rehabilitation services to people with low vision
            to enable such persons cope successfully with the challenges of
            sight loss. The course content is both theoretical and practical in
            nature. Instructional topics include assessment of the level of low
            vision, and planning of remediation skills. Special emphasis is
            placed on understanding the extreme life changes and challenges
            caused by low vision or blindness. Students will learn the
            professional composition of a rehabilitation team, the functions of
            every member of the team, and the importance of teamwork. Students
            will also gain knowledge of traditional and contemporary
            rehabilitation services and how to identify and utilize community
            agency resources. Vision rehabilitation enables individuals with low
            vision to optimize their residual vision with the aid of optical and
            non-optical devices, training in carrying out activities of daily
            living independently.
          </p>
        </div>
      </header>

      <div className="bg-gray-50 text-left mt-10 ">
        <h2 className="text-gray-900 e text-3xl font-extrabold mb-2">
          Admission Requirements{" "}
        </h2>
        <ul className="list-decimal text-justify">
          <li>
            Candidates must possess a Bachelor’s degree in Medicine,
            Optometry, Orthoptics, or Occupational Therapy. For the classified
            programmes, a minimum of Second Class Lower (2:2) from a recognized
            university is required.
          </li>
          <li>
            Candidates with a minimum of Second Class Lower Division (2:2)
            in Special Education, Sociology, Psychology, Social Work, and those
            with Third Class in the courses listed above or in Sociological
            Sciences but with PGD in Vision Rehabilitation Therapy. Minimum
            Grade Point (GP) required for candidates with PGD is 3.0.
          </li>
          <li>
            Candidates with PGD in Vision Rehabilitation Therapy from other
            recognized Universities can be admitted.
          </li>
          <li>
          Having experience in providing support for People with vision
            challenges is an added advantage.
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
                <td className="border px-6 py-4 ">VRT 811</td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 max-[600px]:px-2 ">
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
                <td className="border px-6 py-4 ">2</td>

                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  VRT 812
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Independent Living Skills
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
                  VRT 813
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wra max-[600px]:px-2">
                  Low Vision Assessment & Intervention I
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
                  VRT 814
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
                  VRT 815
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Psychological & Social Implications of Visual Impairment
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
                  VRT 816
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Partnerships working for Health & Rehabilitation
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
                  VRT 817
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
                  VRT 818
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Geometrical Optics
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">8</td>

                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  VRT 819
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border  px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Fitting Low Vision Aids
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>
              {/* Add more rows for additional course items */}
            </tbody>
          </table>

          {/* TABLE TWO */}
          <table className=" bg-dark-blue mt-8 table-fixed border whitespace-wrap">
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
                  VRT 821
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 max-[600px]:px-2">
                  Neurological Visual Impairments in Children
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
                  VRT 822
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Optical Aids Laboratory, Magnification & Low Vision Aids
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
                  VRT 823
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Computer skills for the Visually Impaired
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  CORE
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">4</td>

                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  VRT 824
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Disability Rights
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
                  VRT 825
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Physiological Optics
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
                  OMR 826
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Advanced Vocational Counselling
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

                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  VRT 827
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Literary Braille
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">7</td>

                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  VRT 828
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Low Vision Assessment & Intervention II
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
          <table className=" bg-dark-blue mt-10 table-fixed  border whitespace-wrap">
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
                <td className="border px-6 py-4 max-[600px]:px-2 ">VRT 899</td>
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
                  VRT 833
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Sociology of Medicine
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
                  VRT 834
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Environmental Vision
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
                  VRT 835
                </td>
                <td className="border px-6 py-4 whitespace-wrap text-ellipsis overflow-hidden break-words max-[600px]:px-2">
                  Research Design
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">4</td>

                <td className=" border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  VRT 836
                </td>
                <td className=" border px-6 py-4 whitespace-wraptext-ellipsis overflow-hidden break-words max-[600px]:px-2">
                  Central and Peripheral field loss
                </td>
                <td className=" text-ellipsis overflow-hidden break-wordsborder px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  ELECTIVE
                </td>
                <td className="text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  2
                </td>
              </tr>
              <tr className="border">
                <td className="border px-6 py-4 ">5</td>

                <td className="border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  VRT 837
                </td>
                <td className=" text-ellipsis overflow-hidden break-words border px-6 py-4 whitespace-wrap max-[600px]:px-2">
                  Assistive Technologies
                </td>
                <td className=" text-ellipsis overflow-hidden break-wordsborder px-6 py-4 whitespace-wrap max-[600px]:px-2">
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

export default VRTPage;
