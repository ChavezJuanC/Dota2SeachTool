import About from "./assets/main_routes/About";
import Home from "./assets/main_routes/Home";
import PlayerProfile from "./assets/main_routes/PlayerProfile";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            {/* Navigation */}
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/player-profile/:id"
                        element={<PlayerProfile />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
