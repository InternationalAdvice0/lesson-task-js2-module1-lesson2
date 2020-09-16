import { url } from "../constants/sitedetails.js";

export async function callApi() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const result = json.data;
    return {
      success: true,
      result: result,
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
}
