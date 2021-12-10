import Card from "@/components/Card";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";

const emailsignup = () => {
  return (
    <div className="flex flex-col h-screen max-w-sm mx-auto mt-20 space-y-4">
      <LoginForm />
      <Card>
        <div className="text-sm text-center text-gray-700">
          <p>
            Don't have an account?
            <Link href="/accounts/signup">
              <a className="font-semibold"> Signup</a>
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default emailsignup;
