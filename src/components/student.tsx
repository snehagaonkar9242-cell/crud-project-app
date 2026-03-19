import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentPage({ onAdd }: any) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    course: "",
    year: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.age || !form.course || !form.year) {
      alert("Please fill all fields");
      return;
    }

    onAdd({
      name: form.name,
      age: Number(form.age),
      course: form.course,
      year: Number(form.year)
    });

    navigate("/"); // redirect to dashboard
  };

  return (
    <div className="page">
      <div className="dashboard-box">
        <h2 className="title">Add Student</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
          />
          <input
            name="course"
            placeholder="Course"
            value={form.course}
            onChange={handleChange}
          />
          <input
            name="year"
            placeholder="Year"
            value={form.year}
            onChange={handleChange}
          />
          <div className="btn-center">
  <button type="submit" className="submit-btn">
    Add Student
  </button>
</div>
        </form>
      </div>
    </div>
  );
}

export default StudentPage;