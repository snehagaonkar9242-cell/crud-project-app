import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddStudent({ onAdd, students = [], setStudents }: any) {
  const navigate = useNavigate();
  const { index } = useParams();

  const isEdit = index !== undefined && students?.[Number(index)];

  const [form, setForm] = useState({
    name: "",
    age: "",
    course: "",
    year: ""
  });

  // Prefill form safely
  useEffect(() => {
    if (isEdit) {
      const student = students?.[Number(index)];
      if (student) {
        setForm({
          name: student.name || "",
          age: String(student.age || ""),
          course: student.course || "",
          year: String(student.year || "")
        });
      }
    }
  }, [index, students, isEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.age || !form.course || !form.year) {
      alert("Please fill all fields");
      return;
    }

    const newStudent = {
      name: form.name,
      age: Number(form.age),
      course: form.course,
      year: Number(form.year)
    };

    if (isEdit && setStudents) {
      const updated = [...students];
      updated[Number(index)] = newStudent;
      setStudents(updated);
    } else {
      onAdd && onAdd(newStudent);
    }

    navigate("/");
  };

  return (
    <div className="page">
      <div className="dashboard-box">
        <h2>{isEdit ? "Edit Student" : "Registration Form"}</h2>

        <form onSubmit={handleSubmit} className="form">
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

          <button type="submit">
            {isEdit ? "Update Student" : "Add Student"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;