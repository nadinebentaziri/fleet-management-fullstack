import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetGeographyQuery } from "state/api";
import Header from "components/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "state/geoData";

const Geography = () => {
  const theme = useTheme();
  const { data } = useGetGeographyQuery();

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="À propos de nous"
        subtitle="L'équipe d'Intercom Technologie."
      />
      <Box
        mt="40px"
        height="75vh"
        borderRadius="10px"
        style={{ fontSize: "20px" }} // Add this line to increase the text size
      >
        {data ? (
          <ResponsiveChoropleth
            // Rest of your code...
          />
        ) : (
          <Box p="1rem"> {/* Add a Box container for the text */}
            <p style={{ fontSize: "20px" }}>Bienvenue sur le site web d'Intercom Technologie !</p>
            <p style={{ fontSize: "14px" }}>
            Bienvenue sur le site web d'Intercom Technologie !

Fondée en 2005, INTERCOM TECHNOLOGIES est une société de services en informatique et télécommunications basée en France, avec une présence à l'étranger. Forte de plus de 17 ans d'expérience, notre entreprise possède une vision à long terme et une expertise reconnue dans le domaine.

Nous intervenons tant au niveau national qu'international, et travaillons dans des secteurs très variés, tels que la télécommunication et multimédia, les systèmes d'information, les réseaux et la sécurité, les systèmes électroniques et l'expertise en énergie. Notre objectif est d'offrir à nos clients des solutions complètes et innovantes qui répondent à leurs besoins spécifiques.

Chez Intercom Technologie, nous sommes fiers de notre équipe de managers et d'experts qualifiés qui accompagnent nos clients dans la réalisation de leurs projets. Nous nous engageons à fournir des solutions d'optimisation de projets qui permettent à nos clients d'atteindre leurs objectifs de manière efficace et rentable.

Nous avons également la chance de bénéficier de la confiance de grands comptes européens, ce qui témoigne de la qualité de nos services et de notre engagement envers l'excellence.

En tant qu'entreprise, nous sommes résolument tournés vers l'avenir. Nous sommes constamment à l'affût des dernières avancées technologiques et nous investissons dans la formation continue de notre équipe pour rester à la pointe de l'innovation.

Nous sommes impatients de collaborer avec vous et de vous aider à concrétiser vos projets. N'hésitez pas à nous contacter pour en savoir plus sur nos services et découvrir comment nous pouvons répondre à vos besoins en matière de technologie et de télécommunications.

L'équipe d'Intercom Technologie
            </p>
            {/* Rest of your text */}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Geography;

