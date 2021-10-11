import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import React from "react";
import Footer from "../../components/common/footer";
import Head from "next/head";
import Header from "../../components/common/header";
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";
import ProductTable from "../../components/products/table";
import ProductCard from "../../components/products/card";
import PaperCard from "../../components/common/paperCard";
import Chip from "@material-ui/core/Chip";
import CheckIcon from "@material-ui/icons/Check";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Index() {

  const title = 'Producten en diensten'
  const description = 'Omschrijving over producten'
  const categories = [
    {
      id: 1,
      name: "Diensten",
      description: "product omschrijving"
    },
    {
      id: 2,
      name: "Vergunningen",
      description: "product omschrijving 2"
    },
    {
      id: 2,
      name: "Regelingen",
      description: "product omschrijving 2"
    }];

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container >
        <Hidden smDown>
          <Grid item md={3}>
            <ActionMenu />
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9}>
          <PageHeader title={title} />
          <Box paddingTop={2} paddingBottom={2}>
            <p>{description}</p>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} md={6}>
              <PaperCard
                title="Producten"
                description="U kunt bij uw Gemeente meerdere productne afnmen, denk daarbij bijvoorbeeld aan een paspoot"
                link="/products/products"
                linkText="Lees meer"
              />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <PaperCard
                title="Diensten"
                description="De gemeente bestaad om u te helpen, lees hier wat wij voor u kunt doen "
                link="/products/services"
                linkText="Lees meer of vraag aan"
              />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <PaperCard
                title="Verguningen"
                description="Voor sommige activiteiten heeft u een vergunning of ontheffing nodig, denk hierbij bijvoorbeeld aan een evenement of het schenken van alchohol"
                link="/products/licenses"
                linkText="Lees meer of vraag aan"
              />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <PaperCard
                title="Regelingen"
                description="De gemeente kent diverse regelingen om u als inwoner of ondernemer te ondersteunen  "
                link="/arrangements"
                linkText="Lees meer of vraag aan"
              />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <PaperCard
                title="Melding"
                description="In de gemeente Zaanstad kunt u over verschillende onderwerpen een melding maken. "
                link="https://www.zaanstad.nl/mozard/!suite86.scherm0325?mPag=244"
                linkText="Lees meer of doe melding"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
