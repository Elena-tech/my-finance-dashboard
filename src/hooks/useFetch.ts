// src/hooks/useFetch.ts
import { useState, useEffect } from "react";

export function useFetch<T>(url: string): {
  data: T | null;
  loading: boolean;
  error: string | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        if (!ignore) {
          setData(json);
          setLoading(false);
        }
      } catch (err) {
        if (!ignore) {
          setError((err as Error).message);
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, loading, error };
}
