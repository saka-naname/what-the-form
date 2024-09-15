"use client";

import { Button } from "../ui/button";
import { useState } from "react";

const ExplosiveButton = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <>
      {pressed ? (
        <p className="text-center italic">To be continued...</p>
      ) : (
        <Button type="button" className="mt-8" onClick={() => setPressed(true)}>
          登録
        </Button>
      )}
    </>
  );
};

export default ExplosiveButton;
