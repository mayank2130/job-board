import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { HandleChangeFunction, ProfileData } from "@/app/(protected)/profile/page";

interface AboutSectionProps {
  data: ProfileData;
  onChange: HandleChangeFunction;
}

const AchievementsSection = ({ data, onChange }: AboutSectionProps) => {
  const handleInputChange = (e:any) => {
    const { id, value } = e.target;
    onChange({ [id]: value });
  };

  return (
    <div className="flex space-x-32 pb-10">
      <div className="w-96">
        <h2 className="text-lg font-semibold mb-2">Your Achievements</h2>
        <p className="text-sm text-gray-500 mb-4">What are you proud of?</p>
      </div>
      <div className="w-full">
        <Textarea
          id="achievements"
          value={data.achievements}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          rows={10}
        />
      </div>
    </div>
  );
};

export default AchievementsSection;
