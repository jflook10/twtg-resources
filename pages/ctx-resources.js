import Layout from "../src/components/Layout";
import PageBody from "../src/components/PageBody";

const description="This list is still growing. If you would like to see a resource on the list, please message me."

export default function Ctx({data}) {
  return (
    <Layout
        title="Central Texas Area Resources"
        description="Central Texas area resources and tools to get you growing!"
      >
        <PageBody data={data} description={description}/>
      </Layout>
  )
}

  // Fetching data from the JSON file
  import fsPromises from 'fs/promises';
  import path from 'path'
  export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/src/data/ctx.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return {
      props: objectData
    }
  }