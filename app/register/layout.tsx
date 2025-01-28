
import React from "react";

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white w-full  h-screen flex gap-6 justify-around items-center">
      {children}
      <img className="w-[856px] h-[904px]  object-contain rounded-2xl" src="https://s3-alpha-sig.figma.com/img/5d86/e6a2/488bb31d983ecd581caec983f3a32842?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aBmPpkPozYbEn2w953B7oRNlNN4YZFR-Q8eGMhZp6F~FAZbx07xQU2ZLvsWFpJ9A4DnOovrem3nhgsOowEEtazfAp8aApnAWHwneuBN7q0Ww2ZIfKWzMlc-HViezhOV-Wq2uH~kG-OFo7Ysx~9Ev7PG-Qp3zfroDiXcyB-RCMbHmUHF73l1JXBx8ChysHQ8iG0TwLuHhmCL9rzz7YwF7WTbHrTxGZAAtCCxK8DQ~ElJKnu2NDSIk1dEyd~KCCszEEdVVbZgopMmqR5ODFp1Db88Ywf-4pZIBYDwRKZ1h-WgSmxPrxP41xagUjS0dVn5OU27M2UN7XtNqNYiKODYVNw__"/>
    </div>
  );
}
