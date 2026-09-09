import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./admin/pages";
import Event from "./admin/pages/event";
import Inquiry from "./admin/pages/inquiry";
import Led from "./admin/pages/led";
import Locate from "./admin/pages/location";
import Login from "./admin/pages/login";
import Sensor from "./admin/pages/sensor";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<Index />} />
                <Route path="/sensor" element={<Sensor />} />
                <Route path="/led" element={<Led />} />
                <Route path="/event" element={<Event />} />
                <Route path="/locate" element={<Locate />} />
                <Route path="/inquiry" element={<Inquiry />} />
                <Route path="/login" element={<Login />} />

                
            </Routes>
        </BrowserRouter>
    );
};

export default Router;