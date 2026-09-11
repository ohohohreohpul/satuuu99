import { Link } from "react-router-dom";
import type { FocusGroup } from "../../data/content";
import { useLang } from "../../lib/i18n";
import { ArrowRightIcon } from "../ui/Icons";

export function TreatmentCatalogue({ groups }: { groups: FocusGroup[] }) {
  const { t } = useLang();
  return (
    <div className="catalogue">
      {groups.map((group, groupIndex) => (
        <section className="catalogue-group" id={group.id} key={group.id}>
          <div className="catalogue-heading">
            <p className="eyebrow">
              0{groupIndex + 1} / {t(group.word)}
            </p>
            <h2>{t(group.title)}</h2>
            <p>{t(group.blurb)}</p>
          </div>
          <div className="catalogue-list">
            {group.treatments.map((item, itemIndex) => (
              <Link
                className="catalogue-item"
                to={`/behandlungen/${item.id}`}
                key={item.id}
              >
                <span className="catalogue-number">0{itemIndex + 1}</span>
                <span>
                  {t(item.name)}
                  {item.isNew && <small>{t({ de: "Neu", en: "New" })}</small>}
                </span>
                <ArrowRightIcon />
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
