import { useHttp } from "../hooks/http.hook";
import { API_KEY, API_URL } from "../config";

const ShopService = () => {
  const { request, setProcess, process } = useHttp();

  const getGoods = async () => {
    const res = await request(API_URL, API_KEY);
    return res;
  };

  return { getGoods, setProcess, process };
};

export default ShopService;
