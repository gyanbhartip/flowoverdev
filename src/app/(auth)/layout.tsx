import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
