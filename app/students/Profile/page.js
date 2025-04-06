"use client"

import React from "react"
import useStore from "@/app/stores/studentStore"

export default function ProfilePage() {
  const { activeStudent } = useStore();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6">
        <h1 className="text-3xl font-extrabold text-center text-green-700 mb-6">🎓 Student Profile</h1>

        <div className="space-y-4 text-gray-800 text-base leading-relaxed">
          <p>
            <span className="font-semibold text-gray-600">👤 Name:</span>{" "}
            <span className="ml-1">{activeStudent.name}</span>
          </p>
          <p>
            <span className="font-semibold text-gray-600">📧 Email:</span>{" "}
            <span className="ml-1">{activeStudent.email}</span>
          </p>
          <p>
            <span className="font-semibold text-gray-600">🆔 USN:</span>{" "}
            <span className="ml-1">{activeStudent.usn}</span>
          </p>
          <p>
            <span className="font-semibold text-gray-600">📱 Phone:</span>{" "}
            <span className="ml-1">{activeStudent.phone}</span>
          </p>
        </div>
      </div>
    </div>
  );
}