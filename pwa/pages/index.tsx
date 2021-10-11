import React from 'react';
import Grid from '@material-ui/core/Grid';

import ActionMenu from 'components/common/actionmenu';
import { RestfulProvider } from "restful-react";

import Layout from 'components/common/layout';
import {setCookie} from "../components/utility/CookieHandler";
import {useRouter} from "next/router";
import PaperCard from "../components/common/paperCard";

const handleLogin = () => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    let url = new URL(window.location.href);

    if (url.searchParams.get('bsn')) {
      setCookie('bsn', url.searchParams.get('bsn'), 5);
    }

    if (url.searchParams.get('name')) {
      setCookie('name', url.searchParams.get('name'), 5);
      router.push('/user');
    }

  }
}

const Welcome = () => (
  <>
    <Layout title="Welkom op Open-Inwoner!" description="waar kan ik deze description zien">
      {
        handleLogin()
      }
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={6}>
          <PaperCard
            title="Producten"
            description="De Tijdelijke Ondersteuning Noodzakelijke Kosten (TONK) is een tijdelijke eenmalige financiële ondersteuning voor als u een aanzienlijke inkomensterugval heeft als gevolg van de coronamaatregelen. En als u hierdoor problemen heeft met het betalen van uw woonkosten. Het gaat dan om de huur of hypotheek en de kosten van elektriciteit, gas en water en eventuele servicekosten."
            link="/products/products"
            linkText="Lees meer "
          />
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <PaperCard
            title="Diensten"
            description="De uitkering volgens de Participatiewet (bijstand) is een geldbedrag per maand dat u krijgt van de gemeente, om in uw levensonderhoud te kunnen voorzien. Voor mensen met een inkomen onder 110% van het minimumloon en weinig of geen vermogen. "
            link="/products/services"
            linkText="Lees meer of vraag aan"
          />
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <PaperCard
            title="Verguningen"
            description="Een bedrag dat u ieder jaar krijgt bovenop uw minimuminkomen. Voor mensen die minimaal 5 jaar een minimum inkomen hebben (uitkering of werk). "
            link="/products/licenses"
            linkText="Lees meer of vraag aan"
          />
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <PaperCard
            title="Regelingen"
            description="Zelfstandigen kunnen in (tijdelijke) financiële problemen komen die het voortbestaan van hun bedrijf bedreigen. In bepaalde gevallen kunnen zij dan een beroep doen op het Besluit bijstandverlening zelfstandigen (Bbz). "
            link="/arrangements"
            linkText="Lees meer of vraag aan"
          />
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <PaperCard
            title="Melding"
            description="Zelfstandigen kunnen in (tijdelijke) financiële problemen komen die het voortbestaan van hun bedrijf bedreigen. In bepaalde gevallen kunnen zij dan een beroep doen op het Besluit bijstandverlening zelfstandigen (Bbz). "
            link="https://www.zaanstad.nl/mozard/!suite86.scherm0325?mPag=244"
            linkText="Lees meer of vraag aan"
          />
        </Grid>
      </Grid>
    </Layout>
  </>
);

export default Welcome;

