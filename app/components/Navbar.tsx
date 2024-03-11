import Link from "next/link";
import { ThemeToggle } from "./Themetoggle";
import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserNav } from "./UserNav";
import Image from "next/image";
import { buttonVariants } from '@/components/ui/button';
import { CenteredMenu } from "./Section/CenteredMenu";
import { Section } from "./Section/Section";

export async function Navbar() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="border-b bg-background h-[10vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-3xl">
            <Image src="/Home.png" alt="Home Icon" width={100} height={100} />
          </h1>
        </Link>

        <div className="flex items-center gap-x-5">
          <ThemeToggle />

          {(await isAuthenticated()) ? (
            <UserNav
              email={user?.email as string}
              image={user?.picture as string}
              name={user?.given_name as string}
            />
          ) : (
            <div className="flex items-center gap-x-5">
              <LoginLink>
                <Button>Sign In</Button>
              </LoginLink>

              <RegisterLink>
                <Button variant="secondary">Sign Up</Button>
              </RegisterLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const Logo = () => (
  <div className="flex items-center text-xl font-semibold">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.33-8.77l-1.2-3.21a.6.6 0 00-.55-.38h-2.16a.6.6 0 00-.55.38l-1.2 3.21-2.93.85a.6.6 0 00-.35.77l1.4 2.54a.6.6 0 00.49.3h3.18l1.04 3.17a.6.60 0 00.56.42c.25 0 .49-.14.58-.36l1.5-3.33 2.54-1.4a.6.60 0 00.35-.77l-2.17-2.47zm-3.28 1.94h-2.1l-1.38-1.74h4.86l-1.38 1.74zm3.83.79l-1.93 1.06-1.26 2.81-1.25-2.81-1.92-1.06 1.02-1.16h3.31l1.02 1.16z"/>
</svg>
    Nordkurve 12 e.V.
  </div>
);

export { Logo };

export const NavbarTest = () => {

  return (
    <Section className="px-3 py-6">
      <CenteredMenu
        logo={<Logo />}
        rightMenu={
          <>
            <li>
              <LoginLink>Log in</LoginLink>
            </li>
            <li>
              <Link className={buttonVariants()} href="/sign-up">
                Sign up
              </Link>
            </li>
          </>
        }
      >
        <li>
          <Link href="/">(ticketing)</Link>
        </li>

        <li>
          <Link href="/store">(fanshop)</Link>
        </li>

        <li>
          <Link href="/">(newsletter)</Link>
        </li>

        <li>
          <Link href="/">(spieltag info)</Link>
        </li>

        <li>
          <Link href="/">(account)</Link>
        </li>
      </CenteredMenu>
    </Section>
  );
};