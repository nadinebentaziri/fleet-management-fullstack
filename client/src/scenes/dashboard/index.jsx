import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import { Email, PointOfSale, PersonAdd, Traffic } from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import BreakdownChart from "components/BreakdownChart";
import OverviewChart from "components/OverviewChart";
import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./style.css";
const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data, isLoading } = useGetDashboardQuery();
  const [open, setOpen] = React.useState(false);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    
  ];
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const renderCreateReportModal = () => {
    return (
      <div>
        <Modal open={open} onClose={handleClose}>
          <Box sx={{ width: 800 }} className="createReport">
            <h2 id="parent-modal-title">Create Report</h2>
            <form className="reportForum">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <textarea placeholder="write report description here"></textarea>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive report  via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2"></Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Modal>
      </div>
    );
  };
  return <>
<div className="container-dashboard">
    <Box m="5rem 3rem 2rem 7.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Bienvenue sur Flotty : L'application pour suivre en temps réel le tableau de bord de votre parc automobile" />
      </FlexBetween>
      <iframe style={{borderRadius: "10px"}} title="DB parc automobile" width="1141" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=59a3411e-9fba-42f4-928f-723ae00dc7bb&autoAuth=true&ctid=1158e2d5-dc24-41ad-abce-62841076dbde" frameborder="0" allowFullScreen="true"></iframe>
    </Box>
    </div>
  </>
};

export default Dashboard;
