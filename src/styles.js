import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00A86B",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: ["Inter", "Roboto", "Helvetica", "Arial", "sans-serif"],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "2rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  // Header Styles
  header: {
    background: "linear-gradient(135deg, #00A86B 0%, #00D4AA 100%)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 70,
  },
  logo: {
    fontWeight: 700,
    color: "white",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "transform 0.3s ease",
    },
  },
  headerActions: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  headerButton: {
    color: "white",
    borderRadius: 25,
    padding: "8px 16px",
    textTransform: "none",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transform: "translateY(-2px)",
      transition: "all 0.3s ease",
    },
  },
  themeToggle: {
    color: "white",
    borderRadius: 25,
    padding: "8px 16px",
    textTransform: "none",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transform: "translateY(-2px)",
      transition: "all 0.3s ease",
    },
  },

  // Hero Section
  heroSection: {
    background: "linear-gradient(135deg, #00A86B 0%, #00D4AA 100%)",
    padding: theme.spacing(8, 0),
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"50\" cy=\"50\" r=\"1\" fill=\"rgba(255,255,255,0.1)\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>')",
      opacity: 0.3,
    },
  },
  heroContent: {
    textAlign: "center",
    color: "white",
    position: "relative",
    zIndex: 1,
  },
  heroTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    textShadow: "0 4px 8px rgba(0,0,0,0.3)",
    background: "linear-gradient(45deg, #fff, #f0f0f0)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  heroSubtitle: {
    fontWeight: 400,
    marginBottom: theme.spacing(3),
    opacity: 0.9,
    textShadow: "0 2px 4px rgba(0,0,0,0.2)",
  },
  heroDescription: {
    fontSize: "1.1rem",
    opacity: 0.8,
    maxWidth: 600,
    margin: "0 auto",
    lineHeight: 1.6,
  },

  // Filters Section
  filtersSection: {
    marginTop: theme.spacing(-4),
    marginBottom: theme.spacing(4),
    position: "relative",
    zIndex: 2,
  },
  filtersPaper: {
    padding: theme.spacing(3),
    borderRadius: 16,
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.95)",
    [theme.breakpoints.down('md')]: {
      background: "rgba(255,255,255,0.98)",
    },
  },
  categorySelect: {
    "& .MuiOutlinedInput-root": {
      borderRadius: 12,
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.main,
      },
    },
  },
  searchField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: 12,
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.main,
      },
    },
  },
  projectCounter: {
    borderRadius: 20,
    fontWeight: 600,
  },

  // Books Section
  projectsSection: {
    padding: theme.spacing(4, 0),
  },
  
  // Book Card Styles
  bookCard: {
    borderRadius: 16,
    overflow: "hidden",
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    },
  },
  bookCardMedia: {
    height: 450,
    width: "100%",
    objectFit: "cover",
    [theme.breakpoints.down('md')]: {
      height: 300,
    },
  },
  bookCardContent: {
    padding: theme.spacing(3),
    flexGrow: 1,
  },
  bookTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
    lineHeight: 1.3,
    color: theme.palette.text.primary,
    textAlign: "left",
  },
  bookBrief: {
    fontSize: "1.1rem",
    lineHeight: 1.6,
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: "left",
  },
  bookCardActions: {
    padding: theme.spacing(2, 0, 0, 0),
    justifyContent: "flex-start",
    gap: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column",
      alignItems: "stretch",
    },
  },
  buyButton: {
    borderRadius: 25,
    textTransform: "none",
    fontWeight: 600,
    minWidth: 120,
    "&:hover": {
      transform: "translateY(-2px)",
      transition: "transform 0.2s ease",
    },
  },
  previewButton: {
    borderRadius: 25,
    textTransform: "none",
    fontWeight: 600,
    minWidth: 120,
    "&:hover": {
      transform: "translateY(-2px)",
      transition: "transform 0.2s ease",
    },
  },
  comingSoonButton: {
    borderRadius: 25,
    textTransform: "none",
    fontWeight: 600,
    minWidth: 120,
    "&:hover": {
      transform: "none",
    },
  },

  // No Results
  noResults: {
    textAlign: "center",
    padding: theme.spacing(8, 0),
    "& h6": {
      marginBottom: theme.spacing(1),
    },
  },

  // Footer Section
  footerSection: {
    background: "linear-gradient(135deg, #00A86B 0%, #00D4AA 100%)",
    padding: theme.spacing(4, 0),
    marginTop: theme.spacing(6),
  },

  // Scroll to Top Button
  scrollTopButton: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    zIndex: 1000,
    background: "linear-gradient(135deg, #00A86B 0%, #00D4AA 100%)",
    color: "white",
    boxShadow: "0 4px 20px rgba(0, 168, 107, 0.3)",
    "&:hover": {
      background: "linear-gradient(135deg, #00995a 0%, #00c495 100%)",
      transform: "translateY(-2px)",
      boxShadow: "0 6px 25px rgba(0, 168, 107, 0.4)",
    },
    transition: "all 0.3s ease",
  },

  // Responsive Design
  "@media (max-width: 960px)": {
    heroTitle: {
      fontSize: "2.5rem",
    },
    heroSubtitle: {
      fontSize: "1.25rem",
    },
    filtersPaper: {
      padding: theme.spacing(2),
    },
  },
  "@media (max-width: 600px)": {
    toolbar: {
      minHeight: 60,
    },
    logo: {
      fontSize: "1.5rem",
    },
    heroSection: {
      padding: theme.spacing(6, 0),
    },
    heroTitle: {
      fontSize: "2rem",
    },
    heroSubtitle: {
      fontSize: "1.1rem",
    },
    filtersSection: {
      marginTop: theme.spacing(-2),
    },
    filtersPaper: {
      padding: theme.spacing(2),
    },
    bookCard: {
      "&:hover": {
        transform: "none",
      },
    },
    scrollTopButton: {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      width: 48,
      height: 48,
    },
  },

  // Legacy styles for backward compatibility
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
  },
  bigSpace: {
    marginTop: "2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    gap: "1rem",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    "& svg": {
      fontSize: "2rem",
      cursor: "pointer",
      color: theme.palette.primary.main,
    },
  },
  footerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export { theme, useStyles };
