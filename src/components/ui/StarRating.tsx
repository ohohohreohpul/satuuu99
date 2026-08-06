import { StarIcon } from './Icons';

interface StarRatingProps {
  /** e.g. "4,9" */
  value: string;
  /** e.g. "683" */
  reviews?: string;
  /** localized "Sterne" / "stars" + "Reviews" label */
  starsLabel?: string;
  reviewsLabel?: string;
  className?: string;
  size?: 'sm' | 'md';
}

/** Gold star row with rating + review count, after soulhouse.me. */
export function StarRating({
  value,
  reviews,
  starsLabel = 'Sterne',
  reviewsLabel = 'Reviews',
  className = '',
  size = 'sm',
}: StarRatingProps) {
  const star = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4';
  return (
    <span className={`inline-flex items-center gap-2 text-sm text-stone ${className}`}>
      <span className="inline-flex text-gold" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className={star} />
        ))}
      </span>
      <span className="whitespace-nowrap">
        ({value} {starsLabel})
        {reviews ? ` · ${reviews} ${reviewsLabel}` : ''}
      </span>
    </span>
  );
}
