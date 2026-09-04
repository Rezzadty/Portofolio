export interface ContactChannel {
  name: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    name: "Email",
    label: "rezaadityaprabowo474@gmail.com",
    href: "mailto:rezaadityaprabowo474@gmail.com",
  },
  {
    name: "WhatsApp",
    label: "+62 812-2509-9450",
    href: "https://wa.me/6281225099450",
    isExternal: true,
  },
  {
    name: "LinkedIn",
    label: "linkedin.com/in/rezaadityaprabowo/",
    href: "https://linkedin.com/in/rezaadityaprabowo/",
    isExternal: true,
  },
];
