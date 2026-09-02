import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page not found — Krishna Suresh";
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="container-page section-y"><div className="measure">
        <p className="label-eyebrow mb-4">Error 404</p>
        <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground mb-3">
          This page doesn't exist<span className="text-primary">.</span>
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          The link may be out of date. The work and about pages are still where you left them.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-medium lift-hover t-base hover:bg-primary-hover"
          >
            <ArrowLeft size={14} /> Back home
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-md text-sm font-medium text-foreground lift-hover t-base hover:border-primary/60 hover:bg-card"
          >
            View work
          </Link>
        </div>
      </div>
      </section>
    </Layout>
  );
};

export default NotFound;
