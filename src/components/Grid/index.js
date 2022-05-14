import React from "react";
import Card from "components/Card";
import { useGetProjects } from "hooks/useGetProjects";
import Spinner from "components/Spinner";

export default function Grid() {
  const { projects, isLoading } = useGetProjects();

  if (isLoading)
    return (
      <div className="container d-flex justify-content-center my-5">
        <Spinner />
      </div>
    );

  return (
    <div className="row row-cols-1 row-cols-md-2 mt-4">
      {projects.map(project => {
        return <Card project={project} key={project._id} />;
      })}
    </div>
  );
}
