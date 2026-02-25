"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button 
      onClick={() => signOut({ callbackUrl: '/' })}
      className="w-full text-center px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
    >
      Sign Out
    </button>
  );
}
