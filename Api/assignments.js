const express = require("express");
const router = express.Router();
const Forecast = require("forecast-api");

const forecast = new Forecast({
  accountId: "913094",
  authorization:
    "Bearer 1561990.pt.cxklXqH8_5fDV6iHxVg_bOQFXZ2aQosmCVA-K5MC8v3svRMk8MMidOPXMOpH_Ej6_Lgl_EwtpsT8j7FdULeA-g"
});

router.get("/", (req, res) => {
  forecast.assignments((err, assignments) => {
    if (err) throw err;
    // console.log(projects);
    res.send(assignments);
  });
});

module.exports = router;
