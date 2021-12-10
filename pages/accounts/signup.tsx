import Card from "@/components/Card";
import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";

const emailsignup = () => {
  return (
    <div className="flex flex-col h-screen max-w-sm mx-auto mt-20 space-y-4">
      <RegisterForm />
      <Card>
        <div className="text-sm text-center text-gray-700">
          <p>
            Have an account?
            <Link href="/accounts/signin">
              <a className="font-semibold"> Signin</a>
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default emailsignup;
