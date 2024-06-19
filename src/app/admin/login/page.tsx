"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Architects_Daughter } from "next/font/google";

import apiClient from "@/lib/api-client";
import { ADMIN_API_ROUTES } from "@/utils/api-routes";
import { useAppStore } from "@/store/store";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { 
  Card, 
  CardBody, 
  CardFooter, 
  CardHeader 
} from "@nextui-org/card";

const ArchitectsDaughter = Architects_Daughter({
  weight: "400",        // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",      // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
});

type Props = {};

const LoginPage = (props: Props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserInfo } = useAppStore();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = 
        await apiClient
          .post(ADMIN_API_ROUTES.LOGIN, { 
            email, 
            password 
          });

      if( response.data.userInfo ) {
        // console.log( response.data.userInfo );
        setUserInfo( response.data.userInfo );
        router.push("/admin");
      }
    } catch (error) {
        console.log( "Error retrieving login info." )
    }
  }

  return (
    <div
        className="h-[100vh] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/home/home-bg.png")',
        }}
      >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-2xl"></div>
      <Card className="shadow-2xl bg-opacity-20 w-[480px]">
        <CardHeader className="flex flex-col gap-1 capitalize text-3xl items-center">
          <div>
            <Image
                src="/logo.png"
                alt="logo"
                height={80}
                width={80}
                className="cursor-pointer"
                // onClick={() => router.push("/admin/dashboard")}
              />
            <span className="text-xl uppercase font-medium italic text-white">
              <span className={ArchitectsDaughter.className}>
                ARKLYTE Admin Login
              </span>
            </span>
          </div>
        </CardHeader>
        <CardBody className="flex flex-col items-center w-full justify-center">
          <div className="flex flex-col gap-2 w-full">
            <Input
                placeholder="Email"
                type="email"
                color="danger"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              >
            </Input>
            <Input 
                placeholder="Password"
                type="password"
                color="danger"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              >
            </Input>
          </div>
        </CardBody>
        <CardFooter className="flex flex-col gap-2 items-center justify-center">
          <Button 
              color="danger"
              variant="shadow"
              onClick={handleLogin}
              className="w-full capitalize"
              size="lg"          
            >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
