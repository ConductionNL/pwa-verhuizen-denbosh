import React from 'react';
import Grid from "@material-ui/core/Grid";
import StandardCard from "../../components/common/card";
import ArrangementsTestData from "../data/arrangements";

const posts = ArrangementsTestData()

export default function ArrangementsCards() {

  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={5} lg={4}>
          <StandardCard
            title={post.name}
            secondaryTitle={"Status: " + post.status}
            description={post.description}
            link={"/arrangements/" + post.id}
          />
        </Grid>
      ))}
    </Grid>
  );
}
