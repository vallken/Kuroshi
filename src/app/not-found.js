"use client";

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen min-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center flex-col p-4">
        <FileSearch size={44} className="text-color-accent" />
        <h3 className="text-color-accent text-4xl font-bold ">NOT FOUND</h3>
        <Link href="/" className="underline text-color-primary hover:text-color-accent">
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default Page;
