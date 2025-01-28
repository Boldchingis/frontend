import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
export default function Signup() {
  return (
    <div className="bg-white text-white flex justify-center items-center h-screen">
      <div className="w-full max-w-md px-4">
        <Link href={"/"}>
          <button className="flex items-center justify-center rounded-[8px] p-2 text-black bg-white border border-gray-300 mb-4 hover:bg-gray-100 w-8">
            <ChevronLeft className="w-4 h-4" />
          </button>
        </Link>

        <h2 className=" leading-8  text-black text-2xl font-semibold ">
          Create your account
        </h2>
        <p className="text-center mb-6 text-gray-400">
          Sign up to explore your favorite dishes.
        </p>
        <div className="space-y-4">
          <Input
            placeholder="Enter your email address"
            className=" text-gray-500 border border-gray-700"
          />
        </div>
        <Button className="w-full bg-white border text-black mt-6 hover:bg-black hover:text-white shadow-none">
          Let's Go
        </Button>
        <p className="text-center text-sm text-gray-400 mt-4">
          Already have an account?
          <Link href="/register" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
