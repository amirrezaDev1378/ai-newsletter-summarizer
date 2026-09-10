import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";
import { formatGroupDate, shortId } from "~/lib/format";
import type { SummaryGroup } from "~/lib/api";

type SummaryListProps = {
  groups: SummaryGroup[];
  selectedDate?: string;
  selectedId?: string;
  selectedTitle?: string;
  onSelect: (date: string, id: string) => void;
};

export function SummaryList({
  groups,
  selectedDate,
  selectedId,
  selectedTitle,
  onSelect,
}: SummaryListProps) {
  return (
    <nav className="flex flex-col gap-6">
      {groups.map((group) => (
        <section key={group.date} className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2 px-1">
            <h2 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {formatGroupDate(group.date)}
            </h2>
            <Badge variant="secondary">{group.items.length}</Badge>
          </div>
          <ul className="flex flex-col gap-1">
            {group.items.map((item) => {
              const selected =
                group.date === selectedDate && item.id === selectedId;

              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onSelect(group.date, item.id)}
                    className={cn(
                      "w-full rounded-lg px-3 py-2 text-left transition-colors",
                      selected
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted",
                    )}
                  >
                    <span className="block text-sm font-medium line-clamp-2">
                      {selected && selectedTitle ? selectedTitle : "Summary"}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 block font-mono text-xs",
                        selected
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground",
                      )}
                    >
                      {shortId(item.id)}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </nav>
  );
}
