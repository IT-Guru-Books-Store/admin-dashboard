"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
  Spinner,
  Alert,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { loginUser } from "@/services/userService";
import { USER_STATES } from "@/constants/constant";
import { addAuthenticationTokens } from "@/utils/authUtils";

const LoginCard = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [userState, setUserState] = useState(USER_STATES.NOT_LOGGED_IN);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsError(false);
    setErrorMessage("");
    try {
      const data = await loginUser(email, password);
      const { user, _tokenResponse, userRole } = data;
      addAuthenticationTokens(user, _tokenResponse, userRole);

      setUserState(USER_STATES.LOGGED_IN);
      router.push("/dashboard");
    } catch (error) {
      console.error(error, " Error ocurred when login");
      setIsError(true);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (userState === USER_STATES.LOGGED_IN) {
    return <Spinner className="h-16 w-16 text-gray-900/50" />;
  }

  return (
    <div className="flex flex-col items-center gap-10">
      <Card className="w-96 shadow-lg">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Wellcome!
          </Typography>
          <Typography variant="h6" color="white">
            Bookstore Admin Dashboard
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            type="email"
            label="Email"
            size="lg"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            label="Password"
            size="lg"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            onClick={handleLogIn}
            loading={loading}
          >
            Sign In
          </Button>
        </CardFooter>
      </Card>
      {isError && (
        <Alert color="red">{`${errorMessage}. Please try again.`}</Alert>
      )}
    </div>
  );
};

export default LoginCard;
