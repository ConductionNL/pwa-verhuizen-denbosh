import React from 'react';
import Grid from '@mui/material/Grid';

import ActionMenu from 'components/common/actionmenu';
import {RestfulProvider, useGet} from "restful-react";

import Layout from 'components/common/layout';
import {setCookie} from "../components/utility/CookieHandler";
import {useRouter} from "next/router";
import PaperCard from "../components/common/paperCard";
import {useUserContext} from "../components/context/userContext";
import {useAppContext} from "../components/context/state";

const Welcome = () => (
  <>
    <Layout title="Welkom bij verhuizen 's Hertogenbosch!" description="waar kan ik deze description zien">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={6}>
          <PaperCard
            title="Verhuizen"
            description="Het doorgeven van een verhuizing."
            link="/moving"
            linkText="Lees meer "
          />
        </Grid>
      </Grid>
    </Layout>
  </>
);

export default Welcome;

