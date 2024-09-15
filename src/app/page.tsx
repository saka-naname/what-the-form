import PasswordInput from "@/components/form/PasswordInput";
import UsernameInput from "@/components/form/UsernameInput";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen bg-gray-200">
      <Card className="px-4 py-8 flex flex-col items-center">
        <CardHeader className="mb-4">
          <CardTitle className="text-center mb-4">新規ユーザー登録</CardTitle>
          <CardDescription className="text-center">
            ※このサイトはジョークサイトです。
            <br />
            　実際にデータが送信されたり
            <br />
            会員登録が行われたりすることはありません。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
            <UsernameInput />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-8">
            <PasswordInput />
          </div>
          <Separator className="my-4" />
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Button className="mt-8">登録</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
