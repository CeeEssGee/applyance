// updated for Applyances
import { Route, Routes } from "react-router-dom"
import './Applyances.css';
import { Authorized } from "./components/views/Authorized"
import { Register } from "./components/auth/Register";
import { ApplicationViews } from "./components/views/ApplicationViews";
import { Login } from "./components/auth/Login";
import { NavBar } from "./components/nav/NavBar";


export const Applyances = () => {



	return <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
					<NavBar />
					<ApplicationViews />
			
				</>
			</Authorized>
			

		} />
	</Routes>
}

