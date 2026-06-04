export function getWorkspaceLink(path: string, domain?: string) {
  const isLocal =
    process.env.NODE_ENV === "development" ||
    (typeof window !== "undefined" &&
      (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"));

  if (isLocal) {
    const currentDomain = domain || "example.com";
    const cleanPath = path === "/" ? "" : path;
    return `/workspace/${currentDomain}${cleanPath}`;
  }

  return path;
}