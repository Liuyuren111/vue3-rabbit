import {useRequest} from "@/hooks/useRequest";

const { request } = useRequest()


// 获取首页分类数据
export function getCategoriesAPI() {
  return  request('/home/category/head','get')
}