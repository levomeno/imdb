import React from "react";
import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center">
      {/* <img className="h-96" src="spinner.svg" alt="loading..." /> */}
      <Image src="spinner.svg" height={500} width={500} alt="loading..." />
    </div>
  );
}
