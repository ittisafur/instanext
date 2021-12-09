import React from "react";
import Link from "next/link";
import * as yup from "yup";
import { loginWithFacebook } from "@/lib/auth";
import { AiFillFacebook } from "react-icons/ai";
import Card from "@/components/Card";
import AppForm from "./Form/AppForm";
import FormInput from "./Form/FormInput";
import Button from "./Form/Button";
import { useAuth } from "@/hooks/useAuth";

const LoginForm = () => {
  const { signin } = useAuth();

  return (
    <>
      <Card className="p-4">
        <img
          src="/images/logo.png"
          alt="Instagram"
          className="w-6/12 mx-auto mb-3"
        />

        <AppForm
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={signin}
        >
          <div className="flex flex-col space-y-3">
            <FormInput placeholder="Email address" name="email" />
            <FormInput placeholder="Password" name="password" type="password" />
            <Button type="submit">Login</Button>
          </div>
        </AppForm>
      </Card>

      <div className="flex justify-center my-2">
        <button
          onClick={loginWithFacebook}
          className="flex items-center space-x-1 font-semibold text-blue-medium"
        >
          <AiFillFacebook height="18px" />
          <span>Login with facebook</span>
        </button>
      </div>

      <Card>
        <p className="p-4 text-sm">
          Don't have an account?{" "}
          <Link href="/accounts/signup">
            <a className="font-bold text-blue-medium">Signup Now</a>
          </Link>
        </p>
      </Card>
    </>
  );
};

export default LoginForm;
