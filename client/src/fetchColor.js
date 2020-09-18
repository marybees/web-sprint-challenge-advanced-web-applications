import { axiosWithAuth } from "./utils/axiosWithAuth";

export const fetchColor = () => {
  return axiosWithAuth()
    .get("/api/colors")
    .then((res) => res);
};
