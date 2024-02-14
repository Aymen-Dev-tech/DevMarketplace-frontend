import Box from "@mui/material/Box";
import { LandingNavbar } from "../components/Landing/LandingNavbar";
import Grid from "@mui/material/Grid";
import { HeroSection } from "../components/Landing/HeroSection";
import { ProjectCategorisSections } from "../components/Landing/ProjectCategoriesSection";
import { DeveloperSection } from "../components/Landing/DeveloperSection";
import { BuyerSection } from "../components/Landing/BuyerSection";
import { CTA } from "../components/Landing/CTA";
import { Footer } from "../components/Landing/Footer";

export default function Landing() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12} sx={{ marginBottom: "5.5rem" }}>
          <LandingNavbar />
        </Grid>
        <Grid item xs={12}>
          <HeroSection />
        </Grid>
        <Grid item xs={12}>
          <ProjectCategorisSections />
        </Grid>
        <Grid item xs={12}>
          <DeveloperSection />
        </Grid>
        <Grid item xs={12}>
          <BuyerSection />
        </Grid>
        <Grid item xs={12}>
          <CTA />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
}
