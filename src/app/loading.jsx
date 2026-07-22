import { Loader2 } from "lucide-react";
import React from 'react';

const MainLoading = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 text-green-700">
      <Loader2 className="animate-spin" size={28} />
      <p className="font-bold text-xs uppercase tracking-widest">Loading</p>
    </div>
  );
};

export default MainLoading;
