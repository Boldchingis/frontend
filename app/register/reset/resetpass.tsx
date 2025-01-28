import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function ResetPassword() {
  return (
    <div className="bg-white text-white flex justify-center items-center h-screen">
      <div className="w-full max-w-md px-4">
        <Link href={"/register/"}>
        <button className="flex items-center justify-center rounded-[8px] p-2 text-black bg-white border border-gray-300 hover:bg-gray-100 active:shadow-inner w-8">
        <ChevronLeft className="w-4 h-4" />
          </button>
        </Link>
        <h2 className="mt-4 text-2xl font-semibold text-white">Reset your password</h2>
        <p className="text-sm text-gray-400 mt-2">
          Enter your email to receive a password reset link.
        </p>
        <div className="space-y-4 mt-6">
          <Input
            placeholder="example@gmail.com"
            className="bg-white text-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <Button className="w-full bg-white border text-black mt-6 hover:bg-black hover:text-white shadow-none">
          Send link
        </Button>
        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an account?
          <Link href="/register/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
