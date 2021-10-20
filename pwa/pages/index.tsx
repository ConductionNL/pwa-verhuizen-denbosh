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
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import {ChevronRight} from "@mui/icons-material";

const Welcome = () => {
  const router = useRouter();
  return (
    <>
      <Layout title="Welkom bij verhuizen 's Hertogenbosch!" description="waar kan ik deze description zien">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={4}>
            <Card>
              <CardActionArea onClick={() => {router.push('/moving')}}>
                <CardContent sx={{textAlign: "center"}}>
                  <div>
                    <Avatar sx={{ backgroundColor: "#001759", marginLeft: "auto", marginRight: "auto" }}>
                      <LocalShippingIcon />
                    </Avatar>
                  </div>
                  <Typography gutterBottom variant="h5" component="div">
                    Verhuizen
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{marginBottom: "30px"}}>
                    Met dit formulier bent u in staat om een verhuizing door te geven.
                  </Typography>
                  <Link href="/moving" sx={{marginLeft: "auto", marginRight: "auto"}}>
                    <Button color="primary" variant="contained" endIcon={<ChevronRight/>}>Start formulier</Button>
                  </Link>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default Welcome;

