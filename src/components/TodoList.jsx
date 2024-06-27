import React, { useState } from "react";

export default function TodoList() {
  const [jobs, setJobs] = useState(() => {
    const jobLocal = JSON.parse(localStorage.getItem("jobs")) || [];

    return jobLocal;
  });
  const [inputValue, setInputValue] = useState("");

  const handleAddJob = () => {
    const job = {
      id: Math.ceil(Math.random() * 100000),
      name: inputValue,
      status: false,
    };

    const newJobs = [...jobs, job];

    // // Push công việc vào trong mảng
    setJobs(newJobs);

    localStorage.setItem("jobs", JSON.stringify(newJobs));

    setInputValue("");
  };

  /**
   * Hàm xóa công việc theo id
   * @param {*} id Id cần xóa
   */
  const handleDelete = (id) => {
    // Lọc ra những id khác với id cần xóa
    const filterJobs = jobs.filter((job) => job.id !== id);

    // Lưu dữ liệu lên localStorage
    localStorage.setItem("jobs", JSON.stringify(filterJobs));

    // Cập nhật lại state để component re-render
    setJobs(filterJobs);
  };

  /**
   * Hàm cập nhật trạng thái công việc
   * @param {*} id Id cần cập nhật
   */
  const handleUpdateStatus = (id) => {
    // Vị trí phần tử cần cập nhật
    const findIndexJob = jobs.findIndex((job) => job.id === id);

    jobs[findIndexJob].status = !jobs[findIndexJob].status;

    // Lưu dữ liệu lên localStorage
    localStorage.setItem("jobs", JSON.stringify(jobs));

    const newJobs = [...jobs];

    // Cập nhật lại state để component re-render
    setJobs(newJobs);
  };

  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
        />
        <button onClick={handleAddJob}>Add</button>
      </div>

      <ul>
        {jobs.map((job) => (
          <li key={job.id} style={{ display: "flex", gap: 20 }}>
            <input
              checked={job.status}
              type="checkbox"
              onChange={() => handleUpdateStatus(job.id)}
            />
            {job.status ? <s>{job.name}</s> : <span>{job.name}</span>}

            <span onClick={() => handleDelete(job.id)}>Xóa</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
