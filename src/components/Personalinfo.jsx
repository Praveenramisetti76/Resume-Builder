import React from "react";

export default function PersonalInfo({ data, setData }) {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        className="w-full border p-2 mb-3 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        className="w-full border p-2 mb-3 rounded"
      />
      <input
        type="text"
        placeholder="Phone"
        value={data.phone}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
        className="w-full border p-2 mb-3 rounded"
      />
    </div>
  );
}
