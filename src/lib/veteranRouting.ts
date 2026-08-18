export const VETERAN_INTERNAL_PREFIX = "/veterans";
export const VETERAN_HOSTNAME = "veterans.patriotk9kennel.com";
export const VETERAN_LOCAL_HOSTNAME = "veterans.localhost";

const veteranHostnames = new Set([
  VETERAN_HOSTNAME,
  VETERAN_LOCAL_HOSTNAME,
]);

function ensureLeadingSlash(path: string) {
  if (!path) {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

export function normalizeHostname(host: string | null | undefined) {
  if (!host) {
    return "";
  }

  return host.split(":")[0].toLowerCase();
}

export function isVeteranHostname(host: string | null | undefined) {
  return veteranHostnames.has(normalizeHostname(host));
}

export function toVeteranInternalPath(path: string) {
  const normalizedPath = ensureLeadingSlash(path);

  if (
    normalizedPath === VETERAN_INTERNAL_PREFIX ||
    normalizedPath.startsWith(`${VETERAN_INTERNAL_PREFIX}/`)
  ) {
    return normalizedPath;
  }

  if (normalizedPath === "/") {
    return VETERAN_INTERNAL_PREFIX;
  }

  return `${VETERAN_INTERNAL_PREFIX}${normalizedPath}`;
}

export function toVeteranPublicPath(path: string) {
  const normalizedPath = ensureLeadingSlash(path);

  if (normalizedPath === VETERAN_INTERNAL_PREFIX) {
    return "/";
  }

  if (normalizedPath.startsWith(`${VETERAN_INTERNAL_PREFIX}/`)) {
    return normalizedPath.slice(VETERAN_INTERNAL_PREFIX.length);
  }

  return normalizedPath;
}

export function getVeteranHref(path: string, useSubdomainPaths: boolean) {
  return useSubdomainPaths
    ? toVeteranPublicPath(path)
    : toVeteranInternalPath(path);
}

export function getComparableVeteranPath(
  pathname: string,
  useSubdomainPaths: boolean,
) {
  return useSubdomainPaths
    ? toVeteranPublicPath(pathname)
    : toVeteranInternalPath(pathname);
}

export function getVeteranRewritePath(pathname: string) {
  const normalizedPath = ensureLeadingSlash(pathname);

  if (
    normalizedPath === VETERAN_INTERNAL_PREFIX ||
    normalizedPath.startsWith(`${VETERAN_INTERNAL_PREFIX}/`)
  ) {
    return null;
  }

  return toVeteranInternalPath(normalizedPath);
}
