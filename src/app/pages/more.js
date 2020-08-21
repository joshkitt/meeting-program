import React from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { get } from "@lds/universal-env";
import Stack from "@lds/eden-stack";
import { Text1, Text2 } from "@lds/eden-text";
import SecondaryButton from "@lds/eden-buttons/Secondary";
import Layout from "../components/Layout";

const { VARIABLE1 } = get();

const More = ({ stars }) => (
  <Layout title="More">
    <Stack gapSize="32">
      <Text1>The GitHub star count for Next.js is: {stars}</Text1>

      <Text2>VARIABLE1: {VARIABLE1}</Text2>

      <Link href="/" prefetch>
        <a href="/">
          <SecondaryButton>Navigate to home page</SecondaryButton>
        </a>
      </Link>
    </Stack>
  </Layout>
);

/**
 * This is Next.js's standard API to fetch data for pages.
 * A function called getInitialProps, which can be async.
 * It will be executed on the server or client, depending on which scenario is most optimal.
 * The returned object of the getInitialProps function will be used as the component's initial props.
 * Source: https://nextjs.org/docs/#fetching-data-and-component-lifecycle
 */
More.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();

  return {
    stars: json.stargazers_count
  };
};

export default More;
