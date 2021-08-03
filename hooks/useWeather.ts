import { useEffect, useState } from "react";
import { AxiosResponse, AxiosError } from "axios";

import { axios } from "utils";

const useWeather = () => {
  useEffect(() => {
    axios
      .get("/weather")
      .then((response: AxiosResponse) => {
        console.log(response);
      })
      .catch((error: AxiosError) => {});
  }, []);
  return {};
};
