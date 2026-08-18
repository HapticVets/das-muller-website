const normalizePath = (path: string) => {
  if (!path || path === "/") {
    return "";
  }

  return path.startsWith("/") ? path : `/${path}`;
};

export const MAIN_SITE_URL = "https://www.patriotk9kennel.com";
export const VETERAN_SITE_URL = "https://veterans.patriotk9kennel.com";

export function buildAbsoluteSiteUrl(baseUrl: string, path = "/") {
  return `${baseUrl}${normalizePath(path)}`;
}

export function buildMainSiteUrl(path = "/") {
  return buildAbsoluteSiteUrl(MAIN_SITE_URL, path);
}

export function buildVeteranSiteUrl(path = "/") {
  return buildAbsoluteSiteUrl(VETERAN_SITE_URL, path);
}
