"use client";

import { useCallback, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useToast } from "@/hooks/use-toast";

const UsernameInput = () => {
  const [name, setName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleYubaba = useCallback(() => {
    if (name.length < 2) return;

    setIsProcessing(true);
    toast({ description: `フン。${name}というのかい。贅沢な名だねぇ。` });

    setTimeout(() => {
      const newName = name.charAt(Math.random() * name.length);
      setName(newName);
      toast({
        description: `今からお前の名前は${newName}だ。いいかい、${newName}だよ。分かったら返事をするんだ、${newName}!!`,
      });
      setIsProcessing(false);
    }, 5000);
  }, [toast, name]);

  return (
    <>
      <Label htmlFor="name">ユーザー名</Label>
      <Input
        type="text"
        id="name"
        className="w-96"
        placeholder="契約書だよ。そこに名前を書きな。"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={handleYubaba}
        disabled={isProcessing}
      />
    </>
  );
};

export default UsernameInput;
