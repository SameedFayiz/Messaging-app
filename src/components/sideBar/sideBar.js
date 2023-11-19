import React from "react";

const SideBar = () => {
  return (
    <section className="flex w-full min-h-full flex-col  justify-between py-10 px-5 bg-cyan-800">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center">1</div>
        <div className="flex justify-center">2</div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex justify-center">3</div>
        <div className="flex justify-center">4</div>
        <div className="flex justify-center">5</div>
      </div>
    </section>
  );
};

export default SideBar;
