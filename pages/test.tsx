import { useQuery } from "@tanstack/react-query";
import { NavBar, Skeleton } from "antd-mobile";
import Layout from "components/Layout";
import { getMbtiTests } from "apis";
import TestWrapper from "components/TestWrapper";

function test() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["mbti-tests"],
    queryFn: getMbtiTests,
  });
  const renderer = () => {
    if (isLoading) {
      return (
        <div>
          <Skeleton.Title animated />
          <Skeleton.Paragraph lineCount={5} animated />
        </div>
      )
    }
    if (data?.length) {
      return <TestWrapper data={data}/>;
    }
    if (isError) {
      console.error(error);
      return <>에러가 발생 했어요.</>;
    }
    return <>데이터가 존재하지 않아요!</>
  };
  console.log(data)
  return <div>
    <Layout>
      <NavBar>나만의 히어로 찾기</NavBar>
      {renderer()}
    </Layout>
  </div>;
}

export default test;