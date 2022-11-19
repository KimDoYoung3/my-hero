import Layout from 'components/Layout';
import styles from 'styles/Home.module.css'

import Lottie from 'react-lottie';
import ironMan from 'public/images/iron-man.json'
import { Button } from 'antd-mobile';
import { useRouter } from 'next/router';

const defaultOptions = {
  loop: true,
  autoplay:true,
  animationData: ironMan,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}
export default function Home() {
  const router = useRouter();
  const handleClickGoToTest = () => {
    router.push("/test");
  };

  


  return (
    <Layout>
      <div className={styles.container}>
        <Lottie options={defaultOptions} height="100%" width="100%"></Lottie>
      </div>
      <div className={styles.title}>
        내가 만약 히어로 였다면?
        <br />
        <br />
        이번 테스트를 통해 마블 속 주인공이 되어보세요!
      </div>
    
      <Button className={styles.button} onClick={handleClickGoToTest}>
        테스트 하러가기
      </Button>
    </Layout>
  );
}
