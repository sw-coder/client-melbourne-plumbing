/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA
 * ─────────────────────────────────────────────────────────────────────────────
 * Business-specific copy: name, phone, email, address, socials.
 * Imported by Header, Footer, Contact page, and Head/SEO components.
 *
 * No component should hardcode a business name or phone number —
 * everything comes from this file or brand.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: 'Melbourne Metro Plumbing',
  email: 'info@melbournemetroplumbing.com.au',
  phoneForTel: '0400123456',
  phoneFormatted: '0400 123 456',
  license: 'Lic# 982341',
  address: {
    lineOne: '123 Main Street',
    lineTwo: '',
    city: 'Donvale',
    state: 'VIC',
    zip: '3111',
    country: 'AU',
    mapLink: 'https://maps.google.com/?q=Donvale+VIC+3111',
  },
  socials: {
    facebook: 'https://www.facebook.com/melbourneplumbing',
    instagram: 'https://www.instagram.com/melbourneplumbing',
    google: 'https://www.google.com/maps',
  },
  domain: 'https://melbournemetroplumbing.com.au',
} as const;

export type Client = typeof client;
