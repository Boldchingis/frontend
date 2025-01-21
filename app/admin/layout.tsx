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
        <SignInButton />
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
