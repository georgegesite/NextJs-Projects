import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenuToggle from "@/components/mobile-menu-toggle";

export function Navbar() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10">
      <div className="w-full max-w-5xl flex flex-col">
        <div className="flex justify-between items-center p-3 px-5 text-sm h-16">
          <div className="flex gap-5 items-center font-semibold">
            <Link href="/">TrainLab</Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Link href="/pace-generator" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Pace Generator
              </Link>
              <Link href="/hr-zone-generator" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                HR Zone Generator
              </Link>
              {!hasEnvVars ? (
                <EnvVarWarning />
              ) : (
                <Suspense>
                  <AuthButton />
                </Suspense>
              )}
            </div>

            <MobileMenuToggle targetId="mobile-menu" />
          </div>
        </div>

        <div id="mobile-menu" className="md:hidden hidden border-t border-t-foreground/10 bg-background">
          <div className="flex flex-col p-4 gap-3">
            <Link href="/pace-generator" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Pace Generator
            </Link>
            <Link href="/hr-zone-generator" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              HR Zone Generator
            </Link>
            {!hasEnvVars ? (
              <EnvVarWarning />
            ) : (
              <Suspense>
                <AuthButton />
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
