import { useState } from "react";
import axios from "axios";

function SubmissionForm() {
  const [apparel, setApparel] = useState({
    type: "",
    condition: "",
    purpose: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/apparel",
        apparel
      );
      alert("Submission successful!");
    } catch (error) {
      console.error(error);
      alert("Failed to submit.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Apparel Type:</label>
      <input
        type="text"
        value={apparel.type}
        onChange={(e) => setApparel({ ...apparel, type: e.target.value })}
      />
      <label>Condition:</label>
      <select
        value={apparel.condition}
        onChange={(e) => setApparel({ ...apparel, condition: e.target.value })}
      >
        <option value="new">New</option>
        <option value="gently_used">Gently Used</option>
        <option value="worn_out">Worn Out</option>
      </select>
      <label>Purpose:</label>
      <select
        value={apparel.purpose}
        onChange={(e) => setApparel({ ...apparel, purpose: e.target.value })}
      >
        <option value="donation">Donation</option>
        <option value="recycling">Recycling</option>
        <option value="disposal">Disposal</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SubmissionForm;
