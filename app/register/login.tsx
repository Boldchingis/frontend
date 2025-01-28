
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft  } from 'lucide-react';
export default function Login() {
  return (
    <div className="bg-white text-white flex justify-center items-center h-screen">
      <div className="w-full max-w-md px-4">
        <Link href={"/"}>  <button className="flex items-center justify-center rounded-[8px] p-2 text-black bg-white border border-gray-300 hover:bg-gray-100 active:shadow-inner w-8">
      <ChevronLeft className="w-4 h-4" />
    </button> </Link>
    
       
        <h2 className=" leading-8  text-black text-2xl font-semibold ">Log in</h2>
        <p className="text-center mb-6 text-gray-400">
          Log in to enjoy your favorite dishes.
        </p>
        <div className="space-y-4">
          <Input placeholder="Enter your email address" className=" text-gray-500 border border-gray-700" />
          <Input placeholder="Password" type="password" className=" text-gray-500 border border-gray-700" />
          <a href="/register/reset" className="text-sm text-gray-400 hover:underline block">
            Forgot password?
          </a>
        </div>
        <Button className="w-full bg-white border text-black mt-6 hover:bg-black hover:text-white shadow-none">
          Let's Go
        </Button>
        <p className="text-center text-sm text-gray-400 mt-4">
          Don’t have an account?
          <Link href="/register/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
