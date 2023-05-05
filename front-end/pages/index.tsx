import { GetServerSideProps } from "next";
import React from "react";

interface ServerResponse {
  message: string;
}

interface HomeProps {
  serverResponse: ServerResponse;
}

export default function Home({ serverResponse }: HomeProps) {
  return (
    <React.Fragment>
      <main>
        <h1>Server said: {serverResponse.message}</h1>
      </main>
    </React.Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch(`http://localhost:3333/hello-world`);

  const serverResponse = await data.json();

  return {
    props: {
      serverResponse,
    },
  };
};
