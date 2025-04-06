"use client";

import React, { useState } from "react";
import { User2Icon, Share } from "lucide-react";
import { supabase } from "@/app/lib/supabase";
import useStore from "@/app/stores/studentStore";
import { useRouter } from "next/navigation";
import InputField from "@/app/components/InputField";

export default function CreateStudent() {
  const router = useRouter();
  const { setActiveStudent } = useStore();

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [usn, setUsn] = useState("");

  const handleSubmit = async () => {
    if (!usn || !name || !email || !age || !address || !phone || !gender) {
      alert("All fields are mandatory");
      return;
    }

    try {
      const { data, error } = await supabase.from("Student").insert({
        name,
        usn,
        phone,
        email,
        addr: address,
        age,
        gender,
      }).select();

      if (error) throw error;

      alert(`Student Profile Created\n${JSON.stringify(data)}`);
      setActiveStudent(data[0]);
      router.push("/students/Profile");
    } catch (e) {
      alert(`Error: ${JSON.stringify(e)}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-8">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-2xl shadow-2xl text-white">
        <div className="flex items-center justify-center gap-2 mb-6">
          <User2Icon size={28} className="text-green-500" />
          <h1 className="text-3xl font-bold text-green-400">Create Student</h1>
        </div>

        <div className="space-y-4">
          <InputField
            type="text"
            value={name}
            placeholder="Student Name"
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            type="text"
            value={usn}
            placeholder="Student USN"
            onChange={(e) => setUsn(e.target.value)}
          />
          <InputField
            type="number"
            value={age}
            placeholder="Student Age"
            onChange={(e) => setAge(e.target.value)}
          />
          <InputField
            type="email"
            value={email}
            placeholder="Student Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="text"
            value={address}
            placeholder="Student Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <InputField
            type="text"
            value={phone}
            placeholder="Student Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <InputField
            type="text"
            value={gender}
            placeholder="Student Gender"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
        >
          Create Profile
          <Share size={20} />
        </button>
      </div>
    </div>
  );
}
