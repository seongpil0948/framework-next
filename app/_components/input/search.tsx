"use client";
import { toast } from "react-toastify";
import InputTag from "./input-tag";

export function SearchPostBar() {
  const handleSearch = (tags: string[]) => {
    toast("🦄 Wow so easy! " + tags.join(", "), {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return <InputTag onSearch={handleSearch} labelPlacement="outside" />;
}
