import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, IconButton } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  footer: {
    color: 'white',
    textAlign: 'center',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  socialIcon: {
    color: 'white',
    fontSize: '2rem',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px) scale(1.1)',
      color: theme.palette.primary.main,
    },
  },
  footerText: {
    opacity: 0.8,
    fontSize: '0.9rem',
    '& a': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  divider: {
    width: '50px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
    margin: theme.spacing(2, 'auto'),
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Box className={classes.socialLinks}>
        <IconButton
          href="https://twitter.com/jpromanonet"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.socialIcon}
          aria-label="Twitter"
        >
          <TwitterIcon style={{ fill: "#1DA1F2" }} />
        </IconButton>
        <IconButton
          href="https://instagram.com/jpromanonet"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.socialIcon}
          aria-label="Instagram"
        >
          <InstagramIcon style={{ fill: "#C13584" }} />
        </IconButton>
        <IconButton
          href="https://github.com/jpromanonet"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.socialIcon}
          aria-label="GitHub"
        >
          <GitHubIcon style={{ fill: "#333" }} />
        </IconButton>
        <IconButton
          href="https://linkedin.com/in/jpromanonet"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.socialIcon}
          aria-label="LinkedIn"
        >
          <LinkedInIcon style={{ fill: "#0077B5" }} />
        </IconButton>
        <IconButton
          href="mailto:contact@jpromanonet.net"
          className={classes.socialIcon}
          aria-label="Email"
        >
          <EmailIcon style={{ fill: "#EA4335" }} />
        </IconButton>
      </Box>
      
      <Box className={classes.divider} />
      
      <Typography variant="body2" className={classes.footerText}>
        © 2025 Juan P. Romano. Built with ❤️.
      </Typography>
    </Box>
  );
}

export default Footer;
