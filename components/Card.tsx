import React from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface Props {
  name: string;
  region: string;
  population: number;
  flag: string;
  capital: string;
}

const Card = ({ name, region, population, flag, capital }: Props) => {
  return (
    <MuiCard sx={{ width: "20vw", marginBottom: "2rem" }}>
      <CardMedia sx={{ height: "15vh" }} image={flag} title="green iguana" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: "1rem", fontWeight: 700 }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Population:</b> {population}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Region:</b> {region}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Capital:</b> {capital}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
