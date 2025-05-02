// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

//
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Shepherd",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://shepherd-pet.ru/presentation" },
        {
          name: "freebies",
          href: "https://shepherd-pet.ru/templates/free",
        },
        {
          name: "premium tools",
          href: "https://shepherd-pet.ru/templates/premium",
        },
        { name: "blog", href: "https://shepherd-pet.ru/blog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "https://iradesign.io/" },
        { name: "bits & snippets", href: "https://shepherd-pet.ru/bits" },
        {
          name: "affiliate program",
          href: "https://shepherd-pet.ru/affiliates/new",
        },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://shepherd-pet.ru/contact-us" },
        {
          name: "knowledge center",
          href: "https://shepherd-pet.ru/knowledge-center",
        },
        {
          name: "custom development",
          href: "https://services.creative-tim.com/",
        },
        {
          name: "sponsorships",
          href: "https://shepherd-pet.ru/sponsorships",
        },
      ],
    },
    {
      name: "legal",
      items: [
        {
          name: "terms & conditions",
          href: "https://shepherd-pet.ru/terms",
        },
        {
          name: "privacy policy",
          href: "https://shepherd-pet.ru/privacy",
        },
        {
          name: "licenses (EULA)",
          href: "https://shepherd-pet.ru/license",
        },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Kubtel by{" "}
      <MKTypography
        component="a"
        href="https://shepherd-pet.ru/"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Kubtel
      </MKTypography>
      .
    </MKTypography>
  ),
};
