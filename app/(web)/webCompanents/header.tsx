import Link from "next/link";
import { User } from "lucide-react";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { OrderSheet } from "../OrderSheet";
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
      setIsOpen(true);
    };
    return(
        <div className="w-[full] inset-0 h-[68px] bg-[#18181B] flex items-center justify-between sticky z-10  ">
                <Link href={"/admin/"}>
                  <img className="w-[146px] h-[44px] ml-16 " src="homelogo.png" />
                </Link>
                <div className="text-white flex  mr-16 gap-4 ">
                  <div>
                    <button onClick={handleOpen}>
                      <ShoppingCart />
                    </button>
                    <OrderSheet isOpen={isOpen} setIsOpen={setIsOpen} />
                  </div>
        
                  <Link href={"/register/"}>
                    <User />
                  </Link>
                </div>
              </div>
    )
}