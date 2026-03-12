import type { AboutCapabilityTag } from "../types";
import { SkillTag } from "./SkillTag";

type SkillCategoryGroupProps = {
  tags: AboutCapabilityTag[];
};

export function SkillCategoryGroup({ tags }: SkillCategoryGroupProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag) => (
        <SkillTag key={`${tag.icon}-${tag.label}`} tag={tag} />
      ))}
    </div>
  );
}
