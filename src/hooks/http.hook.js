import { useCallback, useState } from "react";

export const useHttp = () => {
  const [process, setProcess] = useState("waiting");

  const request = useCallback(
    async (url, apikey, headers = { Authorization: apikey }) => {
      setProcess("loading");
      const result = await fetch(url, { headers });
      if (!result.ok) {
        throw new Error(`Could not fetch ${url}. Error: ${result.status}`);
      }
      const data = await result.json();

      return data;
    }
  );

  return { request, process, setProcess };
};
