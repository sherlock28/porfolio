import { useState, useEffect } from "react";
import { getProjectsService } from "services/getProjectsService";

export function useGetProjects() {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getProjectsService().then(res => {
      setIsLoading(false);
      setProjects(res.data.projects);
    });
  }, []);

  return { projects, isLoading };
}
