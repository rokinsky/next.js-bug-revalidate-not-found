const Slug = (props) => {
  return (
    <pre>
      {JSON.stringify(props, null, 2)}
    </pre>
  );
};

const notFoundMap = new Map();

export const getStaticProps = ({ params }) => {
  const { slug = [] } = params;
  const fullSlug = slug.join("/"); 

  const notFound = !notFoundMap.get(fullSlug);
  notFoundMap.set(fullSlug, notFound);

  return {
    notFound,
    props: {},
    revalidate: 10,
  };
};

export const getStaticPaths = () =>  {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default Slug;

