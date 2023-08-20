"use client";

import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) => {
  // Kalo react fungsional component pake ( ) bukan { } berarti itu return implisit atau tidak perlu pernyataan return tetapi baris hanya boleh 1 saja alias tidak boleh lebih dari 1 baris kalo lebih dari 1 baris harus pake {} dengan return
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
