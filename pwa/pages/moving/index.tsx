import Button from "@mui/material/Button";
import React, {ReactNode, useEffect, useState} from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@mui/material/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@mui/material/Hidden";
import PageHeader from "../../components/common/pageheader";
import {Tab, Tabs, Typography, Box, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import PaperCard from "../../components/common/paperCard";
import SendIcon from '@mui/icons-material/Send';
import {ChevronRight} from "@mui/icons-material";
import {LoadingButton} from "@mui/lab";
import {useAppContext} from "../../components/context/state";

function Index() {

  const title = 'Verhuizing doorgeven';

  const [loading, setLoading] = useState(false);

  const context = useAppContext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);

      if (params.has('state')) {
        setLoading(true);
      }
    }

    console.log(context.baseUrl);
  },[]);

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid item sm={12}>
        <div style={{textAlign: "center"}}>
          <Typography color="#19224C" fontWeight="bold" mt='40px' mb='40px' variant="h4" component="h2">
            {title}
          </Typography>
          <Typography variant="h6" color="#19224C">
            U gaat een verhuizing doorgeven in of naar de gemeente 's-Hertogenbosch.
          </Typography>
          <br/>
          <Typography variant="h6" color="#19224C" mb="40px">
            U moet in dit formulier inloggen met DigiD.
          </Typography>
          {
            loading == true
            ?
            <LoadingButton sx={{width: '200px'}} loading loadingIndicator="inloggen..." variant="outlined">
            Fetch data
            </LoadingButton>
            :
            <Link href={context.baseUrl + "/digid/login?returnUrl=" + context.frontendUrl +  "/moving?state=8412312632"}>
            <Button variant="contained" style={{backgroundColor: "#F5F5F5", color: "black", marginBottom: '20px'}} endIcon={<ChevronRight />}>
            <img style={{width: '40px', marginRight: '10px'}} src="https://www.logius.nl/sites/default/files/afbeeldingen/producten/digid_eo_rgb_100px_4.png" alt=""/>Inloggen Met DigiD
            </Button>
            </Link>
          }



          <div>
            <Typography fontWeight="bold">
              Heeft u nog geen DigiD?
            </Typography>
            <br/>
            <Typography>
              Vraag uw DigiD aan op <a href="https://www.digid.nl" target="_blank">www.digid.nl</a>
            </Typography>
          </div>
        </div>
      </Grid>

    </Layout>
  </>
}

export default Index
