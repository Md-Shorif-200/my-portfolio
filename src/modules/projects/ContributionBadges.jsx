// ContributionBadges.jsx
import { Building2, Briefcase } from "lucide-react";

function ContributionBadges({ contributions = {} }) {
  return (
    <div className="flex items-center gap-2">
      {/* Organization badge — light gray */}
      <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 px-3 py-1 text-xs font-medium text-gray-700 dark:text-neutral-300">
        <Building2 className="w-3.5 h-3.5" />
        {contributions.organization}
      </span>
      {/* Role badge — emerald */}
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-white">
        <Briefcase className="w-3.5 h-3.5" />
        Role: {contributions.role}
      </span>
    </div>
  );
}

export default ContributionBadges;
