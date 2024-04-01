import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

const PublicLayouts = ({
  children = <></>,
  title = "",
  description,
}: Props) => {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default PublicLayouts;
