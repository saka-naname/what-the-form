"use client";

import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent } from "../ui/card";
import { BsCheck, BsX } from "react-icons/bs";

type Condition = {
  title: string;
  isCleared: boolean;
};

const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [stage, setStage] = useState(0);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newPassword = e.target.value;
      setPassword(newPassword);

      if (stage === 0) setStage(1);
      if (stage === 1) {
        if (newPassword.length >= 8) setStage(2);
      }
      if (stage === 2) {
        if (/[0-9]/.test(newPassword)) setStage(3);
      }
      if (stage === 3) {
        if (/[!-/:-@[-`{-~]/.test(newPassword)) {
          setStage(4);
        }
      }
    },
    [stage]
  );

  const conditions = useMemo<Condition[]>(() => {
    const textLength: Condition = {
      title: "文字数は8文字以上である必要があります",
      isCleared: password.length >= 8,
    };
    const includeNumber: Condition = {
      title: "数字を含む必要があります",
      isCleared: /[0-9]/.test(password),
    };
    const includeKigou: Condition = {
      title: "記号を含む必要があります",
      isCleared: /[!-/:-@[-`{-~]/.test(password),
    };
    const includeAlphabet: Condition = {
      title: "大文字と小文字を両方を含む必要があります",
      isCleared: /[a-z]/.test(password) && /[A-Z]/.test(password),
    };
    return [textLength, includeNumber, includeKigou, includeAlphabet];
  }, [password]);

  return (
    <>
      <Label htmlFor="password">パスワード</Label>
      <Input
        type="text"
        id="password"
        className="w-96"
        placeholder="パスワード"
        value={password}
        onChange={handleChange}
      />
      {stage > 0 && (
        <Card className="mx-2 mt-2">
          <CardContent className="gap-y-2 pt-5">
            {conditions.slice(0, stage).map((cond) => (
              <div key={cond.title} className="flex items-center gap-x-2">
                {cond.isCleared ? (
                  <BsCheck className="text-green-700" />
                ) : (
                  <BsX className="text-red-700" />
                )}
                <p className="text-sm">{cond.title}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default PasswordInput;
