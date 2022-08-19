import ReactLoading from "react-loading";
import { LoadingScreen } from "./style";

export default function Loading() {
    return (
        <LoadingScreen>
            <ReactLoading delay='0s' height='10%' width='10%' type="spinningBubbles" color="#ffffff" />
        </LoadingScreen>
    );
}