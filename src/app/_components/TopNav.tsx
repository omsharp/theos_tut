import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export function TopNav() {
  return (
    <nav className="item-center flex w-full justify-between border-b p-4 text-xl font-semibold">
      <div>Gallary</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
