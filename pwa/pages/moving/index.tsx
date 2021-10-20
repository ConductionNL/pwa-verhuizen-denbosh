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
import {useUserContext} from "../../components/context/userContext";
import {useRouter} from "next/router";
import {createRequest} from "../../components/utility/RequestHandler";
import LoginScreen from "../../components/moving/loginScreen";

function Index() {

  const title = 'Gemeente \'s-Hertogenbosch | Verhuizing doorgeven';

  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const context = useAppContext();
  let userContext = useUserContext();

  return <>
    <Layout title={title} description="waar kan ik deze description zien">
      <LoginScreen />
    </Layout>

  </>
}

export default Index
