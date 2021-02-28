import Head from "next/head";

import { CompletedChallenges } from "../components/CompleteChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from "../styles/pages/Home.module.css";
import { CountDownProvider } from "../contexts/CountdownContext";


export default function Home(props) {

 // console.log("Props:", props);

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />

      <CountDownProvider>      
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountDownProvider>
    </div>
  );
}


export const getServerSideProps = async () => {

  //chamada API
  const user = {
    level: 1,
    currentExperience: 50,
    challengesCompleted: 2,    
  }

  console.log("User:", user);

  return {
    props: user
  }
}