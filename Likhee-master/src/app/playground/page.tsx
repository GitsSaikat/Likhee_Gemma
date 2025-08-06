
import { PlaygroundEditor } from "@/components/playground/playground-editor";
import { UserStatus } from "@/components/likhee/user-status";

export default function PlaygroundPage() {
  return (
    <>
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
            <div className="container mx-auto flex items-center justify-between h-16 px-4">
              <UserStatus showHomeButton={true} />
              <div className="flex items-center gap-4">
                <UserStatus showXp={false} />
              </div>
            </div>
        </header>
        <PlaygroundEditor />
    </>
  );
}
