import React, { useState } from "react";

export default function SelectComponent() {
  const [departmentValue, setDepartmentValue] = useState(null);
  const departments = [
    {
      id: 1,
      name: "Phòng đào tạo",
    },
    {
      id: 2,
      name: "Phòng đào tạo",
    },
    {
      id: 3,
      name: "Phòng kế toán",
    },
  ];
  return (
    <div>
      <select
        value={departmentValue}
        onChange={(e) => setDepartmentValue(+e.target.value)}
      >
        {departments.map((department) => (
          <option value={department.id}>{department.name}</option>
        ))}
      </select>
      <button onClick={() => setDepartmentValue("123")}>Change state</button>
    </div>
  );
}
