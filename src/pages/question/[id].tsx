/**
 * @Date        2024/03/06 11:52:57
 * @Author      zono
 * @Description 动态路由，显示对应的问卷
 * */

import PageWrapper from "@/components/PageWrapper";
import { getQuestionById } from "@/services/question";
import { getComponent } from "@/components/QuestionComponents";
import styles from "@/styles/Question.module.scss";

//从后端获取的数据样式
type PropsType = {
  errno: number;
  data?: {
    id: string;
    title: string;
    desc?: string;
    js?: string;
    css?: string;
    isPublished: boolean;
    isDeleted: boolean;
    componentList: Array<any>;
  };
  msg?: string;
};

/**
 * @description 根据id获取列表数据,并把数据存入props传给Questions组件
 * */
export async function getServerSideProps(context: any) {
  //获取当前动态路由数据
  const { id = "" } = context.params;

  // 根据 id 获取问卷数据
  const data = await getQuestionById(id);

  return {
    props: data,
  };
}

export default function Question(props: PropsType) {
  const { errno, data, msg = "" } = props;

  // 数据错误
  if (errno !== 0) {
    return (
      <PageWrapper title="错误">
        <h1>错误</h1>
        <p>{msg}</p>
      </PageWrapper>
    );
  }

  const {
    id,
    title = "",
    desc = "",
    isDeleted,
    isPublished,
    componentList = [],
  } = data || {};

  // 已经被删除的，提示错误
  if (isDeleted) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h1>{title}</h1>
        <p>该问卷已经被删除</p>
      </PageWrapper>
    );
  }

  // 尚未发布的，提示错误
  if (!isPublished) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h1>{title}</h1>
        <p>该问卷尚未发布</p>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper title={title} desc={desc}>
      <form method="post" action="/api/answer">
        {/* 隐藏域，把id加入表单 */}
        <input type="hidden" name="questionId" value={id} />

        {componentList.map((c) => {
          return (
            <div key={c.fe_id} className={styles.componentWrapper}>
              {getComponent(c)}
            </div>
          );
        })}

        <div className={styles.submitBtnContainer}>
          {/* <input type="submit" value="提交"/> */}
          <button type="submit">提交</button>
        </div>
      </form>
    </PageWrapper>
  );
}
