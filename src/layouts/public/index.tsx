import CommonHero from "@/components/common/CommonHero";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { UpperNav } from "./UpperNav";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  commonHeroTitle?: any;
  commonHeroClass?: any;
  showInnerNav?: any;
};

const PublicLayouts = ({
  children = <></>,
  title = "",
  description,
  commonHeroTitle,
  commonHeroClass,
}: Props) => {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      <main>
        <Navbar />
        <div className={`${commonHeroClass ? commonHeroClass : null}`}>
          <CommonHero name={commonHeroTitle} />
        </div>
        {children}
        <Footer />
      </main>
    </>
  );
};

export default PublicLayouts;
