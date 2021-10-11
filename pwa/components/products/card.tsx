import React from 'react';
import Grid from "@material-ui/core/Grid";
import StandardCard from "../../components/common/card";
import Paper from '@material-ui/core/Paper';

export default function ProductCard({product = null}) {

  return (
      <Grid item xs={4}>
        <Paper elevation={0} >
          <StandardCard
            smallUpperTitle={product.title}
            title={product.name}
            description={product.description}
            link={"/products/"+product.id}
          />
        </Paper>
      </Grid>
  );
}
