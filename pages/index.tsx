import FeatureAds from "components/molecules/FeatureAds/component";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
      </Head>
      <div>
        <FeatureAds />
      </div>
    </>
  );
}
