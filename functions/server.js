import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import { getCertificates } from "./MOCK-CERTIFICATES.js";
import { getListings, getListingById, getListingCompare } from "./MOCK-LISTINGS.js";

const app = express();
app.use(cors());

const router = express.Router();

router.get("/certs", (req, res) => {
  res.json(getCertificates());
});

router.get("/listings", (req, res) => {
  const listings = getListings();
  const { id } = req.query;

  // Verificar si hay un ID en los query params
  if (id) {
    const listing = getListingById(Number(id));
    if (listing) {
      res.json(listing);
    } else {
      res.status(404).json({ message: "Listing not found" });
    }
  } else {
    // Si no hay ID, devolver todos los listings
    res.json(listings);
  }
});


router.get("/compare", (req, res) => {
  const ids = req.query.ids;

  // Convierte `ids` a un array de números
  const idsArray = ids ? ids.split(',').map(Number) : [];

  // Obtiene los listings que coinciden con los IDs pasados
  const listingsToCompare = getListingCompare(idsArray);

  res.json(listingsToCompare);
});

// Iniciar servidor en el contexto de Netlify Functions
app.use('/.netlify/functions/server', router);

export const handler = serverless(app);
