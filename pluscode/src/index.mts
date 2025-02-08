import Pluscodes from "npm:pluscodes@^2.6.0";

const coords = {
  latitude: parseFloat(latitude),
  longitude: parseFloat(longitude)
}

setLocal("pluscode", Pluscodes.encode(coords));
exit();
