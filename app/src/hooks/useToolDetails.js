import { useQuery } from "react-query";

const useToolDetails = (toolId) => {
  const url = `${process.env.REACT_APP_BACKEND_URL}/tool/${toolId}`;
  const { data, isLoading, refetch } = useQuery("tool", () =>
    fetch(url).then((res) => res.json())
  );
  let tool;
  if (data) {
    tool = data;
  }
  return [tool, isLoading, refetch];
};

export default useToolDetails;
