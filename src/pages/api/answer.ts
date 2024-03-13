/**
 * @Date        2024/03/06 14:28:21
 * @Author      zono
 * @Description 代理接口
 * 一个接口文件，用于处理客户端提交的表单数据
 * */

import type { NextApiRequest, NextApiResponse } from "next";
import { postAnswer } from "@/services/answer";

function genAnswerInfo(reqBody: any) {
  const answerList: any[] = [];

  Object.keys(reqBody).forEach((key) => {
    if (key === "questionId") return;
    answerList.push({
      componentId: key,
      value: reqBody[key],
    });
  });

  return {
    questionId: reqBody.questionId || "",
    answerList,
  };
}

/**
 * @description 处理提交结果
 * */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 如果不是 post 请求
  if (req.method !== "POST") {
    // 不是 post 则返回错误
    res.status(200).json({ errno: -1, msg: "Method 错误" });
  }

  // 获取并格式化表单数据
  const answerInfo = genAnswerInfo(req.body);

  console.log("answerInfo", answerInfo);

  try {
    // 提交到服务端 Mock
    const resData = await postAnswer(answerInfo);
    if (resData.errno === 0) {
      // 如果提交成功了
      res.redirect("/success");
    } else {
      // 提交失败了
      res.redirect("/fail");
    }
  } catch (err) {
    res.redirect("/fail");
  }

  // res.status(200).json({ errno: 0 })
}
