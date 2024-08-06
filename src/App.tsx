import { Route, Routes } from "react-router-dom";

import { AddressForm } from "./pages/AddressForm";
import { PersonalInfoForm } from "./pages/PersonalInfoForm";
import { LoanParametersForm } from "./pages/LoanParametersForm";

import { Layout } from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PersonalInfoForm />} />
        <Route path="address" element={<AddressForm />} />
        <Route path="loan-parameters" element={<LoanParametersForm />} />
      </Route>
    </Routes>
  );
}

export default App;
