import { DashboardLayout } from "../Layout";
import ContentlLeft from "./Trainewfeed/ContentlLeft";
import './trangnewfeed.css';
const Trangnewfeed = () => {
    return (
        <>
        <DashboardLayout>
         <div className="newfeed">
            <div className="trainewfeed">
                <ContentlLeft />
            </div>
            <div className="giuanewfeed"></div>
            <div className="phainewfeed"></div>
         </div>
        </DashboardLayout>
        </>
    )
}

export default Trangnewfeed