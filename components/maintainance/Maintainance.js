import Image from "next/image";
import { Typography } from "../material_tailwind_components/MaterialTailwindComponents";

import React from "react";

const Maintainance = () => {
  const date = new Date();
  const current_date =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  return (
    <figure className="relative h-full w-full p-10">
      <Image
        className="h-full w-full rounded-xl object-cover object-center"
        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        alt="nature image"
        width={2000}
        height={2000}
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
            Welcome to the BookStore Admin Dashboard
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
            {current_date}
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray">
          Maintenance Mode
        </Typography>
      </figcaption>
    </figure>
  );
};

export default Maintainance;
