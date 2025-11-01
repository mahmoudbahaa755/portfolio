import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 py-20 px-4">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <p className="text-xl text-muted-foreground">
          The project you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
      </div>

      <div className="flex gap-4 flex-wrap justify-center pt-6">
        <Button asChild size="lg">
          <Link href="/projects">Browse All Projects</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
