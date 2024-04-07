import { ReactNode, Suspense } from "react";
import Profile from "@/components/profile";
import Nav from "@/components/nav";
import Web3Provider from "@/components/Web3Provider";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Web3Provider>
            <Profile />
          </Web3Provider>
        </Suspense>
      </Nav>
      <div className="min-h-screen sm:pl-60 dark:bg-black">{children}</div>
    </div>
  );
}
