// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import axios, { AxiosResponse, AxiosError } from "axios";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "GET") {
    const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ethiopia&appid=${process.env.OPEN_WEATHER_API_KEY}`;
    axios
      .get(openWeatherUrl)
      .then((response: AxiosResponse) => {
        res.status(response.status).send(response.data);
      })
      .catch((error: AxiosError) => {
        res.status(500).send(error.toJSON);
      });
  }
}
