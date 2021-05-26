// import Image from "next/image";
import Head from "next/head";
import Layout from "../components/layout";
export default function About() {
  return (
    <Layout>
      <Head>
        <title>Hi wa</title>
      </Head>
      <h1>Hello Hamz</h1>
      <div>
        <p className="tag-name">Img</p>
        {/* <Image src="/images/bear.png" height={144} width={244} alt="Bear 555" /> */}
      </div>
      <style jsx>
        {`
          .tag-name {
            font-size: 22px;
            color: lightblue;
            border: 2px solid blue;
          }
        `}
      </style>
    </Layout>
  );
}
