import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";

function Index() {

  const title = 'Affairs';

  return <>
    <Layout title={title} description="waar kan ik deze description zien" >
      <p>{title}</p>
    </Layout>
  </>
}

export default Index
