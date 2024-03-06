/**
 * @Date        2024/03/06 11:56:50
 * @Author      zono
 * @Description 从后端获取问卷列表
 * */

import { get } from "./ajax";

/**
 * @description 用id获取对应的问卷列表
 * @param {type}  id
 * @returns   列表
 * */
export async function getQuestionById(id: string) {
  const url = `/api/question/${id}`; // Mock 或服务端
  const data = await get(url);
  return data;
}
