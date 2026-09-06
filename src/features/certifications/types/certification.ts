export interface CertificationItem {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  skills?: string[];
}

export type AnimationPhase = "visible" | "exit" | "entering" | "entered";
