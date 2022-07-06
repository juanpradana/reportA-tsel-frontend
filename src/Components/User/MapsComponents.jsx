import MapsOut from "../../Components/User/MapsOut"
import { useLoadScript } from "@react-google-maps/api"
import config from "../../config"

const MapsComponents = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: config.apiKeyGoogle // Add your API key
  });
  return isLoaded ? <MapsOut /> : null
}

export default MapsComponents