import Nav from "../components/nav";
import Badge from "../../shared/badge";

const State = () => {
    return (
        <div>
            <Nav />
            <h1>State</h1>
            <div>
                센서 상태: <Badge $type="success">정상</Badge>
                <Badge $type="warning">정상</Badge>
                <Badge $type="danger">정상</Badge>
                <Badge $type="info">정상</Badge>
            </div>
        </div>
    )
}

export default State;