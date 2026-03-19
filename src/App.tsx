import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ItemManager from "./components/ItemManager";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState<any[]>([]);

  const handleAdd = (student: any) => {
    setStudents((prev) => [...prev, student]);
  };

  const handleDelete = (index: number) => {
    setStudents((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ItemManager
            students={students}
            onDelete={handleDelete}
          />
        }
      />
      <Route
        path="/add"
        element={<AddStudent onAdd={handleAdd} />}
      />
      <Route
        path="/add/:index"
        element={<AddStudent students={students} setStudents={setStudents} />}
      />
    </Routes>
  );
}

export default App;