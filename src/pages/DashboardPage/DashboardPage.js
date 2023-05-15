import "./DashboardPage.scss";
import WakaCodingActivity from "../../components/WakaCodingActivity/WakaCodingActivity";
import WakaLanguages from "../../components/WakaLanguages/WakaLanguages";
import WakaStats from "../../components/WakaStats/WakaStats";

function DashboardPage({ wakaProjects, wakaCodingActivity, wakaLanguages, wakaStats }) {
    return (
        <div className="dashboard">
            <div className="dashboard__container">
                <div className="dashboard__subcontainer">
                    <WakaCodingActivity wakaCodingActivity={wakaCodingActivity} />
                    <WakaLanguages wakaLanguages={wakaLanguages} />
                </div>
                <div className="dashboard__second-subcontainer">
                    <WakaStats wakaStats={wakaStats} />
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;