/**
 * @Date        2024/03/06 12:06:05
 * @Author      zono
 * @Description 获取数据并按照问卷详情进行排列
 * 问卷整体信息
 * */

import React, { FC } from "react";
import Head from "next/head";
import Script from "next/script";
import styles from "@/styles/Common.module.scss";

type PropsType = {
  title: string;
  desc?: string;
  css?: string;
  js?: string;
  children: JSX.Element | JSX.Element[];
};

/**
 * @description 问卷整体样式
 * */
const PageWrapper: FC<PropsType> = (props: PropsType) => {
  const { title, desc = "", css = "", js = "", children } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{css}</style>
      </Head>
      <main className={styles.container}>
        {/* 插值 */}
        {children}
      </main>
      <Script id="page-js">{js}</Script>
    </>
  );
};

export default PageWrapper;
