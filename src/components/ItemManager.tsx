import { useNavigate } from "react-router-dom";

function ItemManager({ students = [], onDelete }: any) {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="dashboard-box">
        <h1>Student Dashboard</h1>

        <button
          onClick={() => navigate("/add")}
          className="add-btn"
        >
          + Add Student
        </button>

        <table border={1} cellPadding={10}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan={5}>No data</td>
              </tr>
            ) : (
              students.map((s: any, i: number) => (
                <tr key={i}>
                  <td>{s?.name || "N/A"}</td>
                  <td>{s?.age || "N/A"}</td>
                  <td>{s?.course || "N/A"}</td>
                  <td>{s?.year || "N/A"}</td>
                  <td>
                    <button
                      className="action-btn edit-btn"
                      onClick={() => navigate(`/add/${i}`)}
                    >
                      Edit
                    </button>

                    <button
                      className="action-btn delete-btn"
                      onClick={() => onDelete(i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ItemManager;