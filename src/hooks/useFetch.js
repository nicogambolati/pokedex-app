import { useEffect, useState } from "react";

const localCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    if (localCache[url]) {
      // Si la url ya existe en el cache
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });

      return;
    }

    // Cada vez que cambie la url, vuelvo a establecer el valor null
    setLoadingState();

    const resp = await fetch(url);

    // Sleep
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }

    const data = await resp.json();

    console.log(data);

    // Extraigo el JSON del string de la info del servidor
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    // Manejo del cache
    localCache[url] = data;
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
