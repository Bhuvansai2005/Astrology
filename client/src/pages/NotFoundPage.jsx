import { Button, Container } from '../components/UI';
import { useLanguage } from '../hooks';

export default function NotFoundPage() {
  const { t } = useLanguage();
  const nf = t.notFound;

  return (
    <div className="py-24 text-center bg-cream min-h-[60vh] flex items-center">
      <Container>
        <span className="mx-auto mb-4 block font-serif text-5xl text-gold select-none leading-none" aria-hidden="true">
          ॐ
        </span>
        <h1 className="font-serif text-4xl text-maroon mb-2">404</h1>
        <h2 className="font-serif text-2xl text-maroon mb-4">{nf.title}</h2>
        <p className="text-muted text-base max-w-md mx-auto mb-8">{nf.desc}</p>
        <Button variant="primary" href="/">
          {nf.backBtn} <span>→</span>
        </Button>
      </Container>
    </div>
  );
}

