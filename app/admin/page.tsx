"use client";
import { useUser } from "@clerk/nextjs";
import OrderListHome from "./orders/page"
export default function Home() {
  const { user, isLoaded } = useUser();
  if (!isLoaded) return null;
  const isAdmin = user?.publicMetadata.role === 'admin';
  return (
    <div>  
      <div>{user?.fullName}</div>
  {
    isAdmin ? <div>
      <OrderListHome/>
    </div> : <div>admin bish bol haragdahguie kke</div>
  }
    
    </div>
  );
}
