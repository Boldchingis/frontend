import SideBar from "./category/admin-sidebar";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <SignedOut>
        <div className="h-screen flex items-center justify-center">
          <div className="bg-slate-100 text-black font-[700] items-center flex justify-center w-[100px] h-[50px] rounded-xl">
            <SignInButton />
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton />
        <div className="bg-muted h-screen flex gap-6  ">
          <SideBar />
          {children}
        </div>
      </SignedIn>
    </ClerkProvider>
  );
}
