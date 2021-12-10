import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const RegisterForm = () => {
  return (
    <Card>
      <img
        src="/images/logo.png"
        alt="Instagram"
        className="w-6/12 mx-auto mb-3"
      />
      <form>
        <div className="flex flex-col space-y-2">
          <input
            placeholder="Full name"
            className="w-full h-2 px-4 py-5 text-sm border rounded text-gray-base border-gray-primary focus:outline-none"
          />
          <input
            placeholder="Username"
            className="w-full h-2 px-4 py-5 text-sm border rounded text-gray-base border-gray-primary focus:outline-none"
          />
          <input
            placeholder="Email address"
            className="w-full h-2 px-4 py-5 text-sm border rounded text-gray-base border-gray-primary focus:outline-none"
          />
          <input
            placeholder="Password"
            type="password"
            className="w-full h-2 px-4 py-5 text-sm border rounded text-gray-base border-gray-primary focus:outline-none"
          />
          <Button>Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default RegisterForm;
