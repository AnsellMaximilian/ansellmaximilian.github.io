import { Skillset } from "./Skillset";

export const SkillsList = () => {
  return (
    <div>
      <article className="p-4">
        <h2 className="text-center text-2xl font-semibold uppercase">
          Technologies
        </h2>
        <div className="flex gap-8 flex-wrap justify-center mt-8">
          <Skillset
            title="Frontend"
            techs={[
              "react",
              "javascript",
              "css",
              "html",
              "sass",
              "bootstrap",
              "typescript",
              "tailwind",
            ]}
          />
          <Skillset
            title="Backend"
            techs={["laravel", "php", "nodejs", "express"]}
          />
          <Skillset title="Misc." techs={["git", "electron", "nextjs"]} />
        </div>
      </article>
    </div>
  );
};
