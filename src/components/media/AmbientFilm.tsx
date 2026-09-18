import { FILMS, FILM_DIR, type FilmId } from "../../data/media/films";

/** Every ambient loop is rendered at 1280x720 by scripts/media/build-media.mjs. */
const FILM_WIDTH = 1280;
const FILM_HEIGHT = 720;
import { useLang } from "../../lib/i18n";
import { VideoLoop } from "../ui/VideoLoop";

/**
 * A short silent loop used as atmosphere. Reduced-motion visitors and
 * browsers that fail to play the file see the poster frame instead.
 */
export function AmbientFilm({
  id,
  className = "",
}: {
  id: FilmId;
  className?: string;
}) {
  const { t } = useLang();
  return (
    <VideoLoop
      src={`${FILM_DIR}/${id}.mp4`}
      poster={`${FILM_DIR}/${id}-poster.jpg`}
      label={t(FILMS[id].alt)}
      className={className}
      width={FILM_WIDTH}
      height={FILM_HEIGHT}
    />
  );
}
