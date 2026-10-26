import { Link } from 'wouter';
import { PageHeading, SiteLayout } from '@/components/site-layout';

export default function NotFound() {
  return (
    <SiteLayout>
      <PageHeading
        eyebrow="Page not found"
        title="That page isn't here."
        description="The page may have moved. Head back to Bikers Dhaba's home page to find the menu, location and contact details."
      />
      <section className="section">
        <div className="container">
          <Link href="/" className="button" data-testid="link-not-found-home">
            Return to home
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
