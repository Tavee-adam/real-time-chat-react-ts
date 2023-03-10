import React from "react";
import imgReact from "@/assets/react.svg";

type Props = {};

export default function App({}: Props) {
  return (
    <div>
      <h1 className="text-5xl underline text-red-300">
        {import.meta.env.VITE_APP_NAME}
      </h1>
      <img src={imgReact} alt="" />;
    </div>
  );
}
