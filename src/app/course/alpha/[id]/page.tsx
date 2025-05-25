// /alpha/[id]/page.tsx
import React from "react";
import Alpha from "./comp"; // adjust the path based on your folder structure

const DeltaPage = async ({ params }: {params: Promise<{id: number}>}) => {
  const id = Number((await params).id); // dynamic route param

  console.log("Route ID:", id);

  if (!id) return <div className="text-white text-center">Missing ID</div>;

  return (
    <>
      <Alpha id={id} />
    </>
  );
};

export default DeltaPage;
