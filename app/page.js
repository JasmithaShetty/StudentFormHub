"use client";
import { useState, useEffect } from "react";
import { supabase } from "./lib/supabase";
import Link from "next/link";
import { Eye, UserPlus } from "lucide-react";

export default function Home() {
  const [studentList, setStudentList] = useState([]);
  const [showStudents, setShowStudents] = useState(false);

  useEffect(() => {
    if (showStudents) {
      loadStudentList();
    }
  }, [showStudents]);

  async function loadStudentList() {
    const { data, error } = await supabase.from("Student").select();
    if (error) {
      alert(JSON.stringify(error));
    } else {
      setStudentList(data);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="w-full max-w-4xl flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold text-blue-400 mb-4 sm:mb-8 mt-3">
        Welcome to StudentHub
      </h1>

        {!showStudents && (
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              onClick={() => setShowStudents(true)}
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all"
            >
              <Eye size={20} />
              View Students
            </button>

            <Link href="/students/create">
              <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all">
                <UserPlus size={20} />
                Add Student
              </button>
            </Link>
          </div>
        )}

        {showStudents && (
          <>
            <h2 className="text-2xl font-semibold text-purple-300 my-2">
              Student List
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full px-2">
              {studentList.map((stud, index) => (
                <div
                  key={index}
                  className="border border-gray-700 rounded-xl bg-gray-900 p-5 shadow-lg transition hover:scale-[1.02]"
                >
                  <h2 className="text-xl font-semibold text-pink-400">{stud.name}</h2>
                  <p className="text-sm text-gray-300"><strong>USN:</strong> {stud.usn}</p>
                  <p className="text-sm text-gray-300"><strong>Email:</strong> {stud.email}</p>
                  <p className="text-sm text-gray-300"><strong>Phone:</strong> {stud.phone}</p>
                  <p className="text-sm text-gray-300"><strong>Address:</strong> {stud.addr}</p>
                  <p className="text-sm text-gray-300"><strong>Age:</strong> {stud.age}</p>
                  <p className="text-sm text-gray-300"><strong>Gender:</strong> {stud.gender}</p>
                </div>
              ))}
            </div>

            <Link href="/students/create">
              <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium px-6 py-3 rounded-xl mt-8 shadow-md transition-all">
                <UserPlus size={20} />
                Add Student
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
