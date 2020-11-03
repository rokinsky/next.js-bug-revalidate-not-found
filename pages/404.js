const NotFound = (props) => {
  return (
    <pre>
      {JSON.stringify(props, null, 2)}
    </pre>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      is404: true,
    },
    revalidate: 10,
  };
};

export default NotFound;

