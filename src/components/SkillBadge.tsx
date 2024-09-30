'use client';

import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ChevronRight } from 'lucide-react'; // Add this import

interface SkillBadgeProps {
    name: string;
    description: string;
}

export function SkillBadge({ name, description }: SkillBadgeProps) {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger>
                    <Badge className="flex items-center gap-1">
                        {name}
                        <ChevronRight size={14} />
                    </Badge>
                </TooltipTrigger>
                <TooltipContent className="bg-white text-black shadow-md">
                    <p>{description}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}