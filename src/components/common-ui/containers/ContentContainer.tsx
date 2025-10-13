import { cn } from '@/lib/utils';
import React, { Children } from 'react'

type ContentContainerProps = {
    children: React.ReactNode;
    className?: string;
 };
 const ContentContainer = ({ children, className }: ContentContainerProps) => {
    return (
       <div
          className={cn(
             "flex flex-col gap-4 px-3 w-full font-onest lg:40 xl:px-48 md:py-8 mx-auto container ",
             className
          )}
       >
          {children}
       </div>
    );
 };

export default ContentContainer