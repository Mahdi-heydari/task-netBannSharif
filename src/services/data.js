import axios from "axios";

export const getCardData = async function (typeData) {
  try {
    const response = await axios.get('https://run.mocky.io/v3/6cee870e-47bd-45b7-8650-8c171b6984b5');
    const result = response?.data[typeData];
    if (result !== undefined) {
      return result;
    } else {
      console.error(`Key "${typeData}" not found in the response data.`);
      return undefined;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return undefined;
  }
};
