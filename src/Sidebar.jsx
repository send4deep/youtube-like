import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isNavOpen = useSelector((store) => store.app.isNavOpen);
  return !isNavOpen ? null : (
    <div className="w-1/7">
      <ul>
        <li className="font-bold pt-4">Home</li>
        <li className="font-bold pt-4">Shorts</li>
        <li className="font-bold pt-4">Subscriptions</li>
        <li>Subscription 1</li>
        <li>Subscription 2</li>
        <li>Subscription 3</li>
        <li>Subscription 4</li>
        <li>Subscription 5</li>
        <li>Subscription 6</li>
        <li className="font-bold pt-4">History</li>
        <li>History 1</li>
        <li>History 2</li>
        <li>History 3</li>
        <li>History 4</li>
        <li>History 5</li>
        <li>History 6</li>
      </ul>
    </div>
  );
};

export default Sidebar;
