/**
 * @Date        2024/03/06 11:50:01
 * @Author      zono
 * @Description 整合组件，可以用type获取对应组件渲染
 * */

import QuestionInput from "./QuestionInput";
import QuestionRadio from "./QuestionRadio";
import QuestionTitle from "./QuestionTitle";
import QuestionParagraph from "./QuestionParagraph";
import QuestionInfo from "./QuestionInfo";
import QuestionTextarea from "./QuestionTextarea";
import QuestionCheckbox from "./QuestionCheckbox";

type ComponentInfoType = {
  fe_id: string;
  type: string;
  // title: string
  isHidden: string;
  props: any;
};

/**
 * @description 按type输出对应组件，并且传入对应props
 * @param {type}
 * @returns 单个component
 * */
export const getComponent = (comp: ComponentInfoType) => {
  const { fe_id, type, isHidden, props = {} } = comp;

  if (isHidden) return null;

  if (type === "questionInput") {
    return <QuestionInput fe_id={fe_id} props={props} />;
  }

  if (type === "questionRadio") {
    return <QuestionRadio fe_id={fe_id} props={props} />;
  }

  if (type === "questionTitle") {
    return <QuestionTitle {...props} />;
  }

  if (type === "questionParagraph") {
    return <QuestionParagraph {...props} />;
  }

  if (type === "questionInfo") {
    return <QuestionInfo {...props} />;
  }

  if (type === "questionTextarea") {
    return <QuestionTextarea fe_id={fe_id} props={props} />;
  }

  if (type === "questionCheckbox") {
    return <QuestionCheckbox fe_id={fe_id} props={props} />;
  }

  return null;
};
