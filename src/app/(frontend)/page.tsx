import { Page, PageContent, PageHeader, PageFooter } from "@/components";

export default function Home() {
  return (
    <Page>
      <PageHeader>
        <h1>Page Title</h1>
      </PageHeader>
      <PageContent>
        <p>This is the page content.</p>
      </PageContent>
      <PageFooter>
        <p>Footer content</p>
      </PageFooter>
    </Page>
  );
}
