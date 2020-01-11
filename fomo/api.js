import axios from "axios";

export const fetchSkiddleEvents = (
  location = `latitude=53.4808&longitude=-2.2446`
) => {
  return axios
    .get(
      `https://www.skiddle.com/api/v1/events/search/?api_key=2c674154bb766482be163c00831f88c8&${location}&radius=5&description=1&order=date&limit=100`
    )
    .then(({ data }) => {
      return data;
    });
};
