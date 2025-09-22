import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50">
        <h1>Welcome to link tree </h1>
        <p></p>

        <div>
            <SignUp/>
        </div>
    </div>
  );
}
