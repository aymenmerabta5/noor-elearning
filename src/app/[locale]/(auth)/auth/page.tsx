import { type FC } from "react";
import { Card } from "@/components/ui/card";
import { CircleUser } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Auth: FC = () => {
  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-center">
      <Card className="flex h-[calc(100vh-5rem)] w-[80%] flex-row items-center rounded-4xl">
        <div className="bg-primary h-[calc(100vh-5rem)] w-[50%] rounded-s-4xl"></div>
        <div className="flex h-full w-[50%] flex-col items-center justify-center p-3">
          <h1 className="flex w-full items-center gap-3">
            <CircleUser className="h-10 w-10" />
            Login To Your Account
          </h1>
          <form>
            <Input className="w-full" />
            <Input className="w-full" />
            <Button className="mt-4 w-full cursor-pointer rounded-4xl">
              Login
            </Button>
          </form>
        </div>
      </Card>
    </main>
  );
};

export default Auth;
