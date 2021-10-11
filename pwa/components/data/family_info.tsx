import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import {useGet, Poll, Get} from "restful-react";
import PersonInfo from "../../components/data/personal_info";
import {Paper, Accordion, AccordionSummary, Typography, AccordionDetails } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function FamilyInfo({id = null, person = null}) {
  if (person == null) {
    var { data: person } = useGet({
      path: "gateways/brp/ingeschrevenpersonen/" + id,
    });
  }
  // console.log('person:')
  // console.log(person)
  // if (person != null) {
  //   console.log('ouderUrl:')
  //   console.log(person._links.ouders[0].href)
  // }
  // //foreach parent, move to return code?
  // var { data: parent } = useGet({
  //   path: "gateways/brp/ingeschrevenpersonen/" + id + "/ouders/" + "1",
  // });
  // console.log('ouder:')
  // console.log(parent)

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box paddingBottom={1}>
      <Box paddingTop={1} paddingBottom={4}>
        <h4>Ouders</h4>
        {/*TODO: create accordian for each parent
        <Accordion expanded={expanded == 'ouder1'} onChange={handleChange('ouder1')} style={{marginBottom: "10px"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}><strong>Naam ouder1</strong></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PersonInfo id={id}/>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'ouder2'} onChange={handleChange('ouder2')} style={{marginBottom: "10px"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}><strong>Naam ouder2</strong></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PersonInfo id={id}/>
          </AccordionDetails>
        </Accordion>*/}
      </Box>
    </Box>
  );
}
