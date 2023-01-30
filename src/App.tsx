import React from "react";
import imgReact from "./assets/react.svg";

type Props = {};

export default function App({}: Props) {
  return (
    <div className="bg-gray-400">
      <h1 className="text-5xl underline text-red-800">
        {import.meta.env.VITE_APP_NAME}
      </h1>
      <img src={imgReact} alt="" />;
    </div>
  );
}
