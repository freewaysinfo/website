import React from "react";
import { Container } from "../ui/Container";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export const SectionTitle = ({ preTitle, title, align = "center", children }: SectionTitleProps) => {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <Container className={`flex w-full flex-col ${alignment} mb-10`}>
      {preTitle && (
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {preTitle}
        </div>
      )}
      {title && (
        <h2 className="mt-3 text-3xl font-semibold leading-snug text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      )}
      {children && (
        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          {children}
        </p>
      )}
    </Container>
  );
};
