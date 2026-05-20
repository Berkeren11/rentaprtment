import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import ApartmentDetail from "./ApartmentDetail"

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          RentAprtment
        </h1>

        <p className="text-zinc-400 mt-4">
          Istanbul Luxury Stays
        </p>

        <a
          href="/apartment"
          className="inline-block mt-10 bg-yellow-500 text-black px-8 py-4 rounded-2xl font-semibold"
        >
          View Apartment
        </a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/apartment"
          element={<ApartmentDetail />}
        />
      </Routes>
    </BrowserRouter>
  )
}