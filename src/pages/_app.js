// pages/_app.js
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css"; // Global styles for Tailwind and custom CSS
import { Container } from "@mui/material";
import CustomTheme from "../shared-theme/AppTheme";
import Head from "next/head"; // Importing Head from next/head

// Create your custom theme for MUI
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Custom primary color
    },
    secondary: {
      main: "#9c27b0", // Custom secondary color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CustomTheme {...pageProps}>
        {/* Metadata in the <Head> component */}
        <Head>
          <title>Cybill Nerd | Innovative IT & Web3 Solutions</title>
          <meta
            name="description"
            content="Cybill Nerd is a leading IT solutions provider specializing in Web3, blockchain, software development, SEO, and digital transformation."
          />
          <meta
            name="keywords"
            content="IT solutions, Web3 development, blockchain, freelance platform, software development, digital marketing, SEO, cybersecurity"
          />
          <meta name="author" content="Cybill Nerd" />
          <link rel="icon" href="/logo.svg" />
          <link rel="apple-touch-icon" href="/logo.svg" />
        </Head>

        <CssBaseline enableColorScheme />
        <Container maxWidth="lg">
          <Component {...pageProps} />
        </Container>
      </CustomTheme>
    </ThemeProvider>
  );
}
