"use client"

import React from "react"
import useStore from "@/app/stores/studentStore"

export default function ProfilePage() {
    const {activeStudent} = useStore();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
            <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">Student Profile</h1>
            <div className="space-y-2 text-gray-700">
            <p><span className="font-semibold">Name:</span>{activeStudent.name}</p>
            <p><span className="font-semibold">Email:</span>{activeStudent.email}</p>
            <p><span className="font-semibold">USN:</span>{activeStudent.usn}</p>
            <p><span className="font-semibold">Phone:</span>{activeStudent.phone}</p>
            </div>
            </div>
        </div>
    )
}