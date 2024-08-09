import React from "react";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HandleChangeFunction, ProfileData } from "@/app/(protected)/profile/page";

interface AboutSectionProps {
  data: ProfileData;
  onChange: HandleChangeFunction;
}

const SkillsSection = ({ data, onChange }:AboutSectionProps) => {
  const handleRemoveSkill = (index: number) => {
    const updatedSkills = data.skills.filter((_: any, i: any) => i !== index);
    onChange({ skills: updatedSkills });
  };

  const handleAddSkill = (e: any) => {
    if (e.key === "Enter") {
      onChange({ skills: [...data.skills, e.target.value] });
      e.target.value = "";
    }
  };

  return (
    <div className="flex border-b-2 space-x-32 pb-10">
      <div className="w-96">
        <h2 className="text-lg font-semibold mb-2">Your Skills</h2>
        <p className="text-sm text-gray-500 mb-4">
          This will help startups hone in on your strengths.
        </p>
      </div>
      <div className="w-full">
        <div className="flex flex-wrap gap-2 mb-4">
          {data.skills.map((skill, index) => (
            <span key={index} className="px-2 bg-gray-100 rounded flex items-center">
              {skill}
              <Button variant="ghost" onClick={() => handleRemoveSkill(index)} className="ml-2 text-gray-500">
                <X />
              </Button>
            </span>
          ))}
        </div>
        <Input
          type="text"
          onKeyDown={handleAddSkill}
          placeholder="Enter a skill and press Enter"
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
    </div>
  );
};

export default SkillsSection;
