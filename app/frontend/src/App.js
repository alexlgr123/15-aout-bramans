import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "@/pages/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
            <Toaster
                position="top-center"
                richColors
                toastOptions={{
                    style: {
                        fontFamily: "Figtree, sans-serif",
                    },
                }}
            />
        </div>
    );
}

export default App;