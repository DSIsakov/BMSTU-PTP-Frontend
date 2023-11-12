"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { baseURL } from "@/constants";
import { TeamAddProps } from "@/types";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

export default function AddTeam() {
  const router = useRouter();
  const [error, setError] = React.useState<string | null>(null);

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      members: [],
    },
  });

  async function onSubmit(values: TeamAddProps) {
    try {
      const response = await axios.post(`${baseURL}/auth/login/`, values);

      router.push("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error?.response?.statusText === "Unauthorized") {
          setError("Неверное имя пользователя или пароль!");
        } else {
          setError("Произошла ошибка при входе. Пожалуйста, попробуйте позже.");
        }
      }
      console.log(error);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="rounded-full bg-green-500 hover:bg-green-600 w-8 h-8"
        >
          <Image src="/assets/add.svg" alt="add_team" width={28} height={28} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-dark-2 border-green-500 text-light-1 rounded-lg">
        <DialogHeader className="items-center">
          <DialogTitle>Создать команду</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          {error && (
            <Alert variant="destructive" className="mb-2 text-center">
              <AlertTitle>Ошибка!</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col justify-start gap-5"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormControl>
                    <Input
                      type="text"
                      className="input no-focus"
                      placeholder="Название команды"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormControl>
                    <Input
                      type="text"
                      className="input no-focus"
                      placeholder="Описание"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-green-500 hover:bg-green-600">
              Создать
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
