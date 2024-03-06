/**
 * @Date        2024/03/06 11:57:51
 * @Author      zono
 * @Description ajax配置,约等于代理
 * */

const HOST = "http://localhost:3001"; // Mock 的 host

/**
 * @description 封装get方法
 * @param {type}  接口名
 * */
export async function get(url: string) {
  const res = await fetch(`${HOST}${url}`);
  const data = res.json();
  return data;
}

/**
 * @description 封装post方法
 * @param {type}  接口名
 * */
export async function post(url: string, body: any) {
  const res = await fetch(`${HOST}${url}`, {
    method: "post",
    body: JSON.stringify(body),
  });
  const data = res.json();
  return data;
}
