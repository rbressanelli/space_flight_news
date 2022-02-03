import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

import { HomeFooter } from "./styles";
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <HomeFooter>
      <div>
        <ul>
          <li>Obtenha as últimas notícias sobre voos espaciais.</li>
          <li>Novas informações publicadas diariamente.</li>
          <li>Fotos, dados e links para as fontes originais.</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Informações:</li>
          <li>Autor: Roberto Bressanelli</li>
        </ul>
        <div>
          <span>
            <Link
              href="https://github.com/rbressanelli/space_flight_news"
              target="_blank"
              rel='"noreferrer"'
            >
              <GitHubIcon />
            </Link>
          </span>
          <span>
          <Link
              href="https://www.linkedin.com/in/robertobressanelli/"
              target="_blank"
              rel='"noreferrer"'
            >
              <LinkedInIcon />
            </Link>
            
          </span>
          <span>
          <Link
              href="https://www.facebook.com/roberto.bressanelli/"
              target="_blank"
              rel='"noreferrer"'
            >
              <FacebookIcon />
            </Link>
            
          </span>
        </div>
      </div>
    </HomeFooter>
  );
};

export default Footer;
