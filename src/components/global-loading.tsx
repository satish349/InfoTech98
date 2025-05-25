"use client";

import { useLoading } from "@/app/providers/loading-provider";

export default function GlobalLoading() {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-slate-800 bg-opacity-100 flex items-center justify-center z-50">
      <div className="h-12 w-12 border-4 border-t-transparent border-gray-900 rounded-full border-white animate-spin" />
    </div>
  );
}
