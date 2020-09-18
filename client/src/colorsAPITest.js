import { axiosWithAuth } from "./utils";

export const colorsAPITest = () => {
  return axiosWithAuth()
    .get("/api/colors")
    .then((res) => {
      setColorList(res.data);
    });
};
