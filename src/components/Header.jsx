import React from "react";
import { FaClipboardList, FaMedal, FaBell, FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-main-gray-100 text-orange-400 shadow-md">
      <div className="container flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="text-xl font-bold hover:border-b-2 hover:border-orange-400 pb-1">
          <img src="/images/logo.svg" alt="logo" className="h-12" />
        </div>

        {/* Menu */}
        <nav className="flex items-center space-x-6 text-lg font-medium">
          <div className="flex items-center space-x-2 hover:text-white cursor-pointer">
            <FaClipboardList />
            <span>自分の記録</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-white cursor-pointer">
            <FaMedal />
            <span>チャレンジ</span>
          </div>
          <div className="flex items-center space-x-2 relative hover:text-white cursor-pointer">
            <FaBell />
            {/* Notification badge */}
            <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
            <span className="ml-4">お知らせ</span>
          </div>
          <div className="hover:text-white cursor-pointer">
            <FaBars />
          </div>
        </nav>
      </div>
    </header>
  );
}
