import { useSelector } from "react-redux";
import { selectServiceId } from "../../features/services/servicesSelector";

export default function useServiceId (){
    return useSelector(selectServiceId);
};