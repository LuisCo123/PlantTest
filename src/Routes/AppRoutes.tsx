import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { CreateTest } from "../Pages/CreateFlux/CreateTest";
import { MetodoIncrustacao } from "../Pages/Parametrizacao/MetodoIncrustacao";
export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/CreateTest" Component={CreateTest} />
                <Route path="/MetodoIncrustacao" Component={MetodoIncrustacao} />
            </Routes>
        </BrowserRouter>
    )
}