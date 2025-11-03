import SectionTitleContainer from "./SectionTitleContainer";


import MyEducation from "./MyEducation";
import WorkExperience from "./WorkExperience";


export default function MyJourney() {
  return (
    <div>
      <SectionTitleContainer
        title="my journey"
        paragrap="Education and experience that shaped my professional path"
      />

      <main className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <section>
          <h1 className="secondary_color font-bold text-3xl capitalize mb-10">
            {" "}
            Education & Courses{" "}
          </h1>

          <MyEducation />
        </section>

        <section>
          <h1 className="secondary_color font-bold text-3xl capitalize mb-10">
            {" "}
            Work Experience{" "}
          </h1>

            <WorkExperience/>
         
        </section>
      </main>
    </div>
  );
}
