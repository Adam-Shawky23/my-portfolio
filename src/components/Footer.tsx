import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border/70 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 font-mono text-xs text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <p className="text-muted/70">designed &amp; built from scratch, no template</p>
      </div>
    </footer>
  );
}
