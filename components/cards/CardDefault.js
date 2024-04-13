"use client";
import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const CardDefault = ({ img, title, description, link }) => {
  const router = useRouter();

  const handleButtonClick = (point) => {
    router.push(`/dashboard/${point}`);
  };

  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <Image src={img} width={2000} height={2000} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={() => handleButtonClick(link)}>Link</Button>
      </CardFooter>
    </Card>
  );
};

export default CardDefault;
