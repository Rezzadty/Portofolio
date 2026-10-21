import { describe, it, expect } from "vitest";
import { PROJECTS } from "@features/projects/data/projects";
import { CERTIFICATIONS } from "@features/certifications/data/certifications";

describe("data integrity", () => {
  it("every project has required fields", () => {
    for (const p of PROJECTS) {
      expect(p.title).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.github).toMatch(/^https:\/\/github\.com\//);
      expect(p.technologies.length).toBeGreaterThan(0);
      expect(p.languages.length).toBeGreaterThan(0);
    }
  });

  it("every certification has required fields", () => {
    for (const c of CERTIFICATIONS) {
      expect(c.title).toBeTruthy();
      expect(c.issuer).toBeTruthy();
      expect(c.issueDate).toBeTruthy();
    }
  });

  it("pagination math is correct for projects", () => {
    const perPage = 4;
    const totalPages = Math.ceil(PROJECTS.length / perPage);
    expect(totalPages).toBeGreaterThan(0);
    expect(totalPages * perPage).toBeGreaterThanOrEqual(PROJECTS.length);
  });
});
