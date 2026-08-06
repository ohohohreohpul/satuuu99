import { motion } from 'framer-motion';
import { useLang } from '../lib/i18n';
import { CATEGORIES } from '../data/content';
import type { Category } from '../data/content';
import { Eyebrow } from '../components/ui/Eyebrow';
import { MediaFrame } from '../components/ui/MediaFrame';
import { ArrowRightIcon } from '../components/ui/Icons';
import { riseInSm, staggerFast, viewportOnce } from '../lib/motion';

/** Category tiles — one door per focus, each with a live count line. */
export function CategoryTiles() {
  const { t } = useLang();

  return (
    <section id="kategorien" className="mx-auto max-w-[100rem] px-5 py-[var(--space-section)] sm:px-8">
      <div className="mb-10 max-w-2xl">
        <Eyebrow>{t({ de: 'Finde dein Ritual', en: 'Find your ritual' })}</Eyebrow>
        <h2 className="mt-4" style={{ fontSize: 'var(--text-section)' }}>
          {t({ de: 'Wähle deinen', en: 'Choose your' })}{' '}
          <span className="font-editorial text-mocha">{t({ de: 'Fokus.', en: 'focus.' })}</span>
        </h2>
      </div>

      <motion.ul
        variants={staggerFast}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3"
      >
        {CATEGORIES.map((cat) => (
          <motion.li key={cat.id} variants={riseInSm}>
            <Tile category={cat} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

function Tile({ category }: { category: Category }) {
  const { t } = useLang();
  return (
    <a href={category.href} className="group relative block overflow-hidden rounded-card shadow-soft transition-shadow duration-500 hover:shadow-lift">
      <MediaFrame
        image={category.image}
        label={t(category.name)}
        aspect="aspect-[4/3] lg:aspect-[16/11]"
        tone="dark"
        imgClassName="transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mocha-deep/80 via-mocha-deep/15 to-transparent" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
        <div>
          <h3 className="font-display text-2xl text-linen sm:text-3xl">{t(category.name)}</h3>
          <p className="mt-1 text-[0.8rem] text-linen/75">{t(category.meta)}</p>
        </div>
        <span className="mb-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-linen/15 text-linen backdrop-blur-sm transition-all duration-500 group-hover:bg-linen group-hover:text-mocha" aria-hidden>
          <ArrowRightIcon className="h-4 w-4" />
        </span>
      </div>
    </a>
  );
}
