import Layout from "../src/components/Layout";
import PageBody from "../src/components/PageBody";

export default function Collaborations({collaborations: data}) {
    return (
      <Layout
        title="Collaborations"
        description="Coupons, reviews, and brand partnerships approved by TWTG"
      >
        <PageBody data={data}/>
      </Layout>
    )
  }

  // Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/src/data/collaborations.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return {
    props: objectData
  }
}