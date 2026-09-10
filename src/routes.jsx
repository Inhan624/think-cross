import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./admin/pages";
import Event from "./admin/pages/event";
import Inquiry from "./inquiry";
import State from "./admin/pages/state";
import Login from "./admin/pages/login";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<Index />} />
                <Route path="/state" element={<State />} />
                <Route path="/event" element={<Event />} />
                <Route path="/inquiry" element={<Inquiry />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;