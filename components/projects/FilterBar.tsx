"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown, Filter } from "lucide-react";
import { Skills } from "@/utils/config";

type Props = {
  filter: string;
  setFilter: (v: string) => void;
  allTechs: Skills[];
  selectedTechs: Skills[];
  toggleTech: (tech: Skills) => void;
  clearTechs: () => void;
  showFilters: boolean;
  setShowFilters: (v: boolean) => void;
};

export default function FilterBar({
  filter,
  setFilter,
  allTechs,
  selectedTechs,
  toggleTech,
  clearTechs,
  showFilters,
  setShowFilters,
}: Props) {
  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Filter projects by title or technology..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full md:max-w-md mx-auto"
      />

      <div className="pt-3">
        <div className="flex items-center justify-center md:justify-start gap-2">
          <button
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-card border border-border md:hidden"
            onClick={() => setShowFilters(!showFilters)}
            aria-expanded={showFilters}
          >
            <Filter className="h-4 w-4" />
            Filters
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : "rotate-0"}`} />
          </button>

          <div className="hidden md:block">
            {selectedTechs.length > 0 && (
              <Button variant="ghost" size="sm" onClick={clearTechs}>
                Clear
              </Button>
            )}
          </div>
        </div>

        <div className={`mt-3 ${showFilters ? "block" : "hidden"} md:block`}>
          <div className="flex gap-2 md:flex-wrap overflow-x-auto md:overflow-visible no-scrollbar py-1 px-1 md:p-0 snap-x">
            {allTechs.map((tech) => {
              const active = selectedTechs.includes(tech);
              return (
                <button
                  key={tech}
                  type="button"
                  onClick={() => toggleTech(tech)}
                  className={`snap-start whitespace-nowrap px-3 py-1 rounded-full text-sm border transition-colors duration-200 flex items-center gap-2 ${
                    active ? "bg-primary text-white border-primary" : "bg-card text-muted-foreground border-border"
                  }`}
                >
                  {tech}
                </button>
              );
            })}

            {selectedTechs.length > 0 && (
              <div className="flex items-center">
                <Button variant="ghost" size="sm" onClick={clearTechs}>
                  Clear
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
